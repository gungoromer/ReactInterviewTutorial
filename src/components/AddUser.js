import React, { Component } from 'react'

class AddUser extends Component {
    render() {
        return (
            <div className='col-8 mb-4'>
                <div className='card'>
                    <div className='card-header'>
                        <h4>Add User Form</h4>
                    </div>
                    <div className='card-body'>
                        <form>
                            <div className='form-group'>
                                <label>Ad</label>
                                <input type='text' className='form-control' id="name"></input>
                            </div>
                            <div className='form-group'>
                                <label>Mail</label>
                                <input type='mail' className='form-control' id="mail"></input>
                            </div>
                            <div className='form-group'>
                                <label>Phone</label>
                                <input type='text' className='form-control' id="phone"></input>
                            </div>
                            <button type='submit' className='btn btn-primary'>Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default AddUser;