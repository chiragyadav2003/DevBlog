import { Hono } from 'hono'
import { userRouter } from './routes/user'
import { blogRouter } from './routes/blog'


const app = new Hono<{
      Bindings:{
        DATABASE_URL:string,
        JWT_SECRET:string
      },
      Variables : {
        userId: string
      }}
>()


//* adding routes for user and blog requests
app.route("/api/v1/user",userRouter)

app.route("/api/v1/blog",blogRouter)

export default app

/*
  app.get('/api/v1', (c) => {

  /*
  NOTE: here DATABASE_URL accessed from wrangler.toml file
  import file -  import { HTTPException } from 'hono/http-exception'
  
  const { DATABASE_URL } = env<{ DATABASE_URL: string }>(c)
  const prisma = new PrismaClient({
      datasourceUrl: DATABASE_URL,
  }).$extends(withAccelerate())
  

  const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate())

    return c.text('Hello Hono!')
})
*/