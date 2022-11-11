import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx);
        // locale is in ctx.locale

        return { ...initialProps, locale: ctx?.locale || 'en' };
    }

    render = () => (
        <Html dir={this.props.locale === 'ar' ? 'rtl' : 'ltr'} lang={this.props.locale}>
            <Head>
                <meta name="theme-color" content="#ffffff" />
                <link rel="manifest" href="/manifest.json" />
                <link href="/icons/32.png" rel="icon" type="image/png" sizes="32x32" />
                <link rel="apple-touch-icon" href="/apple-icon.png" />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}

export default MyDocument;
