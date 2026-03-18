import { NextResponse } from "next/server";
import { ConectDb } from "@/app/lib/mongoDb";
import Assignment from "@/app/model/AssignmentModel";


export async function POST(req:Request) {

    const {id} = await req.json()

    await ConectDb()
    
    await Assignment.findOneAndDelete(id)

    return NextResponse.json({message:"Deleted"});

}