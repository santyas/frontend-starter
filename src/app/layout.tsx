import React from "react"
import {Metadata} from "next"

import { Inter } from 'next/font/google'
import '@/styles/globals.css'

import Modal from '@/components/ui/Modal'
import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"

/* agregar jsonLd con schema-dts */
export const metadata: Metadata = {
	title: 'Frontend Starter',
	description: 'Welcome to Next.js',
}

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({children}: { children: React.ReactNode; }) {
	return (
		<>
			<head>
				<link rel="shortcut icon" href="/favicon.ico" />

				{/*
				<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
				<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
				<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
				<link rel="manifest" href="/site.webmanifest">
				*/}

				{/*
				<Script id="google-analytics" strategy="afterInteractive">
					{`
					(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
					new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
					j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
					'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
					})(window,document,'script','dataLayer','GTM-WXCHRF9');
				`}
				</Script>
				*/}
			</head>


			<html lang="es" className={inter.className}>
				<body>
					{/*
					<Script id="google-analytics" strategy="afterInteractive">
					{`
					<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-WXCHRF9" height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
					`}
					</Script>
					*/}

					<Navbar/>
					{children}
					<Footer/>

					<Modal>
						<h1>Title</h1>
					</Modal>
				</body>
			</html>
		</>
	)
}