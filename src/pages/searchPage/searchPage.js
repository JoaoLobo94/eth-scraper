import "./searchPage.css";
import ResultsTable from "./components/resultsTable";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import React, { useState } from "react";

const SearchPage = () => {
  const [wallet, setWallet] = useState("");
  const [block, setBlock] = useState("");
  const [validated, setValidated] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
  };
  const resetForm = () => {
    window.location.reload(false);
  };
  return (
    <div className="container mt-5">
      <Row className="justify-content-md-center mb-4">
        <Col md="auto">
          <h2>Welcome to the ETH scraper</h2>
        </Col>
      </Row>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Form.Control
          value={wallet}
          required
          onChange={(e) => setWallet(e.target.value)}
          placeholder="Insert wallet"
        />
        <Form.Control.Feedback type="invalid">
          Please insert a wallet id
        </Form.Control.Feedback>
        <Form.Control
          value={block}
          required
          onChange={(e) => setBlock(e.target.value)}
          placeholder="Insert block from which you want to see history"
        />
        <Form.Control.Feedback type="invalid">
          Please insert a block number
        </Form.Control.Feedback>
        <Row className="justify-content-md-center mt-2">
          <Col md="auto">
            {!submitted && (
              <Button type="submit" onClick={() => setSubmitted(!submitted)}>
                Scrape!
              </Button>
            )}
          </Col>
          <Col md="auto">
            <Button variant="danger" type="reset" onClick={resetForm}>
              Reset page
            </Button>
          </Col>
        </Row>
      </Form>
      {submitted && <ResultsTable wallet={wallet} block={block} />}
    </div>
  );
};

export default SearchPage;
