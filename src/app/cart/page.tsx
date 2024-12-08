"use client";

import Image from "next/image";
import { useState } from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Input } from "@/components/ui/input"

export default function Home() {
  const [products, setProducts] = useState([
    { id: 1, name: "Laptop", price: 650, quantity: 1 },
    { id: 2, name: "Headphones", price: 550, quantity: 1 },
    { id: 3, name: "Desktop", price: 1000, quantity: 1 },
  ]);

  // Handle adding quantity
  const increaseQuantity = (id: number) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === id
          ? { ...product, quantity: product.quantity + 1 }
          : product
      )
    );
  };

  // Handle decreasing quantity
  const decreaseQuantity = (id: number) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === id && product.quantity > 1
          ? { ...product, quantity: product.quantity - 1 }
          : product
      )
    );
  };

  // Handle removing a product
  const removeProduct = (id: number) => {
    setProducts((prevProducts) =>
      prevProducts.filter((product) => product.id !== id)
    );
  };

  return (
    <main>
      {/* 1st Section */}
      <section>
        <div className="mx-5 md:mx-10 lg:mx-14 pt-10 pb-10">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink
                  href="/Contact"
                  className="text-black font-bold"
                >
                  Cart
                </BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </section>

      {/* 2nd Section */}
      <section className="mx-5 md:mx-10 lg:mx-14">
        {/* Header */}
        <div className="pt-5">
          <ul className="grid grid-cols-5 pt-2 pb-2 border-2 border-gray-100">
            <li className="md:px-10">Product</li>
            <li>Price</li>
            <li>Quantity</li>
            <li>Subtotal</li>
          </ul>
        </div>

        {/* Product List */}
        {products.map((product) => (
          <div key={product.id} className="pt-5">
            <ul className="grid grid-cols-5 pt-2 pb-2 border-2 border-gray-100 text-xs md:text-sm lg:text-base">
              <li className="flex gap-2 md:gap-5 px-2 md:px-10">
                <Image src="/img-3.jpg" alt="img" width={50} height={50} />
                {product.name}
              </li>
              <li className="pl-10">${product.price}</li>
              <li className="flex items-center gap-1 md:gap-2">
                <button
                  className="bg-black text-white p-1 md:p-2 rounded-lg"
                  onClick={() => increaseQuantity(product.id)}
                >
                  +
                </button>
                {product.quantity}
                <button
                  className="bg-black text-white p-1 md:p-2 rounded-lg"
                  onClick={() => decreaseQuantity(product.id)}
                >
                  -
                </button>
              </li>
              <li>${product.price * product.quantity}</li>
              <li>
                <button
                  className="text-red-600 font-bold"
                  onClick={() => removeProduct(product.id)}
                >
                  Remove
                </button>
              </li>
            </ul>
          </div>
        ))}

        


        <div className="flex justify-between pt-10 pb-10">
      <Button className="bg-transparent text-black hover:bg-red-500 hover:text-white">
        <Link href="/">Return TO Shop</Link></Button>
      <Button className="bg-transparent text-black hover:bg-red-500 hover:text-white">Update Cart</Button>
      </div>

        <div className="md:flex justify-between pb-10">
      <div className="flex gap-5 pb-5 md:pb-0">
      <Input type="coupon" placeholder="Coupon Code"  className="bg-gray-100"/>
      <Button className="bg-transparent text-black hover:bg-red-500 hover:text-white">Apply Coupon</Button>
      </div>
        
        <div className="border-2 border-gray-200 p-5">
            <h2 className="font-semibold">Cart Total</h2>
            
            {/* Total Price */}
        <div className="pt-5 pb-5">
        <p className="text-left font-bold">Shipping: <span className="pl-40">Free</span></p>
          <div className="text-left font-bold">
          <span className="pr-40">Subtotal: $</span>
            {products.reduce(
              (total, product) => total + product.price * product.quantity,
              0
            )}
            
      
          </div>
          <Button className="hover:bg-transparent hover:border-2 border-red-500 mt-5 mx-20 px-10 text-white bg-red-500  hover:text-black">
            <Link href="/checkout">CheckOut</Link></Button>
        </div>


        </div>
      </div>
      </section>
    </main>
  );
}
