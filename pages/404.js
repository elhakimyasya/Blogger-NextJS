import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const NotFound = () => {
    // const router = useRouter();

    // useEffect(() => {
    //     setTimeout(() => {
    //         router.push('/');
    //     }, 5000);
    // });

    return (
        <div>
            <div className="px-2 pt-16 xl:pt-20">
                <h1 className="m-auto text-center text-5xl font-bold">Whooops!</h1>
                <p>Not Found!</p>
                <Link href="/">Back to Homepage</Link>
            </div>
        </div>
    );
};

export default NotFound;
