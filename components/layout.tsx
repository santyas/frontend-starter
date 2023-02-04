import {ReactNode} from "react"

import Navbar from "@components/ui/Navbar"
import Footer from "@components/ui/Footer"

interface Props {
	children?: ReactNode
}

const Layout = ({children}: Props) => {
	return (
		<>
			<Navbar/>
			<main>{children}</main>
			<Footer/>
		</>
	)
}

export default Layout