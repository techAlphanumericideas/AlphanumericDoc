import {NextResponse} from "next/server"
import { ConectDb } from "@/app/lib/mongoDb"
import User from "@/app/model/UserModel"

export async function POST(req:Request) {
    const body = await req.json();

    const {email} =body;
    await ConectDb();

    const user = await User.findOne({email});
    const role = user?.role||"user"

    const response = NextResponse.json({role:role});
    response.cookies.set("role",role,{path:"/"})

    return response;
}