import { NextResponse } from "next/server";
import { ConectDb } from "@/app/lib/mongoDb";
import Assignments from "@/app/model/AssignmentModel";

export  async function POST(req:Request){
    const body = await req.json();

    const {id} = body;
    console.log(id)
    await ConectDb();
//     await Assignment.findByIdAndUpdate(id,{
//         status:"done"
//     }
// new:true);
//  const res = await Assignments.findByIdAndUpdate(id,{status:"done"})
  await Assignments.findOneAndUpdate({_id:id},{status:"done"},{new:true})

   
    return NextResponse.json({message:"Assignment Compeleted."})

}