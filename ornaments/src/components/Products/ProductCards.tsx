"use client"
import { Product } from "@/interfaces/Product"


export const ProductCards = ({ data }: {
    data: Product
}) => {


    return <div className="w-full flex flex-col gap-2 justify-center items-center p-4">

        {/* Example Product Card */}
        <div className="w-full sm:w-[80%] md:w-[70%] lg:w-[80%] bg-white shadow-lg rounded-lg p-4 hover:shadow-xl transition-shadow duration-300">
            <img
                src={data.src}
                alt="Product"
                className="w-full h-40 sm:h-48 md:h-56 lg:h-64 object-cover rounded-t-lg"
            />
            <h2 className="text-xl font-semibold mt-4">{data.title}</h2>
            <p className="text-gray-600 mt-2">$29.99</p>
            <button className="mt-4 bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600 transition-colors duration-300">
                Add to Cart
            </button>
            {/* Repeat for more products */}
        </div>
    </div>
}