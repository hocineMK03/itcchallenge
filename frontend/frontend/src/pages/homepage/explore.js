import React, { useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../styles/homepage/explore.css';
const Explore = () => {
    const courseData = {
        title: "Introduction to Data Science",
        description: "Learn the fundamentals of data science and analytics.",
        duration: "4 weeks",
        fees: "$300",
        format: "Online",
        category: "Data Science",
        dateCreated: "2024-03-25T00:00:00Z"
    };
   
    return (
        <div className='page'>
            <div className='sidebar'>
            </div>
            <div className='cards'>
                <Card style={{ width: '18rem' }} className="course-card">
                    <Card.Body>
                        <Card.Title>Title :{courseData.title}</Card.Title>
                        <Card.Text>Description :{courseData.description}</Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroup.Item>Duration :{courseData.duration}</ListGroup.Item>
                        <ListGroup.Item>Category :{courseData.category}</ListGroup.Item>
                        <ListGroup.Item>Fees :{courseData.fees}</ListGroup.Item>
                        <ListGroup.Item>Date Created :{courseData.dateCreated}</ListGroup.Item>

                    </ListGroup>
                    <Card.Body className="card-btn">
        <Button  >Enlist</Button>
        <Button  >Details</Button>
        </Card.Body>
                </Card>
                
            </div>
        </div>
    );
}

export default Explore;
