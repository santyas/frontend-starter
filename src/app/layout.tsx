import React from "react"
import {Metadata} from "next"
import { DefaultSeo } from 'next-seo'
import { Inter } from '@next/font/google'
import '@/styles/globals.css'

import Navbar from "../app/components/ui/Navbar"
import Footer from "../app/components/ui/Footer"

const inter = Inter({ subsets: ['latin'] })

/* agregar jsonLd con schema-dts */
export const metadata: Metadata = {
	title: 'Frontend Starter',
	description: 'Welcome to Next.js',
}

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

			<DefaultSeo
				openGraph={{
					type: 'website',
					locale: 'es_AR',
					url: process.env.NEXT_PUBLIC_SITE_URL,
					siteName: 'Frontend Starter',
				}}
				additionalMetaTags={[{
					name: 'viewport',
					content: 'initial-scale=1.0, maximum-scale=1.0, width=device-width'
				}]}
			/>

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
				</body>
			</html>
		</>
	)
}