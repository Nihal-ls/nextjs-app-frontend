
'use client'
import Banner from "@/Compoents/Banner";
import Navbar from "@/Compoents/Navbar";
import ProductCard from "@/Compoents/ProductCard";
import { useEffect, useState } from "react";





export default function Home() {


  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:5000/latest-products')
      .then(res => res.json())
      .then(data => {
        setProducts(data)
        setLoading(false)
      })
  }, [])

  if (loading) {
    <div>Loading...</div>
  }

  return (
    <div>
      <Navbar />
      <Banner />
      <h1 className="text-center text-3xl font-bold my-5">Latest Products</h1>
      <div className="grid max-w-5xl  gap-5 mx-auto grid-cols-1 md:grid-cols-3">
        {
          products.map(product => <ProductCard product={product}/>)
        }
      </div>
    </div>
  );
}
