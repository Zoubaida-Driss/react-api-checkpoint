import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const UserCard = ({user}) => {
    console.log(user)
  return (
    <div>
        <Card >
      <Card.Body className='container'>
        <Card.Title>{user.name}</Card.Title>
        <Card.Text>
          {user.company.name}
        </Card.Text>
        <Button variant="primary">info</Button>
      </Card.Body>
    </Card>
    </div>
  )
}

export default UserCard