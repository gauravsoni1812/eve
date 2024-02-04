"use client"
import React from 'react'
import { Button } from '../ui/button'
import Cart from '@/models/CartModel'
import { addtoCart } from '@/lib/actions/orderActions'
import axios from 'axios'
import toast, { Toaster } from 'react-hot-toast'
type props ={
  eventId:string
  userId:string
}

const handleJoin = async(eventId:string, userId:string)=>{

  try {
    const cart = await axios.post("/api/users/cart",{eventId , userId})
    console.log(cart);
    toast.success("event successfully added")
  } catch (error:any) {
    if (error.response && error.response.status === 400) {
      // Assuming 409 status code means "user already exists"
      toast.error("event already added");
    } else {
      toast.error("An error occurred");
    }
  }

}

const JoinNow = ({eventId , userId}:props) => {
  return (
    <div>
      <Toaster />
        <Button onClick={()=>{
          handleJoin(eventId, userId);
        }}>Join Event</Button>
    </div>
  )
}

export default JoinNow