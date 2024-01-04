'use client'

import {useState, useEffect, useRef} from 'react'

import PromptCard from './PromptCard'


const PromptCardList = ({data, handleTagClick, handleIdClick}) => {
  return (
    <div className="mt-16 prompt_layout">
      {data.map((post) => (
        <PromptCard
          key={post._id}
          post={post}
          handleTagClick={handleTagClick}
          handleIdClick={handleIdClick}
        />
      ))}
    </div>
  )
}


const Feed = () => {
  const [searchText, setSearchText] = useState("")
  //const searchTextRef = useRef("")
  const [posts, setPosts] = useState([])
  const [filteredPosts, setFilteredPosts] = useState([])

  const handleSearchChange = (e) => {
    setSearchText(e.target.value)
    const filtered = posts.filter((post : any) => 
    post.prompt.toLowerCase().includes(e.target.value.toLowerCase()) || 
    post.tag.toLowerCase().includes(e.target.value.toLowerCase()) ||
    post.creator.username.toLowerCase().includes(e.target.value.toLowerCase()))
    setFilteredPosts(filtered)
  }

  // const handleSubmit = e => {
  //   e.preventDefault()
  //   const filtered = posts.filter((post : any) => {
  //     return post.prompt.includes(searchTextRef.current.value) || post.tag.includes(searchTextRef.current.value)

  //   }
  //   )

  //   setFilteredPosts(filtered)
  // }

  useEffect(() => {
    const abortController = new AbortController()
    const fetchPosts = async() => {
      const response = await fetch('/api/prompt', {signal: abortController.signal})
      const data = await response.json()

      setPosts(data)
      setFilteredPosts(data)
    }
    fetchPosts()
  },[])

  return (
    <section className="feed">
      <form 
      className="relative w-full flex-center"
      //onSubmit={handleSubmit}
      >
        <input 
        type="text"
        placeholder="Search for a tag or a username"
        //ref={searchTextRef}
        value={searchText}
        onChange={handleSearchChange}
        required
        className="search_input peer"
        />
      </form>
      <PromptCardList
        data={filteredPosts}
        handleTagClick={(tag) => {
          setSearchText(tag)
          handleSearchChange({target:{value:tag}})
          }
        }
        handleIdClick={(id) => {
          return true
        }}
        >
      </PromptCardList>
    </section>
  )
}

export default Feed