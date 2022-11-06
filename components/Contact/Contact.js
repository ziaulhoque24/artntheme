import { useState } from "react";
import { useForm } from "react-hook-form";



const Contact = () => {
    const [formData, setFormData] = useState();
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

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

                    <form onSubmit={handleSubmit(onSubmit)}>

                        <input placeholder="Name" className="inputDefault" type="text" {...register("name", { required: true, maxLength: 30 })} />


                        <div className="flex gap-3">
                            <div className="lg:w-1/2">
                                <input placeholder="Email" className="inputDefault" type="text" {...register("email", { required: true, maxLength: 30 })} />
                            </div>
                            <div className="lg:w-1/2">
                                <input placeholder="Phone Number" className="inputDefault" type="text" {...register("phone", { required: true, maxLength: 30 })} />
                            </div>

                        </div>


                        <input className="inputDefault" type="text" {...register("cat", { required: true, maxLength: 30 })} />


                        <textarea placeholder="message" className="inputDefault" type="text" {...register("message", { required: true, maxLength: 30 })} />


                        <button className="btn-send" type="submit">Send</button>
                    </form>



                </div>


            </div>
        </div>
    );
}

export default Contact;