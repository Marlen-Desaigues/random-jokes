import { Meteor } from 'meteor/meteor';

import React, { Component } from 'react';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Form      from 'react-bootstrap/Form';
import Button    from 'react-bootstrap/Button';

class Signin extends Component {
    state = {
        email: "",
        password: "",
    };

    handleSubmit = (event) => {
        event.preventDefault();
        
        if (this.state.email === "") {
            toast.error("Votre email n'est pas renseigné");
            return;
        }

        if (this.state.password === "") {
            toast.error("Votre mot de passe n'est pas renseigné");
            return;
        }

        Meteor.loginWithPassword(this.state.email, this.state.password, (error) => {
            if (error) {
                toast.error(error.reason);
            } else {
                this.props.history.push('/joke');
            }
        });
    };

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }

    render() {
        return(
            <Container>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Control
                        type="email"
                        name="email"
                        onChange={this.handleChange}
                        value={this.state.email}
                        placeholder="entrez votre email"
                    />
                    <Form.Control
                        type="password"
                        name="password"
                        onChange={this.handleChange}
                        value={this.state.password}
                        placeholder="entrez votre mot de passe"
                    />
                    <Button variant="primary" type="submit">Connexion</Button>
                    <Button variant="secondary" as={Link} to="/signup">
                        Je n'ai pas de compte
                    </Button>
                </Form>
            </Container>
        );
    };
};

export default Signin;