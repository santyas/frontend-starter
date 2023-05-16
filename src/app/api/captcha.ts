import type { NextApiRequest, NextApiResponse } from 'next'

const handlerCaptcha = (req: NextApiRequest, res: NextApiResponse) => {
	if (req.method === "POST") {
		try {
			fetch("https://www.google.com/recaptcha/api/siteverify", {
				method: "POST",
				headers: {
					"Content-Type": "application/x-www-form-urlencoded",
				},
				body: `secret=${process.env.V3_SECRET}&response=${req.body.gRecaptchaToken}`,
			}).then((reCaptchaRes) => reCaptchaRes.json())
				.then((reCaptchaRes) => {
					if (reCaptchaRes?.score > 0.5) {
						res.status(200).json({
							status: "success",
							message: "El mensaje ha sido enviado",
						})
					} else {
						return res.status(200).json({
							status: "failure",
							message: "Error al validar el formulario",
						})
					}
				})
		} catch (err) {
			res.status(405).json({
				status: "failure",
				message: "Error al procesar el formulario",
			})
		}
	} else {
		res.status(405)
		res.end()
	}
}

export default handlerCaptcha