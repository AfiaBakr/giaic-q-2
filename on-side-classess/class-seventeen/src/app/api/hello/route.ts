

import { NextResponse, NextRequest } from "next/server";

const shoppingList =[
    {name :'Shoes'}
]



export function GET () {
    return NextResponse.json(shoppingList)
}

export async function POST (request:NextRequest){
    const body = await request.json() //in
    shoppingList.push(body)
    //console.log(body)
    return NextResponse.json(body)  //out
}
