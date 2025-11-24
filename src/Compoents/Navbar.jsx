import Link from 'next/link';
import React from 'react';

const Navbar = () => {

    const navlinks = <>
        <Link href='/'><li><a>Home</a></li></Link>
        <li><a> Add Products</a></li>
    </>

    return (
        <div className='sticky top-0'>
            <div className="navbar  bg-gray-800 text-gray-200 shadow-sm">
                <div className="navbar-start">
                    <div className="dropdown ">
                        <div tabIndex={0} role="button" className="btn btn-ghost bg-gray-800 lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm bg-gray-800 dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {navlinks}
                        </ul>
                    </div>
                    <a className="btn btn-ghost bg-gray-800 text-xl">daisyUI</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navlinks}
                    </ul>
                </div>
                <div className="navbar-end flex gap-5">
                    <a className="btn bg-gray-300 hover:bg-gray-800 hover:text-white rounded-lg px-5">Login</a>
                    <a className="btn bg-gray-300 hover:bg-gray-800 hover:text-white rounded-lg px-5 ">Register</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;