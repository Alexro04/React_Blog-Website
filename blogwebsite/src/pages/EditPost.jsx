import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import appwriteService from '../appwrite/config'
import Container from '../components/Container/Container'
import PostForm from '../components/post-form/PostForm'

function EditPost() {
  const [post, setPost] = useState(null)
  const {slug} = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    appwriteService.getPost(slug).then((post) => {
      if (post) {
        setPost(post)
      } else {
        navigate('all-posts')
      }
    })
  }, [slug, navigate])
  return (
    <div>
      <Container>
        <PostForm post={post}/>
      </Container>
    </div>
  )
}

export default EditPost