import { NextRequest, NextResponse } from "next/server";

 

 export async function POST (request: NextRequest){
    const body = await request.json()
    if (body.email == "afia@gmail.com"){
        console.log('you are logged in')}
        else {
            console.log('Invalid Creds')
        }
    
    return NextResponse .json({})
 }