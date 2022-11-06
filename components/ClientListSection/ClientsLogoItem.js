import Image from "next/image";

const ClientsLogoItem = ({logo}) => {
    return (
 
            <div className='item text-center p-1'>
                <div className='p-10 bg-white drop-shadow'><Image src={logo} alt="" /></div>
            </div>
        
    );
}

export default ClientsLogoItem;