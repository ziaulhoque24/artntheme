import { TbVirusSearch } from 'react-icons/tb';
import { AiOutlineAntDesign } from 'react-icons/ai';
import { TfiAnnouncement } from 'react-icons/tfi';
import { MdOutlineSlowMotionVideo, Md3DRotation } from 'react-icons/md';
import { HiPhotograph } from 'react-icons/hi';
import Link from 'next/link';

const ServiceSliderItem = ({ name}) => {
    return (
        <Link href="/seo">
            <div className="h-40 ml-3 rounded flex flex-col gap-2 justify-center items-center text-xl font-bold shadow bg-white hover:bg-gray-300 text-center">
                {name == "SEO" && <TbVirusSearch className='text-4xl text-secondColor' />}
                {name == "Graphics Design" && <AiOutlineAntDesign className='text-4xl text-secondColor' />}
                {name == "Digital Marketing" && <TfiAnnouncement className='text-4xl text-secondColor fill-secondColor stroke-secondColor' />}
                {name == "Motion Graphics" && <MdOutlineSlowMotionVideo className='text-4xl text-secondColor' />}
                {name == "2D/3D Animation" && <Md3DRotation className='text-4xl text-secondColor' />}
                {name == "Photography" && <HiPhotograph className='text-4xl text-secondColor' />}

                <span>{name}</span>
            </div>
        </Link>
    );
}

export default ServiceSliderItem;