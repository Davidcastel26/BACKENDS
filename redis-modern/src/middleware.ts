import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import { nanoid } from 'nanoid';

export function middleware( req: NextRequest ){
    const userIdRedis = req.cookies.get('userId')
    const res = NextResponse.next()

    if( !userIdRedis ){
        res.cookies.set('userIdRedis', nanoid());
    }

    return res;
}

export const config = {
    matcher: [
        '/((?!api|_next/static|_next/image|favicon.ico).*)'
    ]
}