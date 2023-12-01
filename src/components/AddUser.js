import React, { Component } from "react";
import posed from "react-pose";

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
    visible: true,
  };
  changeVisibility = (e) => {
    this.setState({
      visible: !this.state.visible,
    });
  };
  render() {
    const { visible } = this.state;
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
              <form>
                <div className="form-group">
                  <label>Ad</label>
                  <input type="text" className="form-control" id="name"></input>
                </div>
                <div className="form-group">
                  <label>Mail</label>
                  <input type="mail" className="form-control" id="mail"></input>
                </div>
                <div className="form-group">
                  <label>Phone</label>
                  <input
                    type="text"
                    className="form-control"
                    id="phone"
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
  }
}

export default AddUser;
