import React, {Fragment, useRef} from 'react'
import { Dialog, Transition } from '@headlessui/react'

import useModal from "@/store/store"

interface Modal {
	children: React.ReactNode
}

const Modal = ({children}: Modal) => {
	const cancelButtonRef = useRef(null)

	const [visibility, setVisibility] = useModal((state) => [state.visibility, state.setVisibility])

	const closeModalHandler = (): void => {
		setVisibility()
	}

	return (
		<Transition.Root show={visibility == "flex"} as={Fragment}>
			<Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={() => closeModalHandler()}>
				<Transition.Child
					as={Fragment}
					enter="ease-out duration-300"
					enterFrom="opacity-0"
					enterTo="opacity-100"
					leave="ease-in duration-200"
					leaveFrom="opacity-100"
					leaveTo="opacity-0"
				>
					<div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
				</Transition.Child>

				<div className="fixed z-10 inset-0 overflow-y-auto">
					<div className="flex items-center justify-center min-h-full p-4 text-center sm:p-0">
						<Transition.Child
							as={Fragment}
							enter="ease-out duration-300"
							enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
							enterTo="opacity-100 translate-y-0 sm:scale-100"
							leave="ease-in duration-200"
							leaveFrom="opacity-100 translate-y-0 sm:scale-100"
							leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
						>
							<Dialog.Panel className="relative bg-white rounded-lg text-left py-6 px-12 overflow-hidden shadow-xl transform transition-all w-11/12 sm:w-11/12 md:w-7/12"> {/*  sm:max-w-lg sm:w-full */}
								<button className="hidden md:block absolute top-2 right-2" onClick={() => closeModalHandler()}>
									<svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
										<path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/>
									</svg>
								</button>
								<div className="bg-white flex flex-col space-y-4">
									{children}
								</div>

								<button onClick={() => closeModalHandler()} className="relative block md:hidden">
									<span className="relative" dangerouslySetInnerHTML={{__html: `Cerrar`}}/>
								</button>
							</Dialog.Panel>
						</Transition.Child>
					</div>
				</div>
			</Dialog>
		</Transition.Root>
	)
}

export default Modal