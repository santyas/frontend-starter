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

					{/*<Script id="google-analytics" strategy="afterInteractive">
						{`
						(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
						new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
						j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
						'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
						})(window,document,'script','dataLayer','GTM-WXCHRF9');
					`}
					</Script>*/}

				</Head>
				<body>
				{/*<Script id="google-analytics" strategy="afterInteractive">
					{`
						<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-WXCHRF9" height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
					`}
				</Script>*/}

				<Main/>
				<NextScript/>
				</body>
			</Html>
		)
	}
}

export default MyDocument