import React, { Component } from 'react';

export default class AddContact extends Component {
  state = {
    name: '',
    phone: '',
    email: '',
  };

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  onSubmit = (e) => {
    e.preventDefault();
  };

  render() {
    const { name, phone, email } = this.state;
    return (
      <div>
        <div>Add Contact</div>
        <div>
          <form onSubmit={this.onSubmit}>
            <div>
              <label>Name</label>
              <input
                type="text"
                name="name"
                value={name}
                placeholder="Enter the Name"
                onChange={this.onChange}
              />
            </div>
            <div>
              <label>Phone Number</label>
              <input
                type="text"
                name="phone"
                value={phone}
                placeholder="Enter the Phone"
                onChange={this.onChange}
              />
            </div>
            <div>
              <label>Email Address</label>
              <input
                type="email"
                name="email"
                value={email}
                placeholder="Enter the Email"
                onChange={this.onChange}
              />
            </div>
            <input type="sumbit" value="Add Contact" />
          </form>
        </div>
      </div>
    );
  }
}
