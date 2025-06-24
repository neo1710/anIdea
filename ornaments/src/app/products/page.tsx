"use client"
import EnhancedNavbar from "@/components/Navbar";
import FilterSidebar from "@/components/Products/FilterDrawer";
import { ProductCards } from "@/components/Products/ProductCards";
import { photos } from "@/data/db";
import { Button } from "flowbite-react";
import { FaHome, FaShoppingBag, FaInfoCircle } from "react-icons/fa";

export default function Home() {

  return (
    <div className="w-full mt-16 relative flex">
      <FilterSidebar />
      <div className="sm:w-[60%] w-[100%] p-5 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-4">
        {
          photos.map((ele, index) => (
            <ProductCards key={ele.id || index} data={ele} />
          ))
        }
      </div>
    </div>
  );
}
