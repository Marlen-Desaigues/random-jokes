import React, { Component } from "react";
import { toast } from 'react-toastify';

import Form   from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class CreateJoke extends Component {
    state = {
        content: "",
    }
    
    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }
    
    handleSubmit = (event) => {
        event.preventDefault();

        Meteor.call('jokes.create', { content: this.state.content }, (error) => {
            if (error) {
                toast.error(error.reason);
            } else {
                this.setState({ content: "" });
            }
        });
    }
    
    render() {
        return (
            <Form className="sender" onSubmit={this.handleSubmit}>
                <Form.Control
                    as="textarea"
                    name="content"
                    onChange={this.handleChange}
                    value={this.state.content}
                />
                <Button type="submit" block>
                    Envoyer
                </Button>
            </Form>
        );
    };
};

export default CreateJoke;