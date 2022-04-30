import React, { Component } from "react";

const Context = React.createContext();
const reducer = (state, action) => {
  switch (action.type) {
    case "DELETE_CONTACT":
      return {
        ...state,
        contacts: state.contacts.filter(
          (contact) => contact.id !== contact.payload
        ),
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
        name: "Nurgeldi",
        phone: "2455555",
        email: "amail@asdfadsf",
      },
      {
        id: 2,
        name: "John",
        phone: "2455555",
        email: "amail@asdfadsf",
      },
      {
        id: 3,
        name: "Doe",
        phone: "2455555",
        email: "amail@asdfadsf",
      },
    ],
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
