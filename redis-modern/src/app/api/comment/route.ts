import { NextRequest } from "next/server"
import { nanoid } from 'nanoid';
import { redis } from "@/lib/redis";

export const POST = async ( req: NextRequest ) => {
    try{

        const body = await req.json();
        const { text, tags } = body;

        const commentId = nanoid();

        const comment  = {
            text,
            tags,
            upvotes: 0,
            timestamp: new Date(),
            author: req.cookies.get('userIdRedis')?.value
        }

        await Promise.all([
                // add comment to list
            redis.rpush('comments', commentId),
            // redis.json.set(`comments:${commentId}`,'$', comment)
                // add tags to comments 
            redis.sadd(`tags:${commentId}`, tags ),
            redis.hset(`comment_details:${commentId}`, comment)
        ])

        // await redis.json.numincrby('comment:3uTbXjN_p4I_gkLFiyNlB','$.upvotes', 1)

        return new Response('OK');

    }catch(err){
        console.log(err)
    }
}