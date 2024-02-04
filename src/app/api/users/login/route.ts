import { connect } from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

connect();

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const { email, password } = reqBody;
 
    //check if user exists
    const user = await User.findOne({ email: email });
    if (!user) {
      return NextResponse.json(
        {
          error: "User does not exists",
        },
        { status: 401 }
      );
    }

    //check if password is correct
    const validPassword = await bcryptjs.compare(password, user.password);

    if (!validPassword) {
      return NextResponse.json(
        {
          error: "Invalid password",
        },
        { status: 401 }
      );
    }
    // create token data

    user.isloggedIn= true;

    const tokenData = {
      id: user._id,
      email: user.email,
    };

    //create Token
    const token = await jwt.sign(tokenData, process.env.TOKEN_SECRET!, {
      expiresIn: "2d",
    });
    
    const response = NextResponse.json({
      message: "login successfull",
      success: true,
    });

    response.cookies.set("token", token, {
      httpOnly: true,
    }); 

    return response;
  } catch (error: any) {
    console.log(error)
    return NextResponse.json(
      {
        error: error.message,
      },
      { status: 500 }
    );
  }
}
