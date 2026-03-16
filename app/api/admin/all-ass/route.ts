import Assignments from "@/app/model/AssignmentModel";
import { NextResponse } from "next/server";
import { ConectDb } from "@/app/lib/mongoDb";


export async function GET(){

  await ConectDb();

  const assignments = await Assignments.find();

  return NextResponse.json(assignments);

}