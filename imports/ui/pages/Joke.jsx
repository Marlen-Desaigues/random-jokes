import { Meteor } from 'meteor/meteor';

import React, { Component } from 'react';

import Button    from 'react-bootstrap/Button';

import { AiOutlineLogout } from 'react-icons/ai';

import './Joke.css';

class Joke extends Component {
    handleClick = () => {
        Meteor.logout();
        this.props.history.push('/');
    }

    render() {
        return (
            <div>
                <h1 className="header">
                    Caubet la D.
                    <Button className="logout" onClick={this.handleClick}>
                        <AiOutlineLogout />
                    </Button>
                </h1>
                <ViewMessages />
                <CreateMessage />
            </div>
        );
    };
};

export default Joke;