import Header from "../../components/HeaderFooter/Header";
import Footer from "../../components/HeaderFooter/Footer";
import { TbVirusSearch } from 'react-icons/tb';
import { AiOutlineAntDesign } from 'react-icons/ai';
import { TfiAnnouncement } from 'react-icons/tfi';
import { MdOutlineSlowMotionVideo, Md3DRotation } from 'react-icons/md';
import { HiPhotograph } from 'react-icons/hi';
import Link from "next/link";

const index = () => {
    return (
        <><Header />
            <div className="bg-theme">
                <div className="container">
                    <div className="font-bold text-center text-4xl py-10">Services</div>
                    <div className="grid grid-cols-2 gap-4 lg:grid-cols-3 text-center">

                        {/* <div className="flex flex-col md:flex-row gap-2"> */}
                            <Link href="/seo" className="serviceCardItemContainer">

                                <TbVirusSearch className='text-5xl text-secondColor' />
                                <h1>SEO</h1>

                            </Link>
                            <Link href="/seo" className="serviceCardItemContainer">

                                <AiOutlineAntDesign className='text-5xl text-secondColor' />
                                <h1>Graphics Design</h1>

                            </Link>
                            <Link href="/seo" className="serviceCardItemContainer">

                                <TfiAnnouncement className='text-5xl text-secondColor' />
                                <h1>Digital Marketing</h1>

                            </Link>
                        {/* </div>
                        <div className="flex flex-col md:flex-row gap-2"> */}
                            <Link href="/seo" className="serviceCardItemContainer">

                                <MdOutlineSlowMotionVideo className='text-5xl text-secondColor' />
                                <h1>Motion Graphics</h1>

                            </Link>
                            <Link href="/seo" className="serviceCardItemContainer">

                                <Md3DRotation className='text-5xl text-secondColor' />
                                <h1>2D/3D Animation</h1>

                            </Link>
                            <Link href="/seo" className="serviceCardItemContainer">

                                <HiPhotograph className='text-5xl text-secondColor' />
                                <h1>Photography</h1>

                            </Link>
                       {/* </div> */}

                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default index;