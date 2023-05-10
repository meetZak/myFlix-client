import { useState } from "react";
import { Card, Container, Col, Row, Button, Form } from "react-bootstrap";
import { FavoritesView } from "../profile-view/fav-movies";
import { UserInfo } from "./user-info";

export const ProfileView = ({ user, movies }) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [birthday, setBirthday] = useState("");
    const [token] = useState("");
    const favMovies = movies.filter((movie) => user.FavoriteMovies.includes(movie._id))

    const removeFav = (id) => {
        fetch("https://zaflix.herokuapp.com/users/${user._id}/favorites/${id}",
        {
          method: "DELETE",
          headers: {
              Authorization: `Bearer ${localStorage.getItem('token')}`, 
              "Content-Type": "application/json",
          },
        }  
    ).then((response)=> response.json())
    .then((data)=>{
        if(data.newUser){
            localStorage.setItem('user', JSON.stringify(data.newUser));
            window.location.reload();
        }else{
            alert('there was an issue removing the movie.')
        }
    }).catch((e)=>console.log(e));
}
const handleUpdate = (event) => {

    event.preventDefault(); 
    
    const data = {
      Username: username,
      Password: password,
      Email: email,
      Birthday: birthday
    };
    fetch("https://zaflix.herokuapp.com/users/${user.Username}", {
        method: "PUT",
        body: JSON.stringify(data),
        headers: {
        "Content-Type": "application/json",
        Authorization :`Bearer ${localStorage.getItem('token')}`
        },
        body: JSON.stringify (data),
     }).then((response)=>response.json())
     .then((data)=>{
       if(data.newUser){
           localStorage.setItem("user", JSON.stringify(data.newUser));
           alert('Update successful!')
           window.location.reload();
       }else{
           alert('Update failed!')
       }
   }).catch((e)=>{
       console.log(e);
   })
}
const handleDeregister = (username) => {

    fetch("https://zaflix.herokuapp.com/users/${Username}", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization : `Bearer ${localStorage.getItem('token')}`
      }
    }).then((response) => {
      if (response.ok) {
        alert("Account successfully deleted");
        localStorage.clear();
        window.location.reload(); 
      } else {
        alert("Something went wrong");
      }
    }).catch((e)=>{
      console.log(e);
  })
};
return (
<Container >
  <Row>
  <Col xs={12} sm={4}>
      <Card style={{marginTop: 30}}>
        <Card.Body>
          <Card.Title>My Information</Card.Title>
          <Card.Text>
          <UserInfo username={user.Username} email={user.Email} handleDeregister={handleDeregister} />
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
    <Col xs={12} sm={8}>
      <Card style={{marginTop: 30}}>
      <Card.Body>
          <Card.Title>Update Information</Card.Title>
          <Form className="w-100" onSubmit={handleUpdate}>  
          <Form.Group controlId="updateFormUsername">
            <Form.Label>New Username:</Form.Label>
            <Form.Control
              type="text"
              defaultValue={username}
                  onChange={event => setUsername(event.target.value)} 
              minLength="5" 
              placeholder="Enter username (min 5 characters)"
            />
          </Form.Group>
          <Form.Group controlId="updatePassword">
            <Form.Label>New Password:</Form.Label>
            <Form.Control
              type="password"
              value={password}
              defaultValue=''
                  onChange={event => setPassword(event.target.value)}
              placeholder="Password"
            />
          </Form.Group>
          <Form.Group controlId="updateFormEmail">
            <Form.Label>New Email:</Form.Label>
            <Form.Control
              type="email"
              value={email}
              defaultValue={email}
                  onChange={event => setEmail(event.target.value)}
              placeholder="Enter email"
            />
          </Form.Group>
          <Form.Group controlId="updateFormBirthday">
            <Form.Label>New Birthday:</Form.Label>
            <Form.Control
              type="date"
              defaultValue={birthday}
                  onChange={event => setBirthday(event.target.value)}
            />
          </Form.Group>
          <Button variant="primary" type="submit" style={{ margin: '0.7rem'}}>
            Save Changes
          </Button>
          </Form>
        </Card.Body>
      </Card>
      <Link to="/login">
      <Button onClick={() => handleDeregister(user._id)} className="button-delete mt-3" type="submit" variant="danger" >Delete Account</Button>
      </Link>
    </Col>
  </Row>
  <FavoritesView favMovies={favMovies} removeFav={removeFav}/>
</Container>
);
};