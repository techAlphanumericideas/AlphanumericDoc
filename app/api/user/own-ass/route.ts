import Assignments from "@/app/model/AssignmentModel";
import { ConectDb } from "@/app/lib/mongoDb";
import { NextResponse } from "next/server";

export async function GET(req:Request){
    await ConectDb();
    
    const  {searchParams} = new URL(req.url);

    const email = searchParams.get('email');
    console.log("email",email)

    const assignments = await Assignments.find({
        userEmail:email
    });
    return NextResponse.json(assignments);


}