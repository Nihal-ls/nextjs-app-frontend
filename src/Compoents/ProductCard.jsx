import Link from 'next/link';
import React from 'react';

const ProductCard = ({ product }) => {

    console.log(product);
    const { image, name, price, shortDescription,id } = product
    return (
        <div className=" mx-auto bg-base-100 rounded-tr-3xl rounded-bl-3xl  shadow-sm hover:scale-105 transition ease-in-out hover:shadow-2xl shadow-gray-600">
            <figure>
                <img
                    src={image}
                    alt="Shoes" 
                    className='sm:h-100 md:h-50 sm:w-100 mx-auto md:w-full rounded-tr-3xl'
                    />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{shortDescription}</p>
                <p className='font-bold'>${price}</p>
                <div className="card-actions justify-end">
                    <Link href='/details' className="btn bg-gray-700 rounded-lg text-white">View Details</Link>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;