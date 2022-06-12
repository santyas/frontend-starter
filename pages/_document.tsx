import Document, {DocumentContext, Head, Html, Main, NextScript} from 'next/document'
import Script from 'next/script'

class MyDocument extends Document {
	static async getInitialProps(ctx: DocumentContext) {
		return await Document.getInitialProps(ctx)
	}

	render() {
		return (
			<Html>
				<Head>
					<meta name="description" content="Frontend Starter template" />
					<meta name="keywords" content="Frontend, Starter" />
					<meta property="og:type" content="website" />
					<meta property="og:url" content="http://localhost:3000/" />
					<meta property="og:title" content="Frontend Starter" />
					<meta property="og:description" content="Frontend Starter template" />
					<meta property="og:image" content="" />

					<link rel="shortcut icon" href="/favicon.ico" />
					<link rel="preconnect" href="https://fonts.googleapis.com"/>
					<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous"/>
					<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap" rel="stylesheet"/>

					{/*
					<Script
						src="https://www.googletagmanager.com/gtag/js?id=IIIIIIDDDDDD"
						strategy="afterInteractive"
					/>
					<Script id="google-analytics" strategy="afterInteractive">
						{`
						window.dataLayer = window.dataLayer || [];
						function gtag(){window.dataLayer.push(arguments);}
						gtag('js', new Date());
						
						gtag('config', 'GA_MEASUREMENT_ID');
					`}
					</Script>
					*/}

				</Head>
				<body>
				{/*
				<Script id="google-analytics" strategy="afterInteractive">
					{`
						<iframe src="https://www.googletagmanager.com/ns.html?id=IIIIIDDDDD" height="0" width="0" style="display:none;visibility:hidden"></iframe>
					`}
				</Script>
				*/}

				<Main/>
				<NextScript/>
				</body>
			</Html>
		)
	}
}

export default MyDocument