import React from 'react'
import { Button, Form } from 'react-bootstrap'
import Modal from 'react-bootstrap/Modal'

const FormModal = (props) => {

  return (
    <>
    <Modal show={props.showModal}>
    <Modal.Header closeButton onHide={props.cancelHandler}>
    <Modal.Title>{props.modalTitle}</Modal.Title>
    </Modal.Header>
    <Modal.Body>
    <Form>
    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label> Product Image</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter product url"
                name="thumbnail"
                onChange={(e)=>{
                  props.onChangeHandler(e);
                  console.log(e.target.value)
                }}
                value={props.product.thumbnail}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label> Product title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter title"
                name="title"
                onChange={(e)=>{
                  props.onChangeHandler(e);
                  console.log(e.target.value)
                }}
                value={props.product.title}
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"

            >
              <Form.Label>Description</Form.Label>
              <Form.Control 
              as="textarea" 
              placeholder='Enter description'
              rows={3}
              name="description"
              onChange={(e)=>{
                props.onChangeHandler(e);
                console.log(e.target.value)
              }}
              value={props.product.description}/>
            </Form.Group>
          </Form>
    </Modal.Body>
    <Modal.Footer>
    <Button variant='secondary' onClick= {props.cancelHandler} >cancel</Button>

      <Button variant='success' onClick={props.edit?props.editHandler: props.addProduct}>{props.edit?"Edit Product":"Add Product"}</Button>
    </Modal.Footer>
    </Modal>
    </>
  )
}

export default FormModal