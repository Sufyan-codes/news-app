import { useState } from "react";
import {
  Row,
  Col,
  Navbar,
  Nav,
  Form,
  FormControl,
  Button,
  Dropdown,
  Container,
} from "react-bootstrap";
import NewsList from "./Components/NewsList";

function App() {
  const [category, setCategory] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const handleCategoryClick = (cetegory) => {
    setCategory(cetegory);
    setSearchTerm("");
  };

  const handleSearch = (event) => {
    event.preventDefault();
    setCategory("");
    setSearchTerm(event.target.search.value);
  };

  return (
    <>
      <Navbar bg="light" expand="lg" className="mb-4">
        <Container>
          <Navbar.Brand href="/" className="fw-bold fs-4">
            News App
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="navbar-nav" />

        </Container>
      </Navbar>

      <Container>
        <Container className="mt-3">
        <Form onSubmit={handleSearch} className="d-flex">
              <FormControl
                type="text"
                placeholder="Search"
                className="me-2"
                name="search"
              />

              <Button variant="outline-primary" type="submit">
                Search
              </Button>
            </Form>

          <Col xs={12} md={12} className="">
          <Button className="m-1" onClick={() => handleCategoryClick("world")}> world</Button>
          <Button className="m-1" onClick={() => handleCategoryClick("business")}>Business</Button>
          <Button className="m-1" onClick={() => handleCategoryClick("technology")}>Technology</Button>
          <Button className="m-1" onClick={() => handleCategoryClick("sports")}> Sports</Button>
          <Button className="m-1" onClick={() => handleCategoryClick("entertainment")}>Entertainment</Button>
        </Col>
            </Container>
        <Row>
          <Col xs={12} md={12}>
            <NewsList category={category} searchTerm={searchTerm} />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
