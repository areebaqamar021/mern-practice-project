import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ListGroup, Row, Col, Button, Alert } from "react-bootstrap";
import axios from 'axios';
import DeleteDialog from './DeleteDialog';

function Users() {
  const [state, setstate] = useState([]);

  const [reload, setReload] = useState(false);
  const [msg, setMsg] = useState('');
  const [delFlag, setDelFlag] = useState(false);

  useEffect(() => {
      axios.get('http://localhost:4000/api/users')
      .then((res) => {
        console.log(res.data);
        setstate(res.data.data);
      })
      .catch((e) => console.log(e));
      setMsg('');
  }, [reload]);

  
  const DelPost = (item_id) => {
    axios.delete("http://localhost:4000/api/users/" + item_id)
      .then(
        (res) => {
          setReload(!reload);
          setDelFlag(true);
          setMsg('User was deleted successfully');
        })
      .catch((err) => console.log(err));
    }
  
  const [show, setShow] = useState(true);


  return (

    <Row className="mt-5">
      <Col lg={3} md={2} sm={1} xs={1}></Col>
      <Col lg={6} md={8} sm={10} xs={10}>
        <ListGroup>
          {delFlag ?
            <Alert variant="success" onClose={() => {setShow(false); setDelFlag(false)}} dismissible>
              {msg}
            </Alert>
            : <span></span>}

          <ListGroup.Item variant="primary">
            <Row className="col-headers">
              <Col>Name</Col>
              <Col>Email</Col>
              <Col>Actions</Col>
            </Row>
          </ListGroup.Item>

          {state.map((item, ind) => (
            <ListGroup.Item key={ind} variant="light">
              <Row>
                <Col>{item.name}</Col>
                <Col>{item.email}</Col>
                <Col>
                  <Button 
                    variant="dark"
                    size="sm"
                    as={Link}
                    to={"/single-user/" + item._id}
                  >
                    View
                  </Button>
                  <DeleteDialog handleDelete={DelPost} id={item._id}/>

                </Col>
              </Row>
            </ListGroup.Item>
          ))} 
        </ListGroup>
      </Col>
      <Col lg={3} md={2} sm={1} xs={1}></Col>
    </Row>
  );
}

export default Users;
