import React, { Component } from "react";

class Contact extends Component {
  constructor() {
    super();
    this.state = {
      showInfo: false,
    };
  }

  showClick = (e) => {
    this.setState({
      showInfo: !this.state.showInfo,
    });
  };
  deleteContact = () => {};
  render() {
    //Destructoring
    const { name, phone, email } = this.props.contact;
    const { showInfo } = this.state;
    return (
      <div>
        <h1>
          {name}{" "}
          <button style={{ cursor: "pointer" }} onClick={this.showClick}>
            click
          </button>
          <button
            style={{
              cursor: "pointer",
              float: "right",
              backgroundColor: "red",
            }}
            onClick={this.deleteContact}
          >
            delete
          </button>
        </h1>
        {showInfo ? (
          <ul>
            <li>Phone number: {phone}</li>
            <li>Email address: {email}</li>
          </ul>
        ) : null}
      </div>
    );
  }
}

export default Contact;
