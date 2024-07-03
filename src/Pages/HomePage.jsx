import React from 'react';
import { Link } from 'react-router-dom';
import map from '../Assets/map.png'
import restaurant from '../Assets/restaurant.png'
import food from '../Assets/fastfood.png'
import man from '../Assets/man.png'

function HomePage(props) {
    return (
        <main className='h-full-screen  mt-20 bg-gray-100 '> 
            <div className='bg-cover  bg-center h-lvh  ' style={{ backgroundImage: "url('image/burger.jpg')" }}></div>
            <div className='flex justify-center flex-col items-center font-serif p-8 '>
                <h1 className='text-6xl p-4 text-green-400'>Get your food fast & easy</h1>
                <h5 className='text-3xl p-4 text-yellow-300' >Follow the Steps</h5>
                <Link to={'/login'}><button className='bg-orange-600 hover:bg-orange-400 text-3xl rounded-full p-4 text-white' type="submit">Our Menu</button></Link>
            </div>
            <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 p-20'>
                <div className='flex justify-center items-center flex-col flex '>
                    <img className='w-20  hover:bg-pink-300 rounded-2xl' src={map} alt="" />
                    <h2 className='font-bold '>1</h2>
                    <h3 className='text-2xl '>choose your Location</h3>
                </div>

                <div className='justify-center items-center flex-col flex'>
                    <img className='w-20  hover:bg-orange-300 rounded-2xl' src={restaurant} alt="" />
                    <h2 className='font-bold ' >2</h2>
                    <h3 className='text-2xl'>choose your restaurant</h3>
                </div>
                <div className='justify-center items-center flex-col flex  '>
                    <img className='w-20 hover:bg-pink-300 rounded-2xl' src={food} alt="" />
                    <h2 className='font-bold '>3</h2>
                    <h3 className='text-2xl'>Make your order</h3>
                </div>
                <div className='justify-center items-center flex-col flex '>
                    <img className='w-20  hover:bg-orange-300 rounded-2xl' src={man} alt="" />
                    <h2 className='font-bold '>4</h2>
                    <h3 className='text-2xl '>Food is on the way</h3>
                </div>
            </div>
            <div className='grid sm:grid-cols-2 p-8 gap-8 mt-8 '>
                <img className='rounded-md ' src="https://img.freepik.com/free-photo/woman-eating-french-fries-with-ketchup_23-2148718918.jpg?t=st=1713683668~exp=1713687268~hmac=a9c22f77d32609ce16bf4b12df5b2f865a28d8d9e04470d1d506553be2c7e951&w=740" alt="" />
                <img className='rounded-md' src="https://img.freepik.com/premium-photo/men-preparing-food-street-stall_1124848-7613.jpg?w=740" alt="" />
            </div>
           
            <div className='bg-yellow-300 p-4 mb-8'>
                <h2 className='flex flex-col justify-center items-center text-xl p-8 '>Get Rs.40 on Your First Order</h2>
            </div>

        </main>
    )
}

export default HomePage;