import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';

import React, { Component } from "react";
import { formatDistanceToNow } from 'date-fns';
import { fr } from 'date-fns/locale';

class ViewJoke extends Component {
    renderUsername = () => {
        if (this.props.loading) {
            return "..."
        } else {
            return this.props.user.username;
        }
    }

    render() {
        return (
            <div className="joke">
                <p>{this.props.joke.content}</p>
                <small>
                    par {this.renderUsername()},&nbsp;
                    il y a {formatDistanceToNow(this.props.joke.createdAt, { locale: fr })}
                </small>
            </div>
        );
    };
};

export default withTracker(({ joke }) => {
    const UserPublication = Meteor.subscribe('users.all-usernames');
    const loading = !UserPublication.ready();
    const user = Meteor.users.findOne(joke.userId);

    return {
        loading,
        user,
    }
})(ViewJoke);