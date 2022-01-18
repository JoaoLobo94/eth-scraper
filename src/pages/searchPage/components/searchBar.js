import "./searchBar.css";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const SearchBar = () => {
  return (
    <div className="container mt-5">
      <Row className="justify-content-md-center mb-4">
        <Col md="auto">
          <h2>Welcome to the ETH scraper 5000</h2>
        </Col>
      </Row>
      <Row className="mb-2">
        <InputGroup>
          <Form.Control placeholder="Insert wallet" />
          <Form.Control placeholder="Insert block from which you want to see history" />
        </InputGroup>
      </Row>
      <Row className="justify-content-md-center">
        <Col md="auto">
          <Button variant="success">Lookup data</Button>
        </Col>
      </Row>
    </div>
  );
};

export default SearchBar;
