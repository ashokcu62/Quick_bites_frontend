import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import search from '../Assets/search.png'


export async function loader() {
    const res = await axios.get(`${import.meta.env.VITE_API_URL}/menus`)
    const data = res.data
    return { data }
}
function MenuPage(props) {
    const { data } = useLoaderData()
    console.log(data)
    const [searchQuery, setSearchQuery] = useState('');

    // Filtering data based on search query
    const filteredData = data.filter(menu =>
        menu.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    useEffect(() => {
        axios.post(`${import.meta.env.VITE_API_URL}/users/verify`, {}, { withCredentials: true })
            .then((data) => {
                console.log("logged in")
            })
            .catch(err => {
                console.log(err)
            })

    }, [])

    return (
        <main className='h-full-screen mt-20 '>
            <section className='ml-8'>
                <div className='flex  justify-center items-center p-8'>
                    <img className=' flex absolute ml-72 mr-8 rounded-md bg-green-300 w-8 ' src={search} alt="search" />
                    <input className=' border  border-green-200 shadow-md  text-sm px-32 py-2 pl-2 rounded-md' type="text" name='search' id='search' placeholder='Search' value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
                </div>

                <ul className='grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 container  mx-auto py-8 px-20  gap-12 items-center'>


                    {
                        filteredData.map((menus, index) => {
                            return <li className='shadow-lg  px-4 rounded-lg ' key={menus._id}>
                                <img className='w-52 h-52 rounded-lg  ease-in-all duration-300 hover:scale-110' src={menus.image} alt={menus.title + "thumbnail"} />
                                <h2 className='text-xl'>{menus.name}</h2>
                                <h3 className='text-sm '>{menus.description}</h3>
                                <h2 className='text-lg font-bold  text-green-500'>{menus.price}</h2>
                                <Link to={'/menu/' + menus._id}><button className='bg-green-600 text-white text-xl rounded-md flex mb-2 ml-20 p-2' type="submit">Add To Cart</button></Link>
                            </li>
                        })
                    }
                </ul>

            </section>


        </main>
    );
}

export default MenuPage;