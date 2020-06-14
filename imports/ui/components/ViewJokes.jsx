import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import Jokess from '/imports/api/jokes';

import React, { Component } from 'react';

import Container from 'react-bootstrap/Container';
import ViewJoke from '/imports/ui/components/ViewJoke';

class ViewJokes extends Component {
    renderJokes = () => {
        const renderedJokes = this.props.jokes.map((joke) => {
            return (
                <ViewJoke
                    joke={joke}
                    key={joke._id}
                />
            );
        });

        return renderedJokes;
    };

    render() {
        if (this.props.loading) {
            return (
                <p>Chargement...</p>
            );
        }

        return (
            <Container className="container">
                {this.renderJokes()}
            </Container>
        );
    };
};

export default withTracker(() => {
    const JokesPublication = Meteor.subscribe('jokes.all');
    const loading = !JokesPublication.ready();
    const jokes = Jokes.find({}, { sort: { createdAt: -1 }}).fetch();

    return {
        loading,
        jokes,
    }
})(ViewJokes);