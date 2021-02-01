import React, { useState } from "react";
import { Button, ListGroup, Row, Col } from "react-bootstrap";
import axios from 'axios';
import FileBase64 from "react-file-base64";
import { useHistory } from 'react-router-dom'

function AddPost() {
const [body, setBody] = useState('');
const [title, setTitle] = useState('');
const [image, setImage] = useState('');

const history = useHistory();
  
const handleSubmit=(e)=>{
  e.preventDefault();
  let post = {
        title,
        body,
        image,
  };
  // console.log(user);
  
  axios.post('http://localhost:4000/api/posts', post)
    .then(res => {
      console.log(res.data);
      history.push('/posts');
    })
    .catch(err=>console.log(err,'error'));


}

  return (
    // encType='multipart/form-data'
    <form onSubmit={handleSubmit} >
      <Row className="mt-5" >
        <Col lg={3} md={2} sm={1} xs={1}></Col>
        <Col lg={6} md={8} sm={10} xs={10}>
          <ListGroup>
            <ListGroup.Item variant="primary" className="col-headers">
              Add New Post
            </ListGroup.Item>
            <ListGroup.Item variant="light">
              <Row>
                <Col sm={12} md={3} className="col-headers">Title</Col>
                <Col sm={12} md={9} >
                  <input 
                    type="text"
                    name='name' 
                    onChange={(e)=>setTitle(e.target.value)} />
                </Col>
              </Row>
              <Row>
                <Col sm={12} md={3}  className="col-headers">Body</Col>
                <Col sm={12} md={9}>
                  <textarea 
                    rows='5'
                    style={{width: '100%'}} 
                    type="text" name='body' 
                    onChange={(e)=>setBody(e.target.value)} >
                  </textarea>
                </Col>
              </Row>
              <Row>
                <Col sm={12} md={3}  className="col-headers">Image</Col>
                <Col sm={12} md={9}>
                  <FileBase64
                    multiple={false}
                    onDone={({base64})=>setImage(base64)}>

                  </FileBase64>
                </Col>
              </Row>

              <Row className="my-2">
                <Col className="text-center">
                  <Button type='submit' variant="dark" size="md">
                    Add Post
                  </Button>
                </Col>
              </Row>
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col lg={3} md={2} sm={1} xs={1}></Col>
      </Row>
    </form>
  );
}

export default AddPost;
