import { BsFacebook, BsYoutube, BsLinkedin, BsTwitter, BsInstagram } from 'react-icons/bs';
import { FaBlogger } from 'react-icons/fa';


const SocialMediaSection = () => {
    return (

        <div className="bg-blue-500 text-white mt-8">
            <div className="container p-5">
                <div className="text-center font-bold text-2xl">CAN WE STAY CONNECTED?</div>
                <div className="text-center columns-2 md:columns-3 my-4">
                    <div className='flex justify-center items-center flex-col gap-2 p-5 font-bold text-2xl text-center hover:text-secondColor'>
                        <BsFacebook className='text-5xl'/>
                        <span>facebook</span>
                    </div>
                    <div className='flex justify-center items-center flex-col gap-2 p-5 font-bold text-2xl text-center hover:text-secondColor'>
                        <BsLinkedin className='text-5xl'/>
                        <span>Linkedin</span>
                    </div>
                    <div className='flex justify-center items-center flex-col gap-2 p-5 font-bold text-2xl text-center hover:text-secondColor'>
                        <BsTwitter className='text-5xl'/>
                        <span>Twitter</span>
                    </div>
                    <div className='flex justify-center items-center flex-col gap-2 p-5 font-bold text-2xl text-center hover:text-secondColor'>
                        <BsInstagram className='text-5xl'/>
                        <span>Instagram</span>
                    </div>
                    <div className='flex justify-center items-center flex-col gap-2 p-5 font-bold text-2xl text-center hover:text-secondColor'>
                        <BsYoutube className='text-5xl'/>
                        <span>Youtube</span>
                    </div>
                    <div className='flex justify-center items-center flex-col gap-2 p-5 font-bold text-2xl text-center hover:text-secondColor'>
                        <FaBlogger className='text-5xl'/>
                        <span>Blog</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SocialMediaSection;