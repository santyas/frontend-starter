import useModal from "@store/store"

import Modal from '@components/ui/Modal'
import styles from '@styles/Home.module.css'

const Home = () => {
	const [setVisibility] = useModal((state) => [state.setVisibility])

	const openModalHandler = (): void => {
		setVisibility()
	}

	return (
		<>
			<div className={styles.container}>
				<h1>index</h1>
				<button onClick={() => openModalHandler()}>Modal</button>
			</div>

			<Modal>
				<h1>Title</h1>
			</Modal>
		</>
	)
}

export default Home
