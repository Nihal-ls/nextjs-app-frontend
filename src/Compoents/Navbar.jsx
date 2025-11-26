'use client'
import { useAuth } from '@/Context/AuthContext';
import Link from 'next/link';
import React from 'react';

const Navbar = () => {
    const { user, logout } = useAuth()


    const navlinks = <>
        <Link href='/'><li>Home</li></Link>
        <Link href='/AllProducts'><li>All Products</li></Link>
        {
            user ? <Link href='/AddProducts' className=''><li>Add products</li></Link>
                : <p></p>

        }
        {
            user ? <Link href='/ManageProducts' className=''><li>Manage Products</li></Link> : <p></p>
        }
    </>
    console.log();
    const handleSignOut = () => {
        logout()
            .then(res => console.log(res))

    }
    return (
        <div className='sticky top-0 bg-gray-800'>
            <div className="navbar max-w-7xl mx-auto   text-gray-200 shadow-sm">
                <div className="navbar-start">
                    <div className="dropdown ">
                        <div tabIndex={0} role="button" className="btn btn-ghost bg-gray-800 lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm space-y-3 py-5 bg-gray-800 dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {navlinks}
                        </ul>
                    </div>
                    <a className="btn btn-ghost bg-gray-800 text-xl">daisyUI</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 space-x-5">
                        {navlinks}
                    </ul>
                </div>
                <div className="navbar-end flex gap-5">
                    {
                        user ?
                            <div className="dropdown dropdown-end">
                                <div tabIndex={0} role="button" className=""><img className='w-10 h-10 rounded-full border-2' src={user?.photoURL} alt="" /></div>
                                <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-62 p-2 text-black shadow-sm">
                                    <li>Name: {user?.displayName}</li>
                                    <Link href='/AddProducts' className='btn bg-gray-300 text-black mt-4'><li>Add products</li></Link>
                                    <Link href='/ManageProducts' className='btn bg-gray-300 text-black my-2'><li>Manage products</li></Link>

                                    <li>
                                        <button
                                            onClick={handleSignOut}
                                            className='bg-gray-800 text-white rounded-md btn'>Sign Out</button></li>
                                </ul>
                            </div>
                            : <div className='flex gap-3'>
                                <Link href='/login' className="btn bg-gray-300 hover:bg-gray-800 hover:text-white rounded-lg px-5">Login</Link>
                                <Link href='/Register' className="btn bg-gray-300 hover:bg-gray-800 hover:text-white rounded-lg px-5">Register</Link>
                            </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;