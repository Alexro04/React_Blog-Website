import React, {useEffect, useState} from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import appwriteService from '../appwrite/config'
import Button from '../components/Button'
import Container from '../components/Container/Container'
import parse from 'html-react-parser'
import { useSelector } from 'react-redux'

function ViewPost() {
  const [post, setPost] = useState(null)
  const [likes, setLikes] = useState(post ? post.likes : 0 || 0)
  const [hasLiked, sethasLiked] = useState(false)
  const {slug} = useParams()
  const navigate = useNavigate()
  const userData = useSelector((state) => state.auth.userData)
  const isAuthor = post && userData ? post.userId === userData.$id : false

  const deletePost = ()=> {
    appwriteService.deletePost(post.$id).then((status) => {
      if (status) {
        appwriteService.deleteFile(post.featuredImage)
        navigate('/all-posts')
      }
    })
  }

  const imageLink = ()=> {
    const imageLink = appwriteService.getFilePreview(post.featuredImage)
    return imageLink
  }

  useEffect(() => {
    if (slug) {
      appwriteService.getPost(slug).then((post) => {
        if (post) {
          setPost(post)
        } else {
          navigate('/all-posts')
        }
      })
    }
  }, [slug, navigate])
    
  return post ? (
    <div className="py-8">
      <Container>
        <div class="main-content">
          <div class="image-container">
            { isAuthor && <div class="editor-option">
              <Link to={`/edit-post/${post.$id}`} >
                <img src="images/edit-svgrepo-com.svg" alt="Edit this post" title="Edit this post" />
              </Link>
              <Button onClick={deletePost}>
                <img src="images/delete-svgrepo-com.svg" alt="Delete this post" title="Delete this post" />
              </Button>
            </div>}
            <img src={imageLink()} alt={post.title} />
          </div>
          <div class="write-up">
            <h1>{post.title}</h1>
            <div class="body">
              {parse(post.content)}
            </div>

            {/* <div class="engage-post">
              <div class="like likedpost">
                Like?
                <button onClick={''}>
                  <svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15.7 4C18.87 4 21 6.98 21 9.76C21 15.39 12.16 20 12 20C11.84 20 3 15.39 3 9.76C3 6.98 5.13 4 8.3 4C10.12 4 11.31 4.91 12 5.71C12.69 4.91 13.88 4 15.7 4Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </button>
                {likes}
              </div>
              <div class="share">
                Share with a friend
                <img src="images/share-svgrepo-com.svg" alt="" />
              </div>
            </div> */}
          </div>

        </div>
      </Container>
    </div>
  ) : null

}

export default ViewPost