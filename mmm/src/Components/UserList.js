import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Spinner } from 'react-bootstrap'
import User from './User'

function UserList() {
    const [users, setUsers] = useState()
    const [error, setError] = useState(null)
    useEffect(() => {
      axios.get('https://jsonplaceholder.typicode.com/users').then(res=>setUsers(res.data))
      .catch(err=>setError(err)) 
    }, [])
  return (
    
<div style={{display:"flex",flexWrap:"wrap",justifyContent:"space-around"}}>
 {error?<Spinner animation="border" />: users && users.map(el=> <User person={el} key={el.id}/>) }</div>   
    
  )
}

export default UserList

