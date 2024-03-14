import { Hono } from 'hono'
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { HTTPException } from 'hono/http-exception'
import { decode, sign, verify } from 'hono/jwt'


//hono type is generic of ENV type which accepsts Bindings and Variables
//we can specify all of our environment variables here
const app = new Hono<{
      Bindings:{
        DATABASE_URL:string,
        JWT_SECRET:string
      }}
>()

//** adding auth middleware on routes for get,post,put request i.e, for blog requests */
app.use('/api/v1/blog/*', async(c,next)=>{
  const header = c.req.header("authorization")||"";

  //remove "Bearer " from token
  const token = header.replace("Bearer ", "")

  const response = await verify(token, c.env.JWT_SECRET)
  if(!response?.id){
    c.status(403)
    return c.json({error:"unauthorized request"})
  }
  await next()
})

app.get('/api/v1/', (c) => {

  //NOTE: here DATABASE_URL accessed from wrangler.toml file
  // const { DATABASE_URL } = env<{ DATABASE_URL: string }>(c)
  // const prisma = new PrismaClient({
  //     datasourceUrl: DATABASE_URL,
  // }).$extends(withAccelerate())

  const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate())

    return c.text('Hello Hono!')
})

app.post("/api/v1/user/signup", async(c)=>{

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
      
      const res = await prisma.user.create({
        data:{
          email:body.email,
          password:body.password
        }
      })
      console.log(res)
    
      //generate token
      const payload = {
        userId:res.id
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

app.post("/api/v1/user/signin", async(c)=>{

  const prisma = new PrismaClient({
    datasourceUrl: c.env?.DATABASE_URL,
  }).$extends(withAccelerate())

  const body = await c.req.json()

  try {
    const user = await prisma.user.findUnique({
      where:{email:body.email,password:body.password}
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

app.post("/api/v1/blog", (c)=>{
  return c.text('blog!')
})

app.put("/api/v1/blog", (c)=>{
  return c.text('blog update route')
})


app.get("/api/v1/blog/:id", (c)=>{
  const id = c.req.param('id')
  console.log(id)
  return c.text('get blog route!')
})

app.get("/api/v1/blog/bulk", (c)=>{
  return c.text('signin route - get all blogs')
})

export default app

/*
  const token = body?.jwt.replace("bearer ","")

    //verify this token
    const decodedPayload = await verify(token, c.env.JWT_SECRET)

    if(!decodedPayload.id){
      c.status(403)
      return c.json({error:"invalid access token"})
    }

    //check if user exist for this id
*/