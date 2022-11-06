import Link from "next/link";
import { AiOutlineClose } from 'react-icons/ai';

const MobileNavMenu = ({ navMenu, handleMenu }) => {
    return (
        <>
            <div onClick={() => handleMenu("out")} className={`fixed lg:hidden w-screen h-full top-0 bg-gray-200/70 z-10 ${navMenu ? "left-0" : "left-[-580px]"}`}>
                
            </div>
            <div className={`fixed lg:hidden w-4/5 h-full bg-[#efe6c7] top-0 z-10 transition-all ${navMenu ? "left-0" : "left-[-500px]"}`}>
                <div onClick={() => handleMenu("out")} className="m-1 p-2 text-2xl flex justify-end"><AiOutlineClose /></div>
                <div className="mt-20">
                    <ul className="space-y-2">
                        <li className="p-2 font-bold text-center"><Link href="/">Home</Link></li>
                        <li className="p-2 font-bold text-center"><Link href="/contact">Contact</Link></li>
                        <li className="p-2 font-bold text-center"><Link href="/">Shop</Link></li>
                        <li className="p-2 font-bold text-center"><Link href="/">Portfolio</Link></li>
                    </ul>
                </div>
            </div>
        </>

    );
}

export default MobileNavMenu;