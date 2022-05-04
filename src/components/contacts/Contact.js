import React, { Component } from 'react';
import { Consumer } from '../../context';

class Contact extends Component {
  constructor() {
    super();
    //! toggle = showing infos or not
    this.state = {
      showInfo: false,
    };
  }
  //! function for toggles
  showClick = () => {
    this.setState({
      showInfo: !this.state.showInfo,
    });
  };
  // ! this takes 'id, dispatch' as params. Then 'id' is called with 'this, id'. 'Dispatch' is called also with id. dispatch takes object params.
  // ! type and payload. type is 'DELETE_CONTACT' and payload is 'id'.
  deleteContact = (id, dispatch) => {
    dispatch({ type: 'DELETE_CONTACT', payload: id });
  };
  render() {
    //Destructoring
    const { id, name, phone, email } = this.props.contact; // here, props is used in a same way as functional component, but props not shown anywhere as property
    const { showInfo } = this.state;
    return (
      <Consumer>
        {(value) => {
          const { dispatch } = value;
          return (
            <div>
              <h1>
                {name} {'   '}
                <button style={{ cursor: 'pointer' }} onClick={this.showClick}>
                  click
                </button>
                <button
                  style={{ float: 'right', backgroundColor: 'red' }}
                  onClick={this.deleteContact.bind(this, id, dispatch)}
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
        }}
      </Consumer>
    );
  }
}

export default Contact;
