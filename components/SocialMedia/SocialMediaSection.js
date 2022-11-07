import Link from 'next/link';
import { BsFacebook, BsYoutube, BsLinkedin, BsTwitter, BsInstagram } from 'react-icons/bs';
import { FaBlogger } from 'react-icons/fa';


const SocialMediaSection = () => {
    return (

        <div className="bg-blue-500 text-white mt-8">
            <div className="container p-5">
                <div className="text-center font-bold text-2xl">CAN WE STAY CONNECTED?</div>
                <div className="text-center columns-2 md:columns-3 my-4">

                    <Link target="_blank" href="https://www.facebook.com/artNtheme" className='block'>
                        <div className='flex justify-center items-center flex-col gap-2 p-5 font-bold text-2xl text-center hover:text-secondColor'>
                            <BsFacebook className='md:text-5xl text-4xl' />
                            <span>facebook</span>
                        </div>
                    </Link>

                    <Link target="_blank" href="https://www.linkedin.com/company/artntheme/" className='block'>
                        <div className='flex justify-center items-center flex-col gap-2 p-5 font-bold text-2xl text-center hover:text-secondColor'>
                            <BsLinkedin className='md:text-5xl text-4xl' />
                            <span>Linkedin</span>
                        </div>
                    </Link>


                    <Link target="_blank" href="" className='block'>
                        <div className='flex justify-center items-center flex-col gap-2 p-5 font-bold text-2xl text-center hover:text-secondColor'>
                            <BsTwitter className='md:text-5xl text-4xl' />
                            <span>Twitter</span>
                        </div>
                    </Link>


                    <Link target="_blank" href="" className='block'>
                        <div className='flex justify-center items-center flex-col gap-2 p-5 font-bold text-2xl text-center hover:text-secondColor'>
                            <BsInstagram className='md:text-5xl text-4xl' />
                            <span>Instagram</span>
                        </div>
                    </Link>


                    <Link target="_blank" href="" className='block'>
                        <div className='flex justify-center items-center flex-col gap-2 p-5 font-bold text-2xl text-center hover:text-secondColor'>
                            <BsYoutube className='md:text-5xl text-4xl' />
                            <span>Youtube</span>
                        </div>
                    </Link>


                    <Link target="_blank" href="" className='block'>
                        <div className='flex justify-center items-center flex-col gap-2 p-5 font-bold text-2xl text-center hover:text-secondColor'>
                            <FaBlogger className='md:text-5xl text-4xl' />
                            <span>Blog</span>
                        </div>
                    </Link>

                </div>
            </div>
        </div>
    );
}

export default SocialMediaSection;