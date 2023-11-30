import React, { Component } from 'react'
import PropTypes from 'prop-types'
import UserConsumer from '../context';

class User extends Component {
    state = {
        isVisible: true
    }

    constructor(props) {
        super(props);
    }


    onClickEvent(number, e) {
        this.setState({
            isVisible: !this.state.isVisible
        })
    }
    onDeleteUser(dispatch, e) {
        const { id } = this.props;
        console.log(this.props);
        dispatch({
            type: "DELETE_USER",
            payload: id
        });
    }

    render() {

        const { id, name, mail, phone } = this.props;
        const { isVisible } = this.state;

        return (
            <UserConsumer>
                {
                    value => {
                        const { dispatch } = value;
                        return (
                            <div className='card mb-5'>
                                <div className='card-header' onClick={this.onClickEvent.bind(this, 34)}>
                                    {name}-{id}
                                </div>
                                {
                                    isVisible ?
                                        <div className='card-body'>
                                            <p>{mail}</p>
                                            <p>{phone}</p>
                                            <button className='btn btn-danger btn-sm' onClick={this.onDeleteUser.bind(this, dispatch)}>Sil</button>
                                        </div>
                                        :
                                        null
                                }

                            </div>
                        )
                    }
                }
            </UserConsumer>
        )
    }
}

User.defaultProps = {
    id: 0,
    name: "-",
    mail: "-",
    phone: "-"
}
User.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    mail: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired
}

export default User;