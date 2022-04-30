import React, { Component } from 'react';
import { Consumer } from './context';

class Contact extends Component {
  constructor() {
    super();
    this.state = {
      showInfo: false,
    };
  }

  showClick = () => {
    this.setState({
      showInfo: !this.state.showInfo,
    });
  };
  deleteContact = (id, dispatch) => {
    dispatch({ type: 'DELETE_CONTACT', payload: id });
    console.log(id);
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
                  style={{
                    cursor: 'pointer',
                    float: 'right',
                    backgroundColor: 'red',
                  }}
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
