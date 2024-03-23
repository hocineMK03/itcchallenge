import React from 'react'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
const ExploreDetails = ({particulairproduct,handleClose}) => {
  return (
    <Modal show={true} onHide={handleClose}>
    <Modal.Header closeButton>
      <Modal.Title>{particulairproduct.title}</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <p>Description: {particulairproduct.description}</p>
      <p>instructors: {particulairproduct.instructors}</p>
      <p>duration: {particulairproduct.duration}</p>
            <p>schedule: {particulairproduct.schedule} </p>
      <p>prerequisite: {particulairproduct.prerequisite} </p>
      <p>format: {particulairproduct.format} </p>
      <p>category: {particulairproduct.category} </p>
      <p>dateCreated: {particulairproduct.dateCreated} </p>
      <p>fees: {particulairproduct.fees} </p>

      
    </Modal.Body>
    <Modal.Footer>
    <Button variant="secondary"  onClick={() => {
  handleClose();
}}>
        Close
      </Button>
    </Modal.Footer>
  </Modal>
  )
}

export default ExploreDetails
