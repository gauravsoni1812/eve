import { connect } from "@/dbConfig/dbConfig";
import { handleError } from "@/lib/utils";
import Cart from "@/models/CartModel";
import User from "@/models/userModel";
import { revalidatePath } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

connect();

export async function POST(request: NextRequest) {
    try {
        const reqbody = await request.json();
        const {userId , eventId} = reqbody;
        console.log(userId , eventId);
        const organizer = await User.findById(userId)
        console.log(organizer)
        if (!organizer) throw new Error('Organizer not found')
    
    
       const a = await Cart.findOne({eventId , userId})
       if(a){
        return NextResponse.json(
            { 
              message: "user already exists",
            },
            { status:  400}
          );
       }

        const newEvent = await Cart.create({eventId  , userId})
        revalidatePath("/profile")
        return NextResponse.json(
            { 
              message: "added to cart",
              newEvent
            },
            { status: 200 }
          );
      } catch (error) {
        handleError(error)
      }
}
