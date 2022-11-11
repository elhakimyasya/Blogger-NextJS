import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

export const getStaticPaths = async () => {
    const response = await fetch('https://www.elcreativeacademy.com/feeds/posts/summary?max-results=6&alt=json');
    const data = await response.json();

    const paths = data.feed.entry.map((post) => {
        return {
            params: { id: post.id.$t.replace(/.*?post-(.*?)/g, '$1') },
        };
    });

    return {
        paths,
        fallback: false,
    };
};

export const getStaticProps = async (context) => {
    const id = context.params.id;
    const response = await fetch('https://www.googleapis.com/blogger/v3/blogs/4156644495655521536/posts/' + id + '?key=AIzaSyDwiv0JN7BQeuc6XEYLBf_uTHhYZNj-65I');
    const data = await response.json();

    return {
        props: {
            posts: data,
        },
    };
};

const Post = ({ posts }) => {
    const postTitle = posts.title + '| EL Creative Academy';
    return (
        <>
            <Head>
                <title>{postTitle}</title>
            </Head>
            <div className="mx-auto max-w-3xl px-4 pt-20 xl:px-0 xl:pt-20">
                <div className="flex w-full flex-col items-center justify-start ">
                    <div className="mb-2 w-full text-sm text-gray-600 dark:text-gray-200">
                        <Link href="/" className="font-bold">
                            Home
                        </Link>
                        <span className="mx-1">/</span>
                        <span>{posts.labels[0]}</span>
                    </div>
                    <h1 className="mb-2 w-full text-2xl font-bold text-slate-900 dark:text-slate-50">{posts.title}</h1>
                    <div className="mb-3 flex w-full flex-row items-start justify-center border-b pb-3 text-gray-600 dark:text-gray-200">
                        <Image src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhPzZlVciGeYVCgCEcfFKeNI8IhtFHNShFG_5Xavi8bej56zOpPRIjHEUZsTsLybpnEZkNJ6M-ivL0lcjLs9YEu_xVrD14a9gtcfxBAzIvwrmAY920GO9gkHtlljlwvRnLcRvD8WL5pbEcmgxCpct-7EJsMymUnpFCMxpTk8i0b0P7O82_kzKoEjeb3/w100/user-icon.webp" width={112} height={112} alt={posts.author.displayName} className="h-11 w-11 flex-shrink-0 flex-grow-0 rounded-full" />
                        <div className="flex w-full flex-col items-start justify-center text-sm ltr:ml-2 rtl:mr-2">
                            <span className="font-bold">{posts.author.displayName}</span>
                            <span>{posts.published}</span>
                        </div>
                    </div>
                    <div dangerouslySetInnerHTML={{ __html: posts.content }} className="prose:text-slate-900 dark:prose:text-slate-50 prose w-full" />
                </div>
            </div>
        </>
    );
};

export default Post;
