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
blogRouter.use('*', async(c,next)=>{
    const header = c.req.header("Authorization")||"";

    if(!header){
        c.status(403)
        return c.json({error:"unauthorized request"})
    }

    //remove "Bearer " from token
    const token = header.replace("Bearer ", "")

    const response = await verify(token, c.env.JWT_SECRET)
    if(!response?.id){
        c.status(403)
        return c.json({error:"unauthorized request"})
    }
    //if all goes well, set userId in request
    c.set('userId', response.id)
    await next()
})

blogRouter.post("/", (c)=>{
    const prisma = new PrismaClient({
        datasourceUrl: c.env?.DATABASE_URL,
    }).$extends(withAccelerate())
    return c.text('blog!')
})

blogRouter.put("/", (c)=>{
    const prisma = new PrismaClient({
        datasourceUrl: c.env?.DATABASE_URL,
    }).$extends(withAccelerate())
    return c.text('blog update route')
})


blogRouter.get("/:id", (c)=>{
    const prisma = new PrismaClient({
        datasourceUrl: c.env?.DATABASE_URL,
    }).$extends(withAccelerate())

    const id = c.req.param('id')
    console.log(id)
    return c.text('get blog route!')
})

blogRouter.get("/bulk", (c)=>{
    const prisma = new PrismaClient({
        datasourceUrl: c.env?.DATABASE_URL,
    }).$extends(withAccelerate())

    return c.text('signin route - get all blogs')
})