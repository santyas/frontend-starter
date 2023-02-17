import { NextSeo } from "next-seo"
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
			<NextSeo
				title="Frontend Starter"
				description="Example description"
				canonical={process.env.NEXT_PUBLIC_SITE_URL}
				openGraph={{
					url: process.env.NEXT_PUBLIC_SITE_URL,
					title: 'Frontend Starter',
					description: 'Example description',
					images: [
						{
							url: 'https://images.unsplash.com/photo-1656356594129-2dae4ec88923',
							width: 1200,
							height: 627,
							alt: 'Alt Image',
							type: 'image/jpeg',
						}
					],
					siteName: 'Frontend Starter',
				}}
			/>

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
