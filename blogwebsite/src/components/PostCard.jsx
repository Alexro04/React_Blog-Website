import React from 'react'
import appwriteService from '../appwrite/config'
import { Link } from 'react-router-dom'

function PostCard({
  title, $id, featuredImage, updated, authorName
}) {
  const dateObject = new Date(updated)
  const date = dateObject.toDateString()

  return (
    <Link to={`/post/${$id}`}>
      <div className="w-full rounded-2xl hover:scale-105 transition-all">
        <div className="w-full h-[200px] overflow-hidden relative">
          <img src={appwriteService.getFilePreview(featuredImage)} alt={title} className='w-full h-full object-cover absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'/>
        </div>
        <div className="mt-2">
          <p className="m-0 text-xs">{date}</p>
          <h2 className="m-0 text-xl font-normal">{title}</h2>
          <p className="m-0 mt-2 text-sm opacity-80">Written by {authorName}</p>
        </div>
      </div>
    </Link>
  )
}

export default PostCard