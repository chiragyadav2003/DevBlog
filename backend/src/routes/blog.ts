import { Hono } from "hono";
import { verify } from 'hono/jwt'
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'

/*
    NOTE: hono type is generic of ENV type which accepsts Bindings and Variables 
    we can specify all of our environment variables here
    so whatever environment variable we use from,we will put them in Bindings
    and whatever vaiables we use,we will put them in Variables
*/
export const blogRouter = new Hono<{
    Bindings:{
        DATABASE_URL:string,
        JWT_SECRET:string
    },
    Variables : {
        userId: string
    }}
>()

//* adding auth middleware on routes for all type of blog requests */
blogRouter.use('/*', async(c,next)=>{
    const header = c.req.header("Authorization")||"";

    if(!header){
        c.status(403)
        return c.json({error:"unauthorized request - invalid header"})
    }

    //remove "Bearer " from token
    const token = header.replace("Bearer ", "")

    try {
        const response = await verify(token, c.env.JWT_SECRET)

        if(!response?.userId){
            c.status(403)
            return c.json({error:"unauthorized request - invalid access token"})
        }
        //if all goes well,extract userId and set userId in request
        c.set('userId', response.userId)
        await next()
    } catch (error) {
        c.status(403)
        return c.json({error:"unauthenticated request - error while authentication"})
    }

    
})

blogRouter.post("/", async(c)=>{
    const prisma = new PrismaClient({
        datasourceUrl: c.env?.DATABASE_URL,
    }).$extends(withAccelerate())

    const body = await c.req.json()
    const userId = c.get('userId')
    

    try {
        const post = await prisma.post.create({
            data:{
                title:body.title,
                content:body.content,
                authorId:userId
            }
        })

        return c.json({
            id:post.id,
            message:"blog created successfully"
        })
    } catch (error) {
        c.status(422)
        return c.json({
            message:"blog post request error - creation failed",
            error:error
        })
    }

})

blogRouter.put("/", async(c)=>{
    const prisma = new PrismaClient({
        datasourceUrl: c.env?.DATABASE_URL,
    }).$extends(withAccelerate())

    const body = await c.req.json()
    const userId = c.get('userId')

    try {
        const post = await prisma.post.update({
            where:{
                id:body.id,
                authorId:userId
            },
            data:{
                title:body.title,
                content:body.description,
            }
        })

        return c.json({
            message:"blog updated successfully"
        })
    } catch (error) {
        c.status(411)
        return c.json({
            message:"blog put request error - updation failed",
            error:error
        })
    }
})

//NOTE: here 'bulk' can also act as post id, so it will make call for search for post with id = "bulk", to avoid this conflict we wrote this handler first 
blogRouter.get("/bulk", async(c)=>{
    const prisma = new PrismaClient({
        datasourceUrl: c.env?.DATABASE_URL,
    }).$extends(withAccelerate())

    //TODO: add pagination
    try {
        const posts = await prisma.post.findMany({})
        console.log("posts -",posts)

        return c.json({posts})
    } catch (error) {
        c.status(411)
        return c.json({
            message:"blog get request error - accessing all posts failed",
            error:error
        })
    }
})

blogRouter.get("/:id", async(c)=>{
    const prisma = new PrismaClient({
        datasourceUrl: c.env?.DATABASE_URL,
    }).$extends(withAccelerate())

    const id = c.req.param('id')

    try {
        const post = await prisma.post.findFirst({
            where:{ id }
        })

        return c.json({post:post})
    } catch (error) {
        c.status(411)
        return c.json({
            message:"blog get request error - accessing single post with postId failed",
            error:error
        })
    }
})

