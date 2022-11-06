import Link from 'next/link';
import { BsFillPatchCheckFill, BsWhatsapp } from 'react-icons/bs';

const LeadSection = () => {
    return (

        <div className="container">
            <div className="flex-col flex lg:flex-row items-center pb-20">
                <div className="flex flex-col items-center justify-center gap-4 pt-5 lg:w-2/5 lg:items-start lg:justify-center text-center lg:text-left lg:pb-8">
                    <div className="flex items-center justify-center gap-2"><BsFillPatchCheckFill className=" text-secondColor" /><span className="font-bold text-xl">Best Digital agency in Bangladesh</span></div>
                    <div className="font-bold text-2xl text-myColor xl:text-4xl">We are exceptional for ...</div>
                    <div className="font-bold text-2xl text-secondColor text-center lg:text-left xl:text-4xl">Competitive Pricing & Amazing Customer Service</div>
                    <div className="my-3 text-sm lg:text-base">art  N theme is a brand name for Digital agency in Bangladesh. We provide a wide comprehensive range of Graphic Design, Motion Graphics, 2D/3D animation, Multimedia, SEO, Social Media Marketing and Printing Services. We have been in this field since 2019, Client satisfaction is our objective and quality service is our commitment. We are a Creative Team to Provide you with Quality service.</div>
                    <div className='flex justify-center gap-4'>
                        <button className="w-40 py-2 px-4 bg-myColor rounded-lg text-white font-bold">Contact Us</button>
                        <Link target="_blank" href="https://wa.me/message/DVRG6MSZCLENM1?sro
qr"><button className="flex items-center justify-center w-40 py-2 px-2 bg-[#4CC75A] rounded-lg text-white font-bold gap-3"><BsWhatsapp className='text-xl'/> WhatsApp</button></Link>
                    </div>
                </div>
                <div className='w-full my-6 lg:mt-0 lg:w-3/5 lg:p-20'>
                    <iframe className='w-full aspect-video rounded' src="https://www.youtube.com/embed/1nAHkVMZu6E" title="YouTube video player" frameBorder="1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>
            </div>
        </div>

    );
}

export default LeadSection;