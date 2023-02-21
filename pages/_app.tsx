import type {AppProps} from 'next/app'
import { DefaultSeo } from 'next-seo'

import { Inter } from '@next/font/google'
import Layout from "@/components/layout"

import '@/styles/globals.css'

const inter = Inter({ subsets: ['latin'] })

function MyApp({Component, pageProps}: AppProps) {

	return (
		<>
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

			<Layout className={inter.className}>
				<Component {...pageProps} />
			</Layout>
		</>
	)
}

export default MyApp