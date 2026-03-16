"use server"
import { NextResponse } from "next/server";
import {ConectDb} from '@/app/lib/mongoDb'
import  User  from "@/app/model/UserModel";


export async function POST(req:Request) {
    const {name,email}= await req.json();
    try {
    await ConectDb();
    const user = await User.findOne({email})
    if(!user){
        await User.create({
            name:name,
            email:email,
            role:"user"
        });
         return NextResponse.json({ data: user }, { status: 201 });
    }
     return NextResponse.json({ data: user }, { status: 201 });
    } catch (error) {
        console.log(error)

    }
}