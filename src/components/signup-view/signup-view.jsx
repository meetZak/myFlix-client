import { useState } from "react";
import { Card, CardGroup, Col, Container, Row, Button, Form} from "react-bootstrap";
import { Navigate } from "react-router";
import { Link } from "react-router-dom";

export const SignupView = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [birthday, setBirthday] = useState("");
  

  // validation of user signup
  const handleSubmit = (event) => {
    
    event.preventDefault(); 
    
    const data = {
      Username: username,
      Password: password,
      Email: email,
      Birthday: birthday
    }

    fetch(`https://zmovies.onrender.com/users`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      }
    }).then((response) => {
      if (response.ok) {
        alert("Signup successful");
        window.location.reload();

      } else {
        alert("Signup failed");
      }
    })
      .catch((e) => console.log(e));
      <Navigate to="/login" />
  }; 

  // signup form with submit button
  return (
    // new code: Bootstrap
    // handleSubmit is the callback of onSubmit, tells the login API to validate user and password
    <Container >
      <Row>
        <Col className="d-flex justify-content-center">
        <h1 style={{marginTop: 120}}>Welcome to MyFlix!</h1>
        </Col>
      </Row>

      <Row>
        <Col>
          <CardGroup>
            <Card style={{marginTop: 80, backgroundColor: "whitesmoke"}}>
            <Card.Body>
              <Card.Title>Create an account</Card.Title>
              <Form onSubmit={handleSubmit}>  
              <Form.Group controlId="signUpFormUsername">
                <Form.Label style={{ marginTop: 10 }}>Username:</Form.Label>
                <Form.Control
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                  minLength="5" 
                  placeholder="username"

                />
              </Form.Group>

              <Form.Group controlId="signUpFormPassword">
                <Form.Label style={{ marginTop: 15 }}>Password:</Form.Label>
                <Form.Control
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  placeholder="password"
                />
              </Form.Group>

              <Form.Group controlId="signUpFormEmail">
                <Form.Label style={{ marginTop: 15 }}>Email:</Form.Label>
                <Form.Control
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="email"
                />
              </Form.Group>

              <Form.Group controlId="signUpFormBirthday">
                <Form.Label style={{ marginTop: 15 }}>Birthday:</Form.Label>
                <Form.Control
                  type="date"
                  value={birthday}
                  onChange={(e) => setBirthday(e.target.value)}
                  required
                />
              </Form.Group>

              <Button variant="primary" type="submit" style={{ margin: '0.7rem'}}>
                Submit
              </Button>
              </Form>
               <Link to="/login" className=" d-flex justify-content-end">
              <Button variant="link" style={{color: "black"}}> Login </Button> 
              </Link> 
            </Card.Body>
            </Card>
          </CardGroup>
        </Col>
      </Row>
    </Container>
);
};
   