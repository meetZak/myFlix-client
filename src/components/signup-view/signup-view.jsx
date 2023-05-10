import { useState } from "react";
import { Card, CardGroup, Col, Container, Row, Button, Form} from "react-bootstrap";
import { Navigate, useNavigate } from "react-router";

export const SignupView = (onLoggedIn) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [birthday, setBirthday] = useState("");
  const navigate = useNavigate();

  // validation of user signup
  const handleSubmit = (event) => {
    
    event.preventDefault(); 
    
    const data = {
      Username: username,
      Password: password,
      Email: email,
      Birthday: birthday
    };

    fetch("https://zaflix.herokuapp.com/users", {
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
      }) .catch((e) => console.log(e));
      navigate('/login') 
  };

  // signup form with submit button
  return (
    <Container >
      <Row>
        <Col>
          <CardGroup>
            <Card style={{marginTop: 50}}>
            <Card.Body>
              <Card.Title>User Registration</Card.Title>
              <Form onSubmit={handleSubmit}>  
              <Form.Group controlId="signUpFormUsername">
                <Form.Label>Username:</Form.Label>
                <Form.Control
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                  minLength="5" 
                  placeholder="Enter username (min 5 characters)" />
                  </Form.Group>

              <Form.Group controlId="signUpFormPassword">
                <Form.Label>Password:</Form.Label>
                <Form.Control
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  placeholder="Password"
                />
              </Form.Group>

              <Form.Group controlId="signUpFormEmail">
                <Form.Label>Email:</Form.Label>
                <Form.Control
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="Enter email"
                />
              </Form.Group>

              <Form.Group controlId="signUpFormBirthday">
                <Form.Label>Birthday:</Form.Label>
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
            </Card.Body>
            </Card>
          </CardGroup>
        </Col>
      </Row>
    </Container>
);
};
