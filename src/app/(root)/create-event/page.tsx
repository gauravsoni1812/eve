import jwt from 'jsonwebtoken'
import EventFrom from '@/components/shared/EventFrom'
import axios from 'axios'
import React from 'react'
import {cookies} from "next/headers"
import { useEffect } from 'react'
const CreateEvent = () => {

 const userId = cookies();
 const obj =userId.get("token")

const user : any = obj ? jwt.decode(obj.value): null;
// console.log(user);
  return (
    <div className='bg-[#1F1F1F]'>
       <section className="bg-dotted-pattern bg-cover bg-center py-5 ">
        <h3 className="wrapper h3-bold text-center sm:text-left">Create Event</h3>
      </section>

      <div className="wrapper">
         <EventFrom userId={user?.id || ""} type={"Create"} />
      </div>

    </div>
  )
}

export default CreateEvent