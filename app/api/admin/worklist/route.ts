import Assignments from "@/app/model/AssignmentModel";
import { ConectDb } from "@/app/lib/mongoDb";
import { NextResponse } from "next/server";

export async function GET(req:Request){
    await ConectDb();
    
    const assignments = await Assignments.find({});

    return NextResponse.json(assignments);


}