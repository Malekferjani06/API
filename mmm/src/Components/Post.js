import React from 'react'
import {Card,Button} from 'react-bootstrap'
function Post({posts}) {
  return (
    <Card style={{ width: '18rem' }}>
    <Card.Body>
      <Card.Title>{posts.title}</Card.Title>
      <Card.Text>
      {posts.body}
      </Card.Text>
      <Button variant="primary">Go somewhere</Button>
    </Card.Body>
  </Card>
  )
}

export default Post