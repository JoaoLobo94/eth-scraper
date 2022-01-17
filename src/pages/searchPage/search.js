// implement search bar function in center with all black. User should give in 2 commands and click search (GET COMPONENT)
// search bar will trigger api with axios
// api call here
import "./search.css";
import React from "react";
import InputGroup from 'react-bootstrap/InputGroup'
import Form from 'react-bootstrap/Form'

const Search = () => {
  return (
    <div>
      <InputGroup className="mb-3">
        <InputGroup.Text>First and last name</InputGroup.Text>
        <Form.Control aria-label="First name" />
        <Form.Control aria-label="Last name" />
      </InputGroup>
    </div>
  );
};

export default Search;
