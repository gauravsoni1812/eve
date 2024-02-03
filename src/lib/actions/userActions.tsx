"use server"

import { connect } from "@/dbConfig/dbConfig"
import EventUser from "@/models/eventUserModel"

type CreateEventUser = {
    firstName: string
    lastName: string
    username: string
    email: string
    photo: string
  }

  connect()

export const createEventUser =  async(user:CreateEventUser)=>{
   try {
    const newEventUser = await EventUser.create(user);

   } catch (error) {
    
   }
}

export const getEventUserbyId =  async(userId:string)=>{
  try {
  //  const newEventUser = await EventUser.create(user);

  } catch (error) {
   
  }
}

export const updateEventUser =  async(user:CreateEventUser)=>{
  try {
  //  const newEventUser = await EventUser.create(user);

  } catch (error) {
   
  }
}

export const deleteEventUser =  async(userId:string)=>{
  try {
  //  const newEventUser = await EventUser.create(user);

  } catch (error) {
   
  }
}