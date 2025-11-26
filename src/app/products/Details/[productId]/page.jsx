// src/app/products/Details/[productid]/page.jsx (Using your lowercase folder name)

import Footer from "@/Compoents/Footer";
import Navbar from "@/Compoents/Navbar";
import Link from "next/link";

// 1. Declare the component as async
export default async function Page(props) {

  // 2. Access the params property of the resolved props object.
  //    In some environments, destructuring { params } in the signature can
  //    cause issues if the whole props object hasn't been awaited.
  //    Accessing it from the awaited props object is the safest way.
  const resolvedParams = await props.params;

  // 3. Now safely access the parameter using your folder name (productid)
  const productId = resolvedParams.productId;
  let productData = null;
  let allProducts = [];

  try {
    const res = await fetch('https://nextjs-server-neon.vercel.app/products', { cache: 'no-store' }); // Disable caching for development

    if (!res.ok) {
      throw new Error(`Failed to fetch data: ${res.status}`);
    }

    allProducts = await res.json();

    productData = allProducts.filter(product => product._id === productId);

    console.log('Product ID:', productId);
    console.log('Specific Product Data:', productData);

  } catch (error) {
    console.error("Error", error);
  }
  if (!productData) {
    return <h1>Product with ID {productId} not found.</h1>;
  }
  const CLickedProduct = productData[0]
  return (

    <div>
      <Navbar />
      {/* detail card */}
      <div className="hero  max-w-5xl mx-auto  min-h-screen">
        <div className="hover:scale-115 hover:shadow-5xl hover:shadow-gray-500 transition ease-in-out">

          <div className="hero-content flex-col lg:flex-row">
          <img
            src={CLickedProduct.image}
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold">{CLickedProduct.name}</h1>
            <p className="pt-6">
              {CLickedProduct.longDescription}
            </p>
            <p className="py-2 font-bold text-xl ">
              ${CLickedProduct.price}
            </p>
            <Link href='/' className="btn btn-primary">Back To Home</Link>
          </div>
        </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}