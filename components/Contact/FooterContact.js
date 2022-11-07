import Link from "next/link";

const FooterContact = () => {
    return (
        <div className="bg-blue-500">
            <div className="container py-10">
                <div className="gap-5 flex flex-col items-center justify-center text-center">
                    <span className="text-lg text-white py-2">Hire us and achieve your business goal</span>
                    <Link href="/contact">
                        <span className="py-4 px-16 bg-white rounded-lg text-myColor font-bold">Contact Now</span>
                    </Link>
                </div>
            </div>
            
        </div>
    );
}

export default FooterContact;