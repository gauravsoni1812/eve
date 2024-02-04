import { NextRequest, NextResponse } from "next/server";

export async function GET(request:NextRequest) {
  try {
    const response = NextResponse.json({
      header:request.headers,
    //   message: "logout successfull",
    //   success: true,
    });
    // const a = await request.json();
    // console.log(a);
    
    // console.log(userId);
    return response;
  } catch (error: any) {
    
  }
}
