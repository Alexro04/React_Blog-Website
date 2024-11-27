import React, { useState, useEffect } from 'react'
import appwriteService from '../appwrite/config'
import Container from '../components/Container/Container'
import PostCard from '../components/PostCard'

function AllPosts() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    appwriteService.getPosts([]).then((posts) => {
      if (posts) {
        setPosts(posts.documents)
      }
    })
  }, [])
  
  if (posts.length === 0) {
    return (
      <div className='w-full py-8'>
      <Container>
        <div className="flex flex-wrap">
          <h1>There are no posts yet!!</h1>
        </div>
      </Container>
    </div>
    )
  }

  return (
    <div className=''>
      <Container>
        {posts.map((post) => (
          <div className="p-2" key={post.$id}>
            <PostCard {...post}/>
          </div>
        ))}
      </Container>
    </div>
  )
}

export default AllPosts