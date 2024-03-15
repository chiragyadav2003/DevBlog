import {z} from "zod"
import {generate} from "./utils"

//* ------------------SIGNUP------------
//if user does not provde username, generate random username and assign 
const randomName = generate()

//signup validation
export const signupInput = z.object({
    email:z.string().email(),
    password:z.string().min(6),
    name:z.string().optional().default(`${randomName}`)
})

// type inference for signupInput
export type SignupType = z.infer<typeof signupInput>


//*----------------SIGNIN---------------
export const signinInput = z.object({
    email:z.string().email(),
    password:z.string().min(6),
})

export type SigninType = z.infer<typeof signinInput>


//*----------------CREATE BLOG -----------
export const createBlogInput = z.object({
    title:z.string(),
    content:z.string(),
})

export type CreateBlogType = z.infer<typeof createBlogInput>


//*----------------UPDATE BLOG -----------
export const updateBlogInput = z.object({
    id:z.string(),
    title:z.string().optional(),
    content:z.string().optional(),
})

export type UpdateBlogType = z.infer<typeof updateBlogInput>


