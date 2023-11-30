import React, { Component } from 'react'
import User from './User';
import UserConsumer from '../context';

class Users extends Component {
    render() {
        return (
            <UserConsumer>
                {
                    value => {
                        const { users } = value;
                        return (
                            <div>
                                {
                                    users.map(user => {
                                        return (
                                            <User
                                                key={user.id}
                                                name={user.name}
                                                phone={user.phone}
                                                mail={user.mail} />
                                        )
                                    })
                                }
                            </div>
                        )
                    }
                }
            </UserConsumer>
        )
    }
}

export default Users
