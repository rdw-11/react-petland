import React, { useEffect, useState } from "react";
import Header from "./Header";
import PetCard from "./PetCard";
import PetForm from "./PetForm";
import { pets as petsArray } from "./data";
import "./style.css";
import {Navbar, Nav, Container} from 'react-bootstrap';

function App() {
  const [pets, setPets] = useState([]);
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3000/pets")
      .then((res) => res.json())
      .then((data) => setPets(data));
  }, []);


  const petCards = pets.map((petObj) => {
    return (
      <PetCard
        key={petObj.id}
        name={petObj.name}
        image={petObj.image}
        favSnacks={petObj.favSnacks}
        isAdopted={petObj.isAdopted}
      />
    );
  });

  function addPet(petObj) {
    console.log("in App", petObj);
    setPets([...pets, petObj]);
  }


return (
  <>
  <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
  <br />
  <Navbar bg="primary" variant="dark">
    <Container>
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
    </Nav>
    </Container>
  </Navbar>

  <br />
  <Navbar bg="light" variant="light">
    <Container>
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
</>

export default App;



  return (
    <div>
      <Header user={user} setUser={setUser} />
      {user ? <p>Welcome, {user.username}</p> : <em>Please log in!</em>}
      <PetForm onAddPet={addPet} />
      <main>{petCards}</main>
    </div>
  );
}

export default App;
