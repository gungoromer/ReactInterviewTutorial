import React, { Component } from "react";
import posed from "react-pose";
import UserConsumer from "../context";
var uniqid = require("uniqid");

const Animation = posed.div({
  visible: {
    opacity: 1,
    applyAtStart: {
      display: "block",
    },
  },
  hidden: {
    opacity: 0,
    applyAtEnd: {
      display: "none",
    },
  },
});

class AddUser extends Component {
  state = {
    visible: false,
    name: "",
    mail: "",
    phone: "",
  };
  changeVisibility = (e) => {
    this.setState({
      visible: !this.state.visible,
    });
  };
  onChangeGeneric = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  addUser = (dispatch, e) => {
    e.preventDefault();
    const { name, mail, phone } = this.state;

    const newUser = {
      id: uniqid(),
      name,
      mail,
      phone,
    };

    dispatch({ type: "ADD_USER", payload: newUser });
  };
  render() {
    const { visible, name, mail, phone } = this.state;
    return (
      <UserConsumer>
        {(value) => {
          const { dispatch } = value;

          return (
            <div className="col-8 mb-4">
              <button
                onClick={this.changeVisibility}
                className="btn btn-primary btn-block"
              >
                {visible ? "Hide Form" : "Show Form"}
              </button>
              <Animation pose={visible ? "visible" : "hidden"}>
                <div className="card">
                  <div className="card-header">
                    <h4>Add User Form</h4>
                  </div>
                  <div className="card-body">
                    <form onSubmit={this.addUser.bind(this, dispatch)}>
                      <div className="form-group">
                        <label>Ad</label>
                        <input
                          type="text"
                          className="form-control"
                          name="name"
                          id="name"
                          value={name}
                          onChange={this.onChangeGeneric}
                        ></input>
                      </div>
                      <div className="form-group">
                        <label>Mail</label>
                        <input
                          type="mail"
                          className="form-control"
                          name="mail"
                          id="mail"
                          value={mail}
                          onChange={this.onChangeGeneric}
                        ></input>
                      </div>
                      <div className="form-group">
                        <label>Phone</label>
                        <input
                          type="text"
                          className="form-control"
                          name="phone"
                          id="phone"
                          value={phone}
                          onChange={this.onChangeGeneric}
                        ></input>
                      </div>
                      <button type="submit" className="btn btn-primary">
                        Submit
                      </button>
                    </form>
                  </div>
                </div>
              </Animation>
            </div>
          );
        }}
      </UserConsumer>
    );
  }
}

export default AddUser;
