'use client'
import Footer from '@/Compoents/Footer';
import Navbar from '@/Compoents/Navbar';
import { useAuth } from '@/Context/AuthContext';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';

const page = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    const { user } = useAuth()


    useEffect(() => {
        fetch(`https://nextjs-server-neon.vercel.app/users-products?email=${user.email}`)
            .then(res => res.json())
            .then(data => {
                setProducts(data)
                setLoading(false)
            })
    }, [])
    console.log(products);

   const handleDelete = async (id) => {
    const response = await fetch(`https://nextjs-server-neon.vercel.app/user-products/${id}`, {
        method: "DELETE"
    });

    const data = await response.json();
    setLoading(true)
    if (data.success) {
        const remaining = products.filter(product => product._id !== id);
        setProducts(remaining);
        setLoading(false)
    }
};



    if (loading) {
 if (loading) {
        return <div className="flex justify-center"><span className="loading loading-spinner loading-xl  min-h-screen items-center"></span></div>

    }    }
    if (products == 0) {
        return <div className='text-center min-h-screen '>
            <Navbar/>
            <span className='text-3xl font-bold'>You Have no Products</span></div>
    }
    return (
        <div>
            <Navbar></Navbar>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 my-10">
                {products.map(
                    product => <div key={product._id}>
                        <div className=" mx-auto bg-base-100 rounded-tr-3xl rounded-bl-3xl  shadow-sm hover:scale-105 transition ease-in-out hover:shadow-2xl shadow-gray-600">
                            <figure>
                                <img
                                    src={product.image}
                                    alt="Shoes"
                                    className='sm:h-100 md:h-50 sm:w-100 mx-auto md:w-full rounded-tr-3xl'
                                />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">{product.name}</h2>
                                <p>{product.shortDescription}</p>
                                <p className='font-bold'>${product.price}</p>
                                <div className="card-actions justify-end">
                                    <Link href={`/products/Details/${product._id}`} className="btn bg-gray-700 rounded-lg text-white">View Details</Link>
                                    <button onClick={() => handleDelete(product._id)} className="btn outline outline-red-500 px-5  text-red-500 rounded-lg ">Delete</button>

                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
            <Footer></Footer>
        </div>
    );
};

export default page;