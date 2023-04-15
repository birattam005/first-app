import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';




const AddTodo = (props) => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const submit = (e) =>{
    e.preventDefault();
    if(!title || !desc){
      alert("Title and Description cannot be blank")
    }
    props.addTodo(title,desc);
  }


  return (
    <div className='container my-3'>
    <h3> Add a todo</h3>
    <Form onSubmit={submit}>
      <Form.Group className="mb-3" controlId="title">
        <Form.Label>Todo Title</Form.Label>
        <Form.Control type="text" value={title} onChange={(e) =>{setTitle(e.target.value)}}   placeholder="Enter Todo Title" />
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="desc">
        <Form.Label>Todo Description</Form.Label>
        <Form.Control type="text" value = {desc} onChange={(e) =>{setDesc(e.target.value)}} placeholder="description" />
      </Form.Group>
      <Button className='btn btn-sm' variant="success" type="submit">
        Add Todo
      </Button>
    </Form>
    </div>
  )
}

export default AddTodo
