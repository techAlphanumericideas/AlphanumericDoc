import { NextResponse } from "next/server";
import { ConectDb } from "@/app/lib/mongoDb";
import Assignment from "@/app/model/AssignmentModel";

export async function POST(req:Request) {

    const body = await req.json();

    const {id,title, discripstion,dueDate} = body;

    await ConectDb();

    await Assignment.findByIdAndUpdate(id,
        {title,
     discripstion,
        dueDate});

        return NextResponse.json({message:"Updated"});

}