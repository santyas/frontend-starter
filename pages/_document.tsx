import Document, {DocumentContext, Head, Html, Main, NextScript} from 'next/document'

class MyDocument extends Document {
	static async getInitialProps(ctx: DocumentContext) {
		return await Document.getInitialProps(ctx)
	}

	render() {
		return (
			<Html>
				<Head>
					<link rel="shortcut icon" href="/favicon.ico" />

					{/* <Script id="google-analytics" strategy="afterInteractive">
						{`
						(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
						new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
						j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
						'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
						})(window,document,'script','dataLayer','GTM-WXCHRF9');
					`}
					</Script> */}

				</Head>
				<body>
					{/* <Script id="google-analytics" strategy="afterInteractive">
					{`
					<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-WXCHRF9" height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
					`}
					</Script> */}

					<Main/>
					<NextScript/>
				</body>
			</Html>
		)
	}
}

export default MyDocument