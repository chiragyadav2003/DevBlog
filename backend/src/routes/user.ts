import { Hono } from "hono";
import { passwordHashing } from "../utils/hashing"
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { sign } from 'hono/jwt'

/*
    NOTE: hono type is generic of ENV type which accepsts Bindings and Variables 
    we can specify all of our environment variables here
    so whatever environment variable we use from,we will put them in Bindings
    and whatever vaiables we use,we will put them in Variables
*/
export const userRouter = new Hono<{
    Bindings:{
        DATABASE_URL:string,
        JWT_SECRET:string
    },
    Variables : {
        userId: string
    }}
>()

userRouter.post("/signup", async(c)=>{

    const prisma = new PrismaClient({
        datasourceUrl: c.env?.DATABASE_URL,
    }).$extends(withAccelerate())

    const body = await c.req.json()

    //TODO: Add zod validation
    try {
        //NOTE: here we are not required to check if user exist for this email or not as we have already made our email field to be unique
        /* 
            //* check if user exist or not
            const check = await prisma.user.findFirst({
            where:{email:body.email}
            })
        
            if(check?.id){
            c.status(403)
            return c.json({error:"user already exist for this email"})
            }
        */
        
        const hashedPassword = await passwordHashing(body.password)
        const res = await prisma.user.create({
            data:{
            email:body.email,
            password:hashedPassword
            }
        })
        console.log(res)
        
        //generate token
        const payload = {
            userId:res.id
        }
        const token = await sign(payload,c.env.JWT_SECRET)
        console.log("token",token)
        
        return c.json({jwt:token})
    } catch (error) {
        c.status(404)
        return c.json({
            message:"signup error",
            error:error
        })
    }
})


userRouter.post("/signin", async(c)=>{

    const prisma = new PrismaClient({
        datasourceUrl: c.env?.DATABASE_URL,
    }).$extends(withAccelerate())

    // let data = await c.req
    // let jsondata = await c.req.json()
    // console.log("request data = ",data)
    // console.log("json data = ",jsondata)

    const body = await c.req.json()

    try {
        const hashedPassword = await passwordHashing(body.password)
        const user = await prisma.user.findUnique({
        where:{email:body.email,password:hashedPassword}
        })

        if(!user?.id){
        c.status(403)
        return c.json({error:"user does not exist"})
        }

        //generate token
        const payload = {
        userId:user.id
        }
        const token = await sign(payload,c.env.JWT_SECRET)
        console.log(token)

        return c.json({jwt:token})
    } catch (error) {
        c.status(404)
        return c.json({
            error:"signup error",
            "msg":error
        })
    }
})