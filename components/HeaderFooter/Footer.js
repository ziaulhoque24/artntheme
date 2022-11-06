import Image from "next/image";
import Link from "next/link";
import logo from "../../public/artnthemelogo.png"

const Footer = () => {
    return (
        <div className="w-full bg-theme">
            <div className="container">
                <div className="flex py-10 flex-col md:flex-row justify-center items-center md:justify-between gap-5">
                    <div className="w-[250px]"><Image src={logo} alt=""/> </div>
                    <div className="gap-5 flex flex-col items-center justify-center text-center">
                        <span className="text-lg">Hire us and achieve your business goal</span>
                        <span className="py-4 px-16 bg-myColor rounded-lg text-white font-bold">Contact Now</span>
                    </div>


                    <div className="w-[250px] flex justify-center items-center p-2 gap-4">
                        <span>Privacy police</span>
                        <span>About</span>

                    </div>
                </div>
                <div className="text-center pt-10 pb-2"> © artntheme.com 2022. <span>Design by <Link target="_blank" href="https://fb.com/ziaul.hoque24/">Ziaul Hoque</Link></span></div>
            </div>
        </div>
    );
}

export default Footer;