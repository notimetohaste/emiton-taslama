import React, { Component } from "react";

const Context = React.createContext();

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
        name: "Ashyr",
        phone: "2455555",
        email: "amail@asdfadsf",
      },
      {
        id: 3,
        name: "Sazak",
        phone: "2455555",
        email: "amail@asdfadsf",
      },
    ],
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
