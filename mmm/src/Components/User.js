import React from 'react'
import {Card,Button} from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
function User({person}) {
 let  navigate=useNavigate()
  return (
    <Card style={{ width: '18rem' }}>
   
    <Card.Body>
      <Card.Title>{person.name}</Card.Title>
      <Card.Text>
       {person.username}
      </Card.Text>
      <Button  onClick={()=>navigate(`/user/profile/${person.id}`)}  >Go somewhere</Button>
    </Card.Body>
  </Card>
  )
}

export default User