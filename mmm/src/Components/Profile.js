import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Spinner } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import Post from './Post'

function Profile() {
    const [post, setPost] = useState()
    const [error, setError] = useState(null)
    let params=useParams()
    useEffect(() => {
      axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${params.id}`).then(res=>setPost(res.data))
      .catch(err=>setError(err)) 
    }, [])
    console.log(params.id)
  return (
   <div>
  {error?<Spinner animation="border" />: post && post?.map(el=><Post posts={el} key={el.id}/>) }
   
   </div>
  )
}

export default Profile