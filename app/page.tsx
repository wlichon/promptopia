'use client'
import Feed from '@components/Feed'
import React, { useEffect, useState } from 'react';

const dummyPosts = [
  {
    prompt: `🚀 Excited about space exploration? What's your favorite celestial body and why? Share your cosmic curiosity!`,
    userId: 1,
    tag: "#SpaceExploration"
  },
  {
    prompt: `🌍 Climate change concerns us all. How do you contribute to a greener planet in your daily life?`,
    userId: 2,
    tag: "#ClimateAction"
  },
  {
    prompt: `Bookworms, unite! Which book characters have left a lasting impact on you? Discuss your literary favorites.`,
    userId: 3,
    tag: `#BookClub`
  },
  {
    prompt: `🍲 Foodies assemble! Share your go-to comfort meal and the memories it brings.`,
    userId: 4,
    tag: `#FoodieTalk`
  }
]


const Home = () => {

  const [hasRun, setHasRun] = useState(false);

  const runOnce = async () => {

    try{
        await fetch(`http://localhost:3000/api/reset`, {
            method: 'DELETE',
        })
        await fetch("http://localhost:3000/api/reset", {
            method: 'POST',
            body: JSON.stringify(dummyPosts)
        })

    }catch(error){
        console.log(error)
    }finally{
      setHasRun(true)
    }
  }

  if (!hasRun)
    runOnce()
  
  return (
    <section className="w-full flex-center flex-col">
        <h1 className="head_text text-center">
            Discover & Share
            <br className="max-md:hidden" />
            <span className="orange_gradient text-center"> AI-Powered Prompts</span>
        </h1>
        <p className="desc text-center">
            Promptopia is an open-source AI prompting tool for modern world to discover, create and share creative prompts
        </p>

        <Feed/>
    </section>
  )
}

export default Home