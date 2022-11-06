import { useState } from "react";
import { useForm } from "react-hook-form";
import { postData } from "../../GolobalFunction/Golobalfunction";



const Contact = () => {
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState();

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
setLoading(true)
        postData('/api/contact', data)
            .then((data) => {
                setLoading(false)
                setStatus(data)
            })
            .catch((err)=>{
                setLoading(false)
                setStatus(data)
            })


    }

    return (
        <div className="bg-[#FFFBEC]">
            <div className="container">
                {/* title and description */}
                <div className="text-center space-y-3 lg:text-left pt-10">
                    <h1 className="text-5xl font-bold text-secondColor">Contact</h1>
                    <p className="text-xl">You can directly visit our office to contact for any need. You can also knock on the mentioned mail, Facebook messenger or Whatsapp.</p>
                </div>
                {/* map and address */}

                <div className="flex flex-col gap-5 py-10 md:flex-row md:justify-evenly">
                    <div className="flex flex-col gap-4">
                        <div>
                            <p className="font-bold text-lg">Head Office</p>
                            <p>
                                2th Floor <br />
                                House#11/13, Road#9, Nikunja-2, <br />
                                Dhaka 1205, Bangladesh
                            </p>
                        </div>
                        <div>
                            <p className="font-bold text-lg">Office Visit Time</p>
                            <p>
                                Saturday - Thursday <br />
                                09:00 Am to 08:00 Pm

                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4">
                        <div>
                            <p className="font-bold text-lg">Phone Number</p>
                            <p>+8801612130606</p>
                            <p>+8801518329310</p>
                            <p>+8801811321181</p>
                        </div>

                        <div>
                            <p className="font-bold text-lg">Email</p>
                            <p>artntheme@gmail.com</p>
                            <p>‍support@artntheme.com</p>
                        </div>
                    </div>
                </div>

                {/* form submit */}

                <div className="lg:px-20">
                    <h1 className="text-3xl font-bold text-secondColor mb-5 text-center lg:text-left">Send us Message</h1>

               { !status?.status ?

               <>
                        <form onSubmit={handleSubmit(onSubmit)}>

                            <div>
                                {errors.name && <p className="text-red-700 w-full">{errors.name?.message}</p>}
                                <input placeholder="Name" className="inputDefault" type="text" {...register("name", {
                                    required: {
                                        value: true,
                                        message: "Name field Required"
                                    }, maxLength: 30
                                })} />
                            </div>


                            <div className="flex gap-3">
                                <div className="lg:w-1/2">
                                    <input placeholder="Email" className="inputDefault" type="text" {...register("email")} />
                                </div>
                                <div className="lg:w-1/2">
                                    <div>
                                        {errors.phone && <p className="text-red-700 w-full">{errors.phone?.message}</p>}
                                        <input placeholder="Phone Number" className="inputDefault" type="text" {...register("phone", {
                                            required: {
                                                value: true,
                                                message: "Phone field Required"
                                            }, maxLength: 15
                                        })} />
                                    </div>
                                </div>

                            </div>


                            <div>
                                {errors.cat && <p className="text-red-700 w-full">{errors.cat?.message}</p>}
                                <input className="inputDefault" type="text" {...register("cat", {
                                    required: {
                                        value: true,
                                        message: "Category field Required"
                                    }
                                })} />
                            </div>


                            <textarea placeholder="message" className="inputDefault" type="text" {...register("message", {
                                required: {
                                    value: true,
                                    message: "Message field Required"
                                }, maxLength: 1000
                            })} />

                               <div>
                                    {status?.message && <p className="text-red-700 font-bold py-10 text-center">{status.message}</p>}
                                    <button className="btn-send" type="submit">
                                        {loading ? <div className="flex justify-center items-center"><span className="animate-spin h-5 w-5 mr-3 border-4 rounded-full border-t-2 border-t-gray-500 block"></span><span>Processing...</span></div> : "Submit"}
                                    </button>
                               </div>
                        </form>
               </> : <p className="text-green-700 font-bold py-10 text-center">{status.message}</p>

               }



                </div>


            </div>
        </div>
    );
}

export default Contact;