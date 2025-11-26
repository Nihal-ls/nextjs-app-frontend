'use client'
import Footer from '@/Compoents/Footer';
import Navbar from '@/Compoents/Navbar';
import PrivateRoute from '@/Compoents/PrivateRoute';
import { useAuth } from '@/Context/AuthContext';
import { useRouter } from 'next/navigation';
import React from 'react';
import Swal from 'sweetalert2';

const page = () => {
      const router = useRouter()
    const { user } = useAuth()


    const handleAddProduct = async (e) => {
        e.preventDefault()
        const formData = {
            name: e.target.name.value,
            owner_email: e.target.email.value,
            image:e.target.image.value,
            shortDescription: e.target.shortDescription.value,
            longDescription: e.target.longDescription.value,
            price: e.target.price.value,
        }
        const data = JSON.stringify(formData)
        console.log(data);
        fetch("https://nextjs-server-neon.vercel.app/add-products", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData)
        }).then(res => res.json())
            .then(data => {
                console.log(data)
                Swal.fire({
                    title: "Added!",
                    text: "Product Added successfully",
                    icon: "success"
                });
                router.push('/')
            })

    }

    return (
        <PrivateRoute>
            <div>
                <Navbar />
                <div className="hero min-h-screen">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <div className="text-center lg:text-left">
                            <h1 className="text-5xl font-bold">Add Your Products now!</h1>
                        </div>
                        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                            <div className="card-body">
                                <form onSubmit={handleAddProduct} className="fieldset">
                                    {/* email */}
                                    <label className="label">Email</label>
                                    <input name='email' type="email"
                                        defaultValue={user?.email}
                                        className="input" placeholder="Email" />
                                    {/* product name */}
                                    <label className="label">Product Name</label>
                                    <input name='name' type="text"
                                        className="input" placeholder="Product Name" />
                                    {/* product image */}
                                    <label className="label">Product image</label>
                                    <input name='image' type="url"
                                        className="input" placeholder="Product image" />
                                    {/* product Short description */}
                                    <label className="label">Short Description</label>
                                    <input
                                        name='shortDescription'
                                        type="text"
                                        className="input" placeholder="Short Description" />
                                    {/* product Long description */}
                                    <label className="label">Long Description</label>
                                    <input
                                        name='longDescription'
                                        type="text"
                                        className="input" placeholder="Long Description" />
                                    {/* product price */}
                                    <label className="label">Price</label>
                                    <input type="text"
                                        name='price'
                                        className="input" placeholder="Price" />
                                    <button className="btn btn-neutral mt-4">Add Now</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>

        </PrivateRoute>
    );
};

export default page;