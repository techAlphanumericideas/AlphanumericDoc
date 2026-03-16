import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function proxy(req:NextRequest){
    const role = req.cookies.get('role')?.value

    const {pathname} = req.nextUrl;
    if(pathname.startsWith('/admin')){
        if(role!=='admin'){
            console.log(role)
            return NextResponse.redirect(new URL('/login',req.url));
        }if(!role){
            return NextResponse.next();
        }
        
    }
    

}


 export const config ={
        matcher:['/admin/:path*']
    }