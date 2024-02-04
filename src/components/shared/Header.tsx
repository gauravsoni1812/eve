"use client"
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import  { useRouter } from "next/navigation";
import axios from "axios";
const Header = () => {  
  const router = useRouter()

  const logoutfunction = async() => {
    console.log("hello world")
    try {
      const response = await axios.get("/api/users/logout");
      console.log(response.data);
 
      router.push("/login");
    } catch (error: any) {
      console.log("error message", error.message);
 
    }
  };



  return (
    <header className="w-full bg-[#171717]">
      <div className="wrapper flex items-center justify-between">
        <Link href="/" className="w-36">
          <div className="text-[20px] font-[600]"> CLOUDREDUX EVENT</div>
        </Link>
         <div className="flex gap-[100px] text-xl font-semibold">
              <div>
              <Link href={"/"}>Home</Link>
              </div>
              <div>
              <Link href={"/create-event"}>Create Event</Link>
              </div>
              <div>
              <Link href={"/profile"}>My Profile</Link>
              </div>
         </div>
        <div>
           <Button onClick={logoutfunction} className="bg-green-500">
             logout
           </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
 