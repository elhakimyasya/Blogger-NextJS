import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

export const getStaticProps = async () => {
    const response = await fetch('https://www.elcreativeacademy.com/feeds/posts/summary?max-results=6&alt=json');
    const data = await response.json();

    return {
        props: {
            posts: data.feed.entry,
        },
    };
};

const Post = ({ posts }) => {
    return (
        <>
            <Head>
                <title>EL Creative Academy</title>
            </Head>
            <div className="mx-auto max-w-3xl px-4 pt-20 xl:px-0 xl:pt-20">
                {posts.map((post) => (
                    <article key={post.id.$t.replace(/.*?post-(.*?)/g, '$1')} id={post.id.$t.replace(/.*?post-(.*?)/g, '$1')} className="mb-3 flex w-full flex-col items-center justify-center border-b pb-3 lg:rounded-lg lg:border lg:py-2 lg:px-3">
                        <div className="flex w-full flex-row items-center justify-between">
                            <div className="w-full flex-col items-center justify-start ltr:mr-2 rtl:ml-2">
                                <span className="mb-1 w-full text-sm font-medium text-gray-600 dark:text-gray-200">{post.category[0].term}</span>
                                <Link className="mb-1 text-lg text-slate-900 hover:text-purple-900 dark:text-slate-50 dark:hover:text-purple-400" href={'/post/' + post.id.$t.replace(/.*?post-(.*?)/g, '$1')}>
                                    <h2 className="w-full font-bold">{post.title.$t}</h2>
                                </Link>
                                <div className="mb-1 text-sm text-gray-600 dark:text-gray-200">
                                    <span className="font-bold">{post.author[0].name.$t}</span> - <span className="text-sm">{post.published.$t}</span>
                                </div>
                                <span className="text-sm text-gray-600 line-clamp-2 dark:text-gray-200">{post.summary.$t}</span>
                            </div>
                            <Link className="h-28 w-28" href={'/post/' + post.id.$t.replace(/.*?post-(.*?)/g, '$1')}>
                                <Image src={post.media$thumbnail.url} width={112} height={112} alt={post.title.$t} className="rounded-md" />
                            </Link>
                        </div>
                        <div className="mt-2 w-full text-sm">
                            <Link className="text-purple-900 hover:underline dark:text-purple-400" href={post.link[4].href} target="_blank" rel="follow">
                                View Original Posts
                            </Link>
                        </div>
                    </article>
                ))}
            </div>
        </>
    );
};

export default Post;
