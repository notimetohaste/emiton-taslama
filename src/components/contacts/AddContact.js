import React, { Component } from 'react';
import { Consumer } from '../../context';
import { v4 as uuidv4 } from 'uuid';

export default class AddContact extends Component {
  state = {
    name: 'asfasd',
    phone: '54545',
    email: 'one@gmail.com',
  };

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  onSubmit = (dispatch, e) => {
    e.preventDefault();

    const { name, phone, email } = this.state;

    const newContact = {
      id: uuidv4(),
      name,
      phone,
      email,
    };
    dispatch({ type: 'ADD_CONTACT', payload: newContact });
  };

  render() {
    const { name, phone, email } = this.state;

    return (
      <Consumer>
        {(value) => {
          const { dispatch } = value;
          return (
            <div>
              <div>Add Contact</div>
              <div>
                <form onSubmit={() => this.onSubmit(dispatch)}>
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
                  {/* <input type="sumbit" value="Click" /> */}
                  <button type="sumbit">ADD</button>
                </form>
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}
