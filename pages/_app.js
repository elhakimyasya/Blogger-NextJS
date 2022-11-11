import '../styles/globals.css';
import Layout from '../components/Layout';
import Head from 'next/head';
import { Analytics } from '@vercel/analytics/react';

const App = ({ Component, pageProps }) => {
    return (
        <>
            <Layout>
                <Component {...pageProps} />
            </Layout>
            <Analytics />
        </>
    );
};

export default App;
