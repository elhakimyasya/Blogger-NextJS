import '../styles/globals.css';
import Layout from '../components/Layout';
import Head from 'next/head';

const App = ({ Component, pageProps }) => {
    return (
        <>
            <Head>
                <meta name="theme-color" content="#ffffff" />
                <link rel="manifest" href="/manifest.json" />
                <link href="/icons/32.png" rel="icon" type="image/png" sizes="32x32" />
                <link rel="apple-touch-icon" href="/apple-icon.png" />
            </Head>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </>
    );
};

export default App;
