import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap'

const SearchBar = () => {
    return (
        <Form>
        <FormGroup>
          <Input type="stream" name="stream" id="exampleEmail" placeholder="Enter Streamer" />
        </FormGroup>
        </Form>
    )
}

export default SearchBar