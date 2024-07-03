import React from 'react';
import send from '../Assets/send.png'
import axios from 'axios';


function ContactPage(props) {
    

    const handlesend = (e) => {
        e.preventDefault()
        const form = e.target
        const name = form['name'].value
        const email = form['email'].value
        const message = form['message'].value

        axios.post(`${import.meta.env.VITE_API_URL}/contact`, { name, email, message })
            .then(data => {
                const datas = (data)
                console.log(datas)
            })
            .catch(error => {
                console.log(error)
            })
    }

    return (

        <main className='h-screen-full mt-20 '>
            <div className='grid sm:grid-cols-2 lg:grid-cols-3 p-20 gap-8 '>
                <div className='border bg-green-300 p-16 rounded-xl  ' >
                    <h1 className=' text-3xl text-center'>Address</h1>
                    < p className='text-gray-400  text-center '>mangaluru street 103 Layout</p>
                </div>
                <div className='border bg-pink-300 p-20 rounded-xl'>
                    <h1 className='text-3xl text-center'>Phone</h1>
                    <p className='text-yellow-500 text-center'>123-456-7890</p>
                </div>
                <div className='border bg-yellow-300 p-20 rounded-xl'>
                    <h1 className='text-3xl text-center'>Email</h1>
                    <p className='text-gray-400 text-center' >info@yoursite.com</p>
                </div>
            </div>
            <div className='grid justify-center'>
                <h1 className='text-4xl'>Contact us</h1>
                <p className='text-lg underline'>please fill the form below</p>
            </div>
            <form className='grid  justify-center gap-4' onSubmit={handlesend}>
                <input className='border border-green-300 mt-4 shadow-md rounded-md  py-2' type="text" id='name' name='name' placeholder='Your name*' />
                <input className='border  border-green-300 shadow-md rounded-md py-2' type="email" id='email' name='email' placeholder='enter your email*' />
                <textarea className='border border-green-300  px-28 py-12 shadow-md'  id="message" placeholder='Type your message*'></textarea>
                <button  className='bg-green-400 hover:bg-green-500 mb-4 p-2 rounded-2xl text-xl ' type="submit">send</button>
                <img className='w-5 relative ml-56 -mt-16' src={send} alt="" />





            </form>

        </main>
    );
}

export default ContactPage;