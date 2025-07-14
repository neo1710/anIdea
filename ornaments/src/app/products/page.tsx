"use client"
import EnhancedNavbar from "@/components/Navbar";
import FilterSidebar from "@/components/Products/FilterDrawer";
import { ProductCards } from "@/components/Products/ProductCards";
import { useSelector } from "react-redux";
import type { RootState } from "@/store/index";

export default function Home() {
  const products = useSelector((state: RootState) => state.products.products);

  return (
    <div className="w-full mt-16 relative flex">
      <FilterSidebar />
      <div className="sm:w-[60%] w-[100%] p-5 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-2">
        {
          products.map((ele, index) => (
            <ProductCards key={ele.id || index} data={ele} />
          ))
        }
      </div>
    </div>
  );
}
