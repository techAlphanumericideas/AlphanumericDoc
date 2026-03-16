import { NextResponse } from "next/server";
import { ConectDb } from "@/app/lib/mongoDb";
import Assignments from '@/app/model/AssignmentModel'
import User from '@/app/model/UserModel'

export async function GET(req:Request) {
    await ConectDb()
    
    const totalUser = await User.countDocuments({role:'user'});

    const totalAssignments = await Assignments.countDocuments();

    const compeleted = await Assignments.countDocuments({status:'done'});

    const pending = await Assignments.countDocuments({status:"pending"});

    return NextResponse.json({
        totalUser,
        totalAssignments,
        compeleted,
        pending
    });
}