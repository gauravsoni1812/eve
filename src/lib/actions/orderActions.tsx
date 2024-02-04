import { connect } from "@/dbConfig/dbConfig"
import { handleError } from "../utils"
import User from "@/models/userModel"
import Cart from "@/models/CartModel"
import { CreateCartProps } from "@/types"
import { revalidatePath } from "next/cache"
import Event from "@/models/eventModel"

 
export async function addtoCart({eventId, userId, path}:CreateCartProps) {
connect()
  try {
    console.log(userId);
    const organizer = await User.findById(userId)
    console.log(organizer)
    if (!organizer) throw new Error('Organizer not found')

    const newEvent = await Cart.create({eventId , userId})
    revalidatePath(path)

    return JSON.parse(JSON.stringify(newEvent))
  } catch (error) {
    handleError(error)
  }
}

export async function getjoinedEvents(userId: string) {
  try {
    connect(); 

    const events = await Cart.find({ userId: userId });

    // Use Promise.all to await all promises in the map
    const orders = await Promise.all(events.map(async (event) => {
      const newEvent = await Event.findById(event.eventId);
      return newEvent;
    }));
    // console.log(orders)
    // Return the array of events
    return orders;
  } catch (error) {
    handleError(error);
    throw error; // Re-throw the error to signal that something went wrong
  }
}
