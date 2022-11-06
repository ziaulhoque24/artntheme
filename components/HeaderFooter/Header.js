import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { CgMenuLeft } from 'react-icons/cg';
import logo from "../../public/artnthemelogo.png"
import MobileNavMenu from "./MobileNavMenu";

const Header = () => {
    const [navMenu, setNavMenu] = useState(false);
    console.log(navMenu)
    const handleMenu = (val)=>{
if(val === "out"){
    setNavMenu(false)
}else if(val === "in"){
    setNavMenu(true)
}
    }
    return (
        
        <div className="bg-theme">
            <div className="container sticky top-0">
                <div className="flex justify-between items-center py-6">
                    <div className="lg:hidden" onClick={()=>handleMenu("in")}><CgMenuLeft className="text-[1.5em]" /></div>
                    <div className=""><Link href="/"><Image src={logo} alt="" width={200} layout="responsive" /></Link></div>
                    <div className="lg:hidden"></div>
                    <div className="hidden lg:inline-block"><div className="flex justify-center items-center gap-4 font-bold">
                        <Link href="/"><span>Home</span></Link>
                        <Link href="/"><span>Services</span></Link>
                        <Link href="https://artntheme.com" target="_blank"><span>Shop</span></Link>
                        <Link href="/contact"><span>Contact</span></Link>
                        
                    </div></div>
                </div>
            </div>
         <MobileNavMenu handleMenu={handleMenu} navMenu={navMenu}/>
        </div>

     
    );
}

export default Header;