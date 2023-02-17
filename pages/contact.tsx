import {useCallback, useEffect, useState} from "react"
import {useRouter} from 'next/router'

import {NextSeo} from "next-seo"
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3"
import {useGoogleReCaptcha} from "react-google-recaptcha-v3"

import {useForm, SubmitHandler} from 'react-hook-form'

interface FormInputs {
	name: string;
	lastname: string;
	email: string;
	tel?: number;
}

const Contact = () => {
	const {pathname} = useRouter()

	const [name, setName] = useState("")
	const [lastname, setLastname] = useState("")
	const [email, setEmail] = useState("")
	const [tel, setTel] = useState("")
	const [notification, setNotification] = useState("")

	const {executeRecaptcha} = useGoogleReCaptcha()

	const { register, handleSubmit, formState, formState: {errors}, reset } = useForm<FormInputs>()
	const onSubmit: SubmitHandler<FormInputs> = useCallback(async (formData) => {
		if (!executeRecaptcha) {
			return
		}

		await executeRecaptcha("enquiryFormSubmit").then((gReCaptchaToken) => {
			submitEnquiryForm(gReCaptchaToken, formData)
		})
	}, [executeRecaptcha])

	const submitEnquiryForm = (gReCaptchaToken: string, formData: FormInputs) => {
		const {name, lastname, email, tel} = formData

		try {
			fetch("/api/enquiry", {
				method: "POST",
				headers: {
					Accept: "application/json, text/plain, */*",
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					name: name,
					lastname: lastname,
					email: email,
					tel: tel,
					gRecaptchaToken: gReCaptchaToken,
				}),
			}).then((res) => res.json())
				.then((res) => {
					if (res?.status === "success") {
						fetch('/api/email', {
							method: 'post',
							body: JSON.stringify(formData)
						}).then(response => response.json())
							.then(() => setNotification(res.message))
					} else {
						setNotification(res.message)
					}
				})
		} catch (err) {
			setNotification("Error al procesar la información. Por favor intente nuevamente.")
		}
	}

	useEffect(() => {
		if (formState.isSubmitSuccessful) {
			reset()
			setName('')
			setLastname('')
			setEmail('')
			setTel('')
		}
	}, [formState, reset])

	return (
		<>
			<NextSeo
				title="Contact | Frontend Starter"
				description="Contact example description"
				canonical={`${process.env.NEXT_PUBLIC_SITE_URL}${pathname}`}
				openGraph={{
					url: `http://localhost:3000${pathname}`,
					title: 'Contact | Frontend Starter',
					description: 'Contact example description',
					images: [
						{
							url: 'https://images.unsplash.com/photo-1656356594129-2dae4ec88923',
							width: 1200,
							height: 627,
							alt: 'Alt Image',
							type: 'image/jpeg',
						}
					],
					siteName: 'Contact | Frontend Starter',
				}}
			/>

			<GoogleReCaptchaProvider
				reCaptchaKey={`${process.env.V3_KEY}`}
				scriptProps={{
					async: false,
					defer: false,
					appendTo: "head",
					nonce: undefined,
				}}
			>
				<section className="contact relative flex w-full h-fit justify-center mt-10 md:-mt-48">
					<div className="flex relative flex-col content-center items-center w-11/12 md:w-8/12 lg:w-6/12 px-8">

						<div className="z-20 w-10/12 md:w-8/12 space-y-6 py-8 md:py-20">
							<p className="text-center text-white text-base lg:text-xl">Si querés recibir más información sobre AME o tenés
								sospecha de un caso con síntomas similares, por favor compartinos tus datos y nos pondremos en
								contacto.</p>
							<form method="POST" onSubmit={handleSubmit(onSubmit)}> {/* handleSubmitForm */}
								<section className="flex flex-col w-full space-y-3 md:space-y-6">
									<div className="flex flex-col md:flex-row space-x-0 md:space-x-8 space-y-3 md:space-y-0">
										<input
											{...register("name", { required: true, pattern: /^[A-Za-z]+$/i })}
											id="name"
											value={name}
											onChange={(e) => setName(e?.target?.value)}
											name="name" type="text"
											placeholder="Nombre*"
											autoComplete="off"
											className={`w-full md:w-6/12 focus:outline-none placeholder:text-white/50 text-white focus:border-0 focus:border-b-2 focus:ring-0 bg-transparent border-b-2 border-0 border-b-2 border-fame-yellow focus:border-fame-yellow transition-colors ease-in-out duration-300 ${errors.name ? 'border-fame-red focus:border-fame-red' : 'border-fame-yellow focus:border-fame-yellow'}`}
										/>
										<input
											{...register("lastname", { required: true, pattern: /^[A-Za-z]+$/i })}
											id="lastname"
											value={lastname}
											onChange={(e) => setLastname(e?.target?.value)}
											name="lastname" type="text"
											placeholder="Apellido*"
											autoComplete="off"
											className={`w-full md:w-6/12 focus:outline-none placeholder:text-white/50 text-white focus:border-0 focus:border-b-2 focus:ring-0 bg-transparent border-b-2 border-0 border-b-2 border-fame-yellow focus:border-fame-yellow transition-colors ease-in-out duration-300 ${errors.lastname ? 'border-fame-red focus:border-fame-red' : 'border-fame-yellow focus:border-fame-yellow'}`}
										/>
									</div>
									<div className="flex flex-col md:flex-row space-x-0 md:space-x-8 space-y-3 md:space-y-0">
										<input
											{...register("email", { required: true, pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, })}
											id="email"
											type="email"
											value={email}
											onChange={(e) => setEmail(e?.target?.value)}
											name="email"
											placeholder="Email*"
											autoComplete="off"
											className={`w-full md:w-6/12 focus:outline-none placeholder:text-white/50 text-white focus:border-0 focus:border-b-2 focus:ring-0 bg-transparent border-b-2 border-0 border-b-2 border-fame-yellow focus:border-fame-yellow transition-colors ease-in-out duration-300 ${errors.email ? 'border-fame-red focus:border-fame-red' : 'border-fame-yellow focus:border-fame-yellow'}`}
										/>
										<input
											{...register("tel", {pattern: /^[0-9]+$/i})}
											id="tel"
											value={tel}
											onChange={(e) => setTel(e?.target?.value)}
											name="tel" type="tel"
											placeholder="Teléfono"
											autoComplete="off"
											className={`w-full md:w-6/12 focus:outline-none placeholder:text-white/50 text-white focus:border-0 focus:border-b-2 focus:ring-0 bg-transparent border-b-2 border-0 border-b-2 border-fame-yellow transition-colors ease-in-out duration-300 ${errors.tel ? 'border-fame-red focus:border-fame-red' : 'border-fame-yellow focus:border-fame-yellow'}`}
										/>
									</div>
									<div className="flex flex-col space-y-4 justify-center items-center text-center">
										<p className="text-white text-sm font-light">*Requerido</p>
										<button type="submit" className="bg-fame-yellow rounded-lg px-10 py-2 text-fame-green w-fit">Enviar
										</button>
										<p className="text-white">{notification}</p>
									</div>
								</section>
							</form>
						</div>

					</div>
				</section>
			</GoogleReCaptchaProvider>
		</>
	)
}

export default Contact