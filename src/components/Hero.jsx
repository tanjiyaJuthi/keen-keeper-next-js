import Link from 'next/link';
import { FiPlus } from "react-icons/fi";

const Hero = () => {
    return (
        <div className="text-center pt-20">
            <p className="text-sm text-[#64748B]">Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.</p>

            <h1 className="mt-4 mb-6 text-5xl font-bold">Friends to keep close in your life</h1>

            <p className="inline-block">
                <Link href="#" className="flex gap-2 rounded-sm  text-white items-center p-2 bg-[#244D3F]"><FiPlus /> Add a Friend</Link>
            </p>
        </div>
    );
};

export default Hero;