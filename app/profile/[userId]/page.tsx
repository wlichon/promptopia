"use client"

import {useState, useEffect} from 'react'
import {useSession} from 'next-auth/react'
import {useRouter, useSearchParams} from 'next/navigation'
import {Prompt} from '@models/prompt'

import Profile from "@components/Profile"

const OtherProfile = ({params}) => {
    const {data: session} = useSession()
    const router = useRouter()
    const searchParams = useSearchParams() 
    const name = searchParams.get('name')

    const [posts , setPosts] = useState([])
    useEffect(() =>{
    const fetchPosts = async() => {
      const response = await fetch(`/api/users/${params.userId}/posts`)
      const data = await response.json() 
      setPosts(data)
    }
    fetchPosts()
  }, [])

    const handleEdit = (post) => {
      router.push(`/update-prompt?id=${post._id}`)
    }

    const handleDelete = async (post) => {
      const hasConfirmed = confirm("Are you sure you want to delete this prompt?")

      if(hasConfirmed){
        try{
          await fetch(`/api/prompt/${post._id.toString()}`, {
            method: 'DELETE'
          })
          const filteredPosts = posts.filter((p) =>
            p._id !== post._id)
          setPosts(filteredPosts)
        }
        catch(error){
          console.log(error)
        }
      }
    }


    return (
        <Profile
            name={name}
            desc={`Welcome to ${name}'s personalized profile page, you can explore ${name}'s exceptional prompts here!`}
            data={posts}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
        />
    )
}

export default OtherProfile