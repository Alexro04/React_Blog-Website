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
      <div className="w-full">
        <div className="w-full">
          <img src={appwriteService.getFilePreview(featuredImage)} alt={title} />
        </div>
        <div className="mt-1">
          <p className="m-0 text-sm">{date}</p>
          <h2 className="m-0 mt-1 text-base font-normal">{title}</h2>
          <p className="m-0 mt-2 text-sm opacity-80">Written by {authorName}</p>
        </div>
      </div>
    </Link>
  )
}

export default PostCard