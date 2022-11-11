import '../styles/globals.css';
import Layout from '../components/Layout';
import Head from 'next/head';

const App = ({ Component, pageProps }) => {
    return (
        <>
            <Head>
                <link rel="manifest" href="/manifest.json" />
            </Head>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </>
    );
};

export default App;
