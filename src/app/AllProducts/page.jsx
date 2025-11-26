
'use client'
import Banner from "@/Compoents/Banner";
import Footer from "@/Compoents/Footer";
import Navbar from "@/Compoents/Navbar";
import PrivateRoute from "@/Compoents/PrivateRoute";
import ProductCard from "@/Compoents/ProductCard";
import { useEffect, useState } from "react";





export default function Home() {


  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:5000/products')
      .then(res => res.json())
      .then(data => {
        setProducts(data)
        setLoading(false)
      })
  }, [])
  console.log(products);

  if (loading) {
    <div>Loading...</div>
  }

  return (
    <PrivateRoute>
      <div>
        <Navbar />
        <h1 className="text-center text-3xl font-bold my-5">All Products</h1>
        <div className="grid max-w-5xl  gap-5 mx-auto grid-cols-1 md:grid-cols-3">
          {
            products.map(product => <ProductCard product={product} />)
          }
        </div>
        <Footer />
      </div>
    </PrivateRoute>
  );
}
