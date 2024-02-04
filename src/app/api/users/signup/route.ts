import { connect } from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

connect();

export async function POST(request: NextRequest) {
  try {
    const reqbody = await request.json();
    const { email, password , firstname, lastname , username } = reqbody;
    console.log(reqbody);
    const user = await User.findOne({ email });    
    if (user) {
      return NextResponse.json(
        {
          error: "User already exists",
        },
        { status: 400 }
      );
    }
    //hash password
    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(password, salt);
    console.log("akhjdlkaklsdlkasdkljla")
    const newUser =  new User({
      lastname,
      username,
      email,
      password: hashedPassword,
      firstname,
    });
     
    console.log(newUser)
   
    const savedUser = await newUser.save();
    // console.log("alskdjlaksjdklsaldjklajasd")
    return NextResponse.json({
      message: "User created successfully",
      success: true,
      savedUser,
    });
  } catch (error: any) {
    console.log(error);
    return NextResponse.json(
      {
        error: error.message,
      },
      { status: 500 }
    );
  }
}
