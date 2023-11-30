import React, { Component } from "react";

const UserContext = React.createContext();

export class UserProvider extends Component {
    state = {
        users: [
            {
                id: 1,
                name: "Ömer",
                mail: "gungoromer@windowslive.co",
                phone: "05327326949"
            },
            {
                id: 2,
                name: "Esta",
                mail: "esra@windowslive.co",
                phone: "5079374795"
            },
            {
                id: 3,
                name: "ruby",
                mail: "ruby@windowslive.co",
                phone: "053273244444"
            }
        ]
    }

    render() {
        return (
            <UserContext.Provider value={this.state}>
                {this.props.children}
            </UserContext.Provider>
        )
    }
}

const UserConsumer = UserContext.Consumer;

export default UserConsumer;
