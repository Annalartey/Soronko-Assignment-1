import React from 'react';




function Contact() {
    return (
        <div className="mt-24 text-left">
           <h3 className="font-bold px-2 ">Get In Touch</h3>
            <p className="px-2">We would love to hear from you.</p>
            <form className=" bg-white shadow-md rounded py-4 w-48 px-2 mt-2">
                <label className="text-sm block font-bold  pb-2">Name:</label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-blue-300" type="text" name='fullname' />
                <br></br>
                <label className="text-sm block font-bold  pb-2">Email Adress:</label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-blue-300" type="email" name='email' />
                <br></br>
                <label className="text-sm block font-bold  pb-2">Message:</label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-blue-300" type="text" name='msg' />
                <br></br>
                <button className="bg-gray-300 hover:bg-gray-400 text-black font-bold px-4 mt-4 rounded focus:outline-none focus:shadow-outline">Submit</button>
            </form>
        </div>
    )
}

export default Contact;