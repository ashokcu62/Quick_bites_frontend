
import axios from 'axios';
import React from 'react';
import { useLoaderData } from 'react-router-dom';

export async function loader({ params }) {
    const res = await axios.get('http://localhost:3000/menus/'+ params.menuId)
    const menu = res.data
    return { menu }
}
function cartPage(props) {
    const { menu } = useLoaderData()    
    
    console.log(menu)
    return (
        <div className='flex justify-center p-12 mr-24 mt-20'>
            <img className='w-96 h-96' src={menu.image} alt="" />
        </div>
    );
}

export default cartPage;

