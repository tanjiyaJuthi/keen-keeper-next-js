'use client'

import Link from 'next/link';
import { FaHome } from "react-icons/fa";
import { RiTimeLine } from "react-icons/ri";
import { ImStatsDots } from "react-icons/im";
import { usePathname } from 'next/navigation';
import Image from 'next/image';

const Navbar = () => {
    const pathname = usePathname();
    const isActive = (path) => pathname === path;

    const navLinks = <>
        <li className={`ml-2 ${isActive('/') ? 'bg-[#244D3F] rounded-sm text-white' : ''}`}>
            <Link href="/"><FaHome />Home</Link>
        </li>

        <li className={`ml-2 ${isActive('/timeline') ? 'bg-[#244D3F] rounded-sm text-white' : ''}`}>
            <Link href="/timeline"><RiTimeLine />Timeline</Link>
        </li>

        <li className={`ml-2 ${isActive('/stats') ? 'bg-[#244D3F] rounded-sm text-white' : ''}`}>
            <Link href="/stats"><ImStatsDots />Stats</Link>
        </li>
    </>

    return (
        <nav>
            <div className="bg-base-100 shadow-sm">
                <div className="max-w-7xl mx-auto">
                    <div className="navbar">
                        <div className="navbar-start">
                            <div className="dropdown">
                                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                                </div>

                                <ul
                                    tabIndex="-1"
                                    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                                    {navLinks}
                                </ul>
                            </div>

                            <Link href="/" className="btn btn-ghost text-xl">
                                <Image
                                    src="/assets/logo.png"
                                    width={100}
                                    height={100}
                                    alt="KeenKeeper"
                                />
                            </Link>
                        </div>

                        <div className="navbar-end">
                            <ul className="menu menu-horizontal px-1">
                                {navLinks}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;