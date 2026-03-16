
import { NextResponse } from "next/server";
import { ConectDb } from "@/app/lib/mongoDb";
import User from "@/app/model/UserModel";

export async function GET(){

  await ConectDb();

  const users = await User.find();

  return NextResponse.json(users);

}