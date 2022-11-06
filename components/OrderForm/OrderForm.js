import { useState } from "react";
import { useForm } from "react-hook-form";
import axios from 'axios';




const OrderForm = () => {
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState("first");

    const [file, setFile] = useState();

    function handleChange(event) {
        
        let tempFile = [];
        for (let i = 0; i < event.target.files.length; i++) {
            tempFile.push(event.target.files[i]);
        }
        setFile(tempFile)
        
    }
    
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        setLoading(true);
        const fd = new FormData();
        file.map((fileItem)=>{
            fd.append('file', fileItem);
        })
        fd.append('name', data.name);
        fd.append('email', data.email);
        fd.append('phone', data.phone);
        fd.append('company', data.company);
        fd.append('qyt', data.qyt);
        fd.append('message', data.message);
      
       

        axios({
            method: "post",
            url: "/api/order",
            data: fd,
            headers: { "Content-Type": "multipart/form-data" },
        })
            .then(function (response) {
                setLoading(false);
                console.log(response.data)
                setStatus(response.data)
               
            })
            .catch(function (response) {
                console.log()
                setLoading(false);
                setStatus(response.response.data)
               
            });
       

    
        
    }


    return (
        <div>
            {!status.status && <>
                <form onSubmit={handleSubmit(onSubmit)}>
                    {errors.name && <p className="text-red-700 p-2 w-full">{errors.name?.message}</p>}
                    <input placeholder="Name*" className="inputDefault" type="text" {...register("name", { required: {
                        value: true,
                        message: "Required felid"
                    }, maxLength: 30 })} />


                    <div className="flex gap-3">
                        <div className="lg:w-1/2">
                            {errors.email && <p className="text-red-700 p-2 w-full">{errors.email?.message}</p>}
                            <input placeholder="Email*" className="inputDefault" type="text" {...register("email", {
                                required: {
                                    value: true,
                                    message: "Required felid"
                                }, maxLength: 30 })} />
                        </div>
                        <div className="lg:w-1/2">
                            {errors.phone && <p className="text-red-700 p-2 w-full">{errors.phone?.message}</p>}
                            <input placeholder="Phone Number*" className="inputDefault" type="text" {...register("phone", {
                                required: {
                                    value: true,
                                    message: "Required felid"
                                }, pattern: {
                                    value: /^(?:(?:\+|00)88|01)?(?:\d{11}|\d{13})$/,
                                message: "Only phone number allowed and Max length 15"
                            } , maxLength: 15 })} />
                        </div>

                    </div>


                    <input placeholder="Company Name" className="inputDefault" type="text" {...register("company", { required: false, maxLength: 30 })} />

                    {errors.qyt && <p className="text-red-700 p-2 w-full">{errors.qyt?.message}</p>}
                    <input placeholder="Order Quantity*" className="inputDefault" type="text" {...register("qyt", {
                        required: {
                            value: true,
                            message: "Required felid"
                        }, pattern: {
                        value: /^[0-9]*$/,
                        message: "Only number allowed"
                    } })} />

                    {status.message && <p className="text-red-700 font-bold text-center p-2 w-full">{status.message}</p>}
                    <input className="inputDefault" onChange={handleChange} type="file"  multiple name="file" required/>

                    {errors.message && <p className="text-red-700 p-2 w-full">{errors.message?.message}</p>}
                    <textarea placeholder="message*" className="inputDefault" type="text" {...register("message", {
                        required: {
                            value: true,
                            message: "Required felid"
                        }, maxLength: 500 })} />

                   
                   
                    <button className="btn-send w-full" type="submit">{loading ? <div className="flex justify-center items-center"><span className="animate-spin h-5 w-5 mr-3 border-4 rounded-full border-t-2 border-t-gray-500 block"></span><span>Processing...</span></div> : "Submit"}</button>
                </form>
            </>}
            {status.status && <p className="text-green-700 font-bold py-40">Your order successfully sent. We will contact you very soon</p>}
        </div>
    );
}

export default OrderForm;