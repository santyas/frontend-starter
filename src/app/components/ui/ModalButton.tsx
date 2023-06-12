"use client"

import useModal from "@/store/store"

const ModalButton = () => {
	const openModalHandler = (): void => {
		useModal.setState(() => ({visibility: "flex"}))
	}

	return (
		<button onClick={ () => openModalHandler()}>Modal Button</button>
	)
}

export default ModalButton