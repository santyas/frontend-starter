import type {AppProps} from 'next/app'
import Head from 'next/head'

import Layout from "@components/layout"

import '@styles/globals.css'

function MyApp({Component, pageProps}: AppProps) {
	return (
		<>
			<Head>
				<meta name="viewport" content="initial-scale=1.0, maximum-scale=1.0, width=device-width" />
			</Head>

			<Layout>
				<Component {...pageProps} />
			</Layout>
		</>
	)
}

export default MyApp
