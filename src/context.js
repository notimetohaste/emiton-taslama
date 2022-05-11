import React, { Component } from 'react';

const Context = React.createContext();
// ! 'action.type' is condition. If it is true procces will continue. Name of condition is "DELETE_CONTACT". Then returned object,
// ! put all state with spread operator shallow copy. Then 'contacts' key, value of it 'state.contacts.filtered =>
// ! if contact.id is not equal to contact.payload then switch is true.
const reducer = (state, action) => {
  switch (action.type) {
    case 'DELETE_CONTACT':
      return {
        ...state,
        contacts: state.contacts.filter(
          (contact) => contact.id !== action.payload
        ),
      };
    case 'ADD_CONTACT':
      return {
        ...state,
        contacts: [action.payload, ...state.contacts],
      };
    default:
      return state;
  }
};
export class Provider extends Component {
  state = {
    contacts: [
      {
        id: 1,
        name: 'Nurgeldi',
        phone: '2455555',
        email: 'amail@asdfadsf',
      },
      {
        id: 2,
        name: 'John',
        phone: '2455555',
        email: 'amail@asdfadsf',
      },
      {
        id: 3,
        name: 'Doe',
        phone: '2455555',
        email: 'amail@asdfadsf',
      },
    ],

    // ! 'action' is params of self calling function, "state" is params of "this.setState" and reducer take those params as its params!
    dispatch: (action) => this.setState((state) => reducer(state, action)),
  };
  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
