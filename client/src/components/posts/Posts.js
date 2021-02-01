import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ListGroup, Row, Col, Button, Alert } from "react-bootstrap";
import axios from 'axios';
// import { useHistory } from "react-router-dom";
// import { useParams } from "react-router-dom";
import DeleteDialog from "./DeleteDialog";


function Posts() {
  const [state, setstate] = useState([]);
  // to change for useefffect whenever deletes
  const [reload, setReload] = useState(false);
  const [msg, setMsg] = useState('');
  const [delFlag, setDelFlag] = useState(false);
  // const history = useHistory();

  useEffect(() => {
      axios.get('http://localhost:4000/api/posts')
      .then((res) => {
        console.log(res.data.data);
        setstate(res.data.data);
      })
      .catch((e) => console.log(e));
      setMsg('');
  }, [reload]);

  const DelPost = (item_id) => {

  axios.delete("http://localhost:4000/api/posts/" + item_id)
    .then(
      (res) => {
        // history.pushState('/posts');
        setReload(!reload);
        setDelFlag(true);
        setMsg('Post was deleted successfully');
        
      })
    .catch((err) => console.log(err));
  }

  
  const [show, setShow] = useState(true);


  return (
<>
    <Row className="mt-5">
      <Col lg={3} md={2} sm={1} xs={1}></Col>
      <Col lg={6} md={8} sm={10} xs={10}>
        <ListGroup>
          {delFlag ?
            <Alert variant="success" onClose={() => {setShow(false); setDelFlag(false)}} dismissible>
              Post was deleted successfully
            </Alert>
            : <span></span>}

          <ListGroup.Item variant="primary">
            <Row className="col-headers">
              <Col>Title</Col>
              <Col>Body</Col>
              <Col>Photo</Col>
              <Col>Actions</Col>
            </Row>
          </ListGroup.Item>

          {state.map((item, ind) => (
            <ListGroup.Item key={ind} variant="light">
              <Row>
                <Col>{item.title}</Col>
                <Col>{item.body}</Col>
                <Col><img width='100px' src={item.image} alt=""/></Col>

                <Col>
                  <Button 
                    variant="dark"
                    size="sm"
                    as={Link}
                    to={"/single-post/" + item._id}
                  >
                    View
                  </Button>
                  &nbsp; &nbsp;

                  <DeleteDialog handleDelete={DelPost} id={item._id}/>
                  
                </Col>
              </Row>
            </ListGroup.Item>
          ))} 
        </ListGroup>
      </Col>
      <Col lg={3} md={2} sm={1} xs={1}></Col>
    </Row>
</>
  );
}

export default Posts;
