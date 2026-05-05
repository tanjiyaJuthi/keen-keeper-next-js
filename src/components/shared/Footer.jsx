import Link from 'next/link';
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import Image from 'next/image';

const Footer = () => {
    return (
        <footer className="bg-[#244D3F] text-white text-center">
            <div className="max-w-6xl mx-auto">
                <div className="footer-top pt-20 pb-10">
                    <Image
                        src="/assets/logo-xl.png"
                        width={100}
                        height={100}
                        alt='KeenKeeper'
                        className='w-1/4 mx-auto'
                    />
                
                    <p className="pt-4 pb-6 text-gray-100">Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.</p>

                    <div>
                        <p className="pb-4 text-lg">Social Links</p>

                        <ul className="flex gap-2 items-center">
                            <li className="p-1 rounded-full bg-white text-black">
                                <Link href="#"><FaInstagram /></Link>
                            </li>

                            <li className="p-1 rounded-full bg-white text-black">
                                <Link href="#"><FaFacebook /></Link>
                            </li>

                            <li className="p-1 rounded-full bg-white text-black">
                                <Link href="#"><AiFillTwitterCircle /></Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="footer-bottom flex justify-between items-center py-9.5 border-t boder-[#32594c] text-sm">
                    <p>© 2026 KeenKeeper. All rights reserved.</p>

                    <ul className="flex gap-5  items-center">
                        <li>
                            <Link href='#' className="text-sm">Privacy Policy</Link>
                        </li>

                        <li>
                            <Link href='#' className="text-sm">Terms of Service</Link>
                        </li>

                        <li>
                            <Link href='#' className="text-sm">Cookies</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;