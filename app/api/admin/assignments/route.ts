import { NextResponse } from "next/server";
import { ConectDb } from "@/app/lib/mongoDb";
import Assignments from "@/app/model/AssignmentModel";

export  async function POST(req:Request){
    const body = await req.json();

    const {id,title,discriptions, userEmail,dueDate} = body;
    console.log(id)
    await ConectDb();

  await Assignments.findOneAndUpdate({_id:id},
    {title,discriptions,userEmail,dueDate},
    {new:true})

   
    return NextResponse.json({message:"Assignment Compeleted."})

}



export  async function DELETE(req:Request){
    const body = await req.json();

    const {id} = body;
    console.log(id)
    await ConectDb();

  // await Assignments.findOneAndUpdate({_id:id},
  //   {new:true})

  await Assignments.findByIdAndDelete({_id:id});

   
    return NextResponse.json({message:"Assignment Deleted."})

}