import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
    return (
        <header className="fixed top-0 flex min-h-[56px] w-full flex-row items-center justify-between bg-white py-2 px-3 shadow-md xl:min-h-[64px] ">
            <div className="mx-auto inline-flex w-full max-w-3xl flex-row items-center justify-between">
                <div className="inline-flex items-center justify-start xl:min-w-[200px]">
                    <Link href="/" className="flex flex-row items-center justify-center">
                        <h1 className="font-bold">EL Creative Academy</h1>
                    </Link>
                </div>
                <div className="inline-flex items-center justify-center"></div>
                <div className="inline-flex items-center justify-end xl:min-w-[200px]"></div>
            </div>
        </header>
    );
};

export default Navbar;
