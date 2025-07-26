import React, { useRef } from 'react'
import Footer from '../../components/student/Footer'
import Swal from 'sweetalert2'

const ContactUs = () => {

    const formRef = useRef();

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(formRef.current);
    
        formData.append("access_key", "0ad423f3-654e-47e5-a4e9-5cd529e6a405");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
        //   console.log("Success", res);
          Swal.fire({
            title: "Success!",
            text: "Message sent successfully!",
            icon: "success",
            iconColor: "green",
            confirmButtonColor: "#3085d6",
          });

        //   reset the form
          formRef.current.reset();
        }
      };

      
  return (
    <>
    <div className='w-full min-h-screen flex items-center justify-center bg-gradient-to-b from-indigo-300/70 '>
        <form ref={formRef} onSubmit={onSubmit} className='md:w-6xl max-w-xl mb-2 mt-10 flex flex-col gap-5 bg-white p-10 shadow-blue-500 rounded'>
            <input type="hidden" name="access_key" value="0ad423f3-654e-47e5-a4e9-5cd529e6a405" /> 
            <input type="hidden" name="from_name" value="Learnify.app"></input>
            <h2 className='text-2xl font-semibold text-center'>Contact Us</h2>
            <div className='flex flex-col mt-2'>
                <label className='text-gray-800 text-lg font-semibold'>Name</label>
                <input className='w-full p-2 mt-2  text-gray-700  outline-none border border-gray-300  rounded' type="text" name="name" placeholder='Enter your name' required  />
            </div>
            <div className='flex flex-col mt-2'>
                <label className='text-gray-800 text-lg  font-semibold'>Email</label>
                <input className='w-full p-2 mt-2 text-gray-700 outline-none border border-gray-300  rounded' type="email" name="email" placeholder='Enter your email' required  />
            </div>
            <div className='flex flex-col mt-2'>
                <label className='text-gray-800 text-lg  font-semibold'>Your Message</label>
                <textarea className='w-full p-2 mt-2 resize-none text-gray-700  outline-none border border-gray-300 rounded' name="message"  cols="30" rows="7" placeholder='Enter your message' required></textarea>
            </div>
            <button className='w-full p-2 bg-blue-600 hover:bg-blue-700 text-white cursor-pointer rounded ' type='submit'>Submit</button>
        </form>
    </div>
    <Footer/>
    </>
  )
}

export default ContactUs