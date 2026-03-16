import { NextResponse } from "next/server";
import {ConectDb} from "@/app/lib/mongoDb"
import Assignments from "@/app/model/AssignmentModel"

export async function POST(req:Request) {

    const body = await req.json();

    const {title, discripstion,userEmail,dueDate} = body;
    await ConectDb();

    const assignment = await Assignments.create({
        title,discripstion,userEmail,dueDate
    });
    
    return NextResponse.json(assignment);
}