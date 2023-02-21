import {ReactNode} from "react"

import Navbar from "@/components/ui/Navbar"
import Footer from "@/components/ui/Footer"

interface Props {
	children?: ReactNode
	className: string
}

const Layout = ({children, className}: Props) => {
	return (
		<main className={className}>
			<Navbar/>
			<div>{children}</div>
			<Footer/>
		</main>
	)
}

export default Layout