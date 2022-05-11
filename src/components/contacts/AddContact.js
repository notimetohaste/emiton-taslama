import React, { Component } from 'react';
import { Consumer } from '../../context';
import TextInputGroup from '../layout/TextInputGroup';
import { v4 as uuidv4 } from 'uuid';

export default class AddContact extends Component {
  state = {
    name: '',
    phone: '',
    email: '',
  };

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  onSubmit = (dispatch, e) => {
    e.preventDefault();

    const { name, phone, email } = this.state;
    if (name !== ' ' && phone !== ' ' && email !== ' ') {
      const newContact = {
        id: uuidv4(),
        name,
        phone,
        email,
      };
      dispatch({ type: 'ADD_CONTACT', payload: newContact });
      this.setState({
        name: '',
        phone: '',
        email: '',
      });
    }
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
                <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                  <TextInputGroup
                    label="Name"
                    name="name"
                    value={name}
                    placeholder="Enter name"
                    onChange={this.onChange}
                  />
                  <TextInputGroup
                    label="Phone"
                    name="phone"
                    value={phone}
                    placeholder="Enter phone"
                    onChange={this.onChange}
                  />
                  <TextInputGroup
                    label="Email"
                    name="email"
                    type="email"
                    value={email}
                    placeholder="Enter email"
                    onChange={this.onChange}
                  />
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
