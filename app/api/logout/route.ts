import { NextResponse } from "next/server";

export async function POST() {
    const res = NextResponse.json({message:"Logout"});

    // res.cookies.set('role','',{
    //     path:"/",expires:new Date(0)
    // })
    // console.log(res);

    res.cookies.set('role','')

   return res;
}