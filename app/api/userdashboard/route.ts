import { NextResponse } from "next/server";
import { ConectDb } from "@/app/lib/mongoDb";
import Assignments from '@/app/model/AssignmentModel'


export async function GET(req:Request) {
    await ConectDb()
    
    const assignments  = await Assignments.countDocuments({userEmail:'sghosh@alphanumericideas.com'});

    const compeleted = await Assignments.countDocuments({userEmail:'sghosh@alphanumericideas.com',status:'done'});

    const pending = await Assignments.countDocuments({userEmail:'sghosh@alphanumericideas.com',status:"pending"});

    return NextResponse.json({
        assignments,
        compeleted,
        pending
    });
}