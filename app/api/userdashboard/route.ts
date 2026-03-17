import { NextResponse } from "next/server";
import { ConectDb } from "@/app/lib/mongoDb";
import Assignments from '@/app/model/AssignmentModel'


export async function GET(req:Request) {

     

    await ConectDb()

        
    const  {searchParams} = new URL(req.url);

    const email = searchParams.get('email');

    
    const assignments  = await Assignments.countDocuments({userEmail:email});

    const compeleted = await Assignments.countDocuments({userEmail:email,status:'done'});

    const pending = await Assignments.countDocuments({userEmail:email,status:"pending"});

    return NextResponse.json({
        assignments,
        compeleted,
        pending
    });
}