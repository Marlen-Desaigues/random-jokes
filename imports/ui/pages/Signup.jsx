import { Accounts } from 'meteor/accounts-base';

import React, { Component } from 'react';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Form      from 'react-bootstrap/Form';
import Button    from 'react-bootstrap/Button';

class Signup extends Component {
    state = {
        email: "",
        username: "",
        password: "",
        verifyPassword: "",
    }

    handleSubmit = (event) => {
        event.preventDefault();

        if (this.state.email === "") {
            toast.error("Votre email n'est pas renseigné");
            return;
        }

        if (this.state.username === "") {
            toast.error("Vous devez choisir un nom d'utilisateur");
            return;
        }

        if (this.state.password === "") {
            toast.error("Votre mot de passe n'est pas renseigné");
            return;
        }

        if (this.state.password !== this.state.verifyPassword) {
            toast.error("La vérification ne correspond pas");
            return;
        }

        Accounts.createUser({
            email: this.state.email,
            username: this.state.username,
            password: this.state.password,
        }, (error) => {
            if (error) {
                toast.error(error.reason);
            } else {
                this.props.history.push('/room');
            }
        });
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }

    render() {
        return (
            <Container>
                <Form onSubmit={this.handleSubmit} >
                    <Form.Control
                        type="email"
                        name="email"
                        onChange={this.handleChange}
                        value={this.state.email}
                        placeholder="Votre adresse email"
                    />
                    <Form.Control
                        type="text"
                        name="username"
                        onChange={this.handleChange}
                        value={this.state.username}
                        placeholder="Votre nom d'utilisateur"
                    />
                    <Form.Control
                        type="password"
                        name="password"
                        onChange={this.handleChange}
                        value={this.state.password}
                        placeholder="Votre mot de passe"
                    />
                    <Form.Control
                        type="password"
                        name="verifyPassword"
                        onChange={this.handleChange}
                        value={this.state.verifyPassword}
                        placeholder="Retapez votre mot de passe"
                    />
                    <Button variant="primary" type="submit">Inscription</Button>
                    <Button variant="secondary" as={Link} to="/signin">
                        J'ai déjà un compte
                    </Button>
                </Form>
            </Container>
        )
    }
}

export default Signup;