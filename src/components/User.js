import React, { Component } from 'react'
import PropTypes from 'prop-types'

class User extends Component {
    state = {
        isVisible: false
    }

    constructor(props) {
        super(props);
    }

    onClickEvent(number, e) {
        this.setState({
            isVisible: !this.state.isVisible
        })
    }

    render() {

        const { name, mail, phone } = this.props;
        const { isVisible } = this.state;

        return (
            <div className='card mb-5'>
                <div className='card-header' onClick={this.onClickEvent.bind(this, 34)}>
                    {name}
                </div>
                {
                    isVisible ?
                        <div className='card-body'>
                            <p>{mail}</p>
                            <p>{phone}</p>
                            <p>{this.state.test}</p>
                        </div>
                        :
                        null
                }

            </div>
        )
    }
}

User.defaultProps = {
    name: "-",
    mail: "-",
    phone: "-"
}
User.propTypes = {
    name: PropTypes.string.isRequired,
    mail: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired
}

export default User;