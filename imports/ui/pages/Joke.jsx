import { Meteor } from 'meteor/meteor';

import React, { Component } from 'react';

import Button    from 'react-bootstrap/Button';

import { AiOutlineLogout } from 'react-icons/ai';

import CreateJoke from '/imports/ui/components/CreateJoke';
import ViewJokes  from '/imports/ui/components/ViewJokes';

import './Joke.css';

class Jook extends Component {
    handleClick = () => {
        Meteor.logout();
        this.props.history.push('/');
    }

    render() {
        return (
            <div>
                <h1 className="header">
                    Blagues.
                    <Button className="logout" onClick={this.handleClick}>
                        <AiOutlineLogout />
                    </Button>
                </h1>
                <ViewJokes />
                <CreateJoke />
            </div>
        );
    };
};

export default Joke;