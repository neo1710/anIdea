"use client"
import EnhancedNavbar from "@/components/Navbar";
import { FilterDrawer } from "@/components/Products/FilterDrawer";
import { Button } from "flowbite-react";
import { FaHome,FaShoppingBag,FaInfoCircle } from "react-icons/fa";

export default function Home() {

  return (
    <div className="w-full mt-16 relative">
      <FilterDrawer />
    </div>
  );
}
