import {connectToDB} from '@utils/database'
import Prompt from '@models/prompt'

export const DELETE = async (req) => {
    try{
        await connectToDB()
        await Prompt.deleteMany({})
        return new Response("Resetting DB, deleting", {status: 200})
    }
    catch(error){
        return new Response("Failed to reset DB", {status: 500})
    }
}


export const POST = async (req) => {
    const dummyPosts = await req.json()
    try{
        await connectToDB()
        const newPrompts = dummyPosts.map(({prompt, userId, tag}) => {
            return new Prompt({
                creator: userId,
                prompt: prompt,
                tag: tag
            })
        })

        await Prompt.create(newPrompts);
    
        return new Response("Resetting DB, creating", {status: 200})
    }
    catch(error){
        return new Response("Failed to reset DB", {status: 500})
    }
}