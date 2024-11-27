import React, {useEffect, useState} from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import appwriteService from '../appwrite/config'
import Button from '../components/Button'
import Container from '../components/Container/Container'
import parse from 'html-react-parser'
import { useSelector } from 'react-redux'
import editIcon from '../assets/icons/edit-icon.svg'
import deleteIcon from '../assets/icons/delete-icon.svg'

function ViewPost() {
  const [post, setPost] = useState(null)
  const [likes, setLikes] = useState(0)
  const [hasLiked, sethasLiked] = useState(false)
  const [strokeColor, setStroke] = useState('black')
  const [fillColor, setFill] = useState('white')
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

  const likePost = ()=> {
    if (hasLiked) {
      setLikes(() => likes - 1)
      setFill('white')
      setStroke('black')
    } else {
      setLikes(() => likes + 1)
      setFill('crimson')
      setStroke('crimson')
    }
    sethasLiked(!hasLiked)
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
        <div className="w-full flex flex-col items-center">
          <div className="relative min-w-80 w-1/2">
            { isAuthor && <div className="w-fit absolute bottom-5 right-5 rounded-lg flex items-center justify-between px-2 py-0.5 bg-lime-800 backdrop-blur-xl bg-opacity-10">
              <Link to={`/edit-post/${post.$id}`} className='relative flex justify-center group'>
                <div className='absolute whitespace-nowrap bottom-10 bg-black text-white p-1.5 rounded-xl text-sm hover:opacity-100 hidden group-hover:block'>Edit this post</div>
                <img src={editIcon} alt="Edit this post" className='hover:opacity-50 w-6 min-w-6 m-1' />
              </Link>
              <Button onClick={deletePost} className='ml-5 flex justify-center group'>
                <div className='absolute whitespace-nowrap bottom-10 bg-black text-white p-1.5 rounded-xl text-sm hover:opacity-100 hidden group-hover:block'>Delete this post</div>
                <img src={deleteIcon} alt="Delete this post" className='w-6 min-w-6 m-1 hover:opacity-50' />
              </Button>
            </div>}
            <img src={imageLink()} alt={post.title} />
          </div>
          <div class="flex flex-col center mt-4 w-3/5">
            <h1 className='text-3xl font-semibold mb-2 text-center'>{post.title}</h1>
            <div className="text-xl font-thin">
              {parse(post.content)}
            </div>

            <div className="flex items-center mt-5 gap-6">
              <div className="flex items-center">
                Like?
                <button onClick={likePost} className=' ml-2 mr-1'>
                  <svg 
                  width="20px"
                  height="20px" 
                  viewBox="0 0 24 24" 
                  fill={fillColor} 
                  xmlns="http://www.w3.org/2000/svg">
                  <path 
                  d="M15.7 4C18.87 4 21 6.98 21 9.76C21 15.39 12.16 20 12 20C11.84 20 3 15.39 3 9.76C3 6.98 5.13 4 8.3 4C10.12 4 11.31 4.91 12 5.71C12.69 4.91 13.88 4 15.7 4Z" 
                  stroke={strokeColor} 
                  stroke-width="2" 
                  stroke-linecap="round" 
                  stroke-linejoin="round"/>
                  </svg>
                </button>
                {likes}
              </div>
              <div class="share">
                Share with a friend
                <img src="images/share-svgrepo-com.svg" alt="" />
              </div>
            </div>
          </div>

        </div>
      </Container>
    </div>
  ) : null

}

export default ViewPost