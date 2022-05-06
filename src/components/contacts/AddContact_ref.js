import React, { Component } from 'react';

export default class AddContact extends Component {
  constructor(props) {
    super(props);

    this.nameInput = React.createRef();
    this.phoneInput = React.createRef();
    this.emailInput = React.createRef();
  }

  onSubmit = (e) => {
    e.preventDefault();
    const contact = {
      name: this.nameInput.current.value,
      phone: this.phoneInput.current.value,
      email: this.emailInput.current.value,
    };
    console.log(contact);
  };
  static defaultProps = {
    name: '',
    phone: '',
    email: '',
  };

  render() {
    const { name, phone, email } = this.props;

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
                placeholder="Enter the Name"
                ref={this.nameInput}
                defaultValue={name}
              />
            </div>
            <div>
              <label>Phone Number</label>
              <input
                type="text"
                name="phone"
                placeholder="Enter the Phone"
                ref={this.phoneInput}
                defaultValue={phone}
              />
            </div>
            <div>
              <label>Email Address</label>
              <input
                type="email"
                name="email"
                placeholder="Enter the Email"
                ref={this.emailInput}
                defaultValue={email}
              />
            </div>
            <input type="submit" value="Add contact" />
          </form>
        </div>
      </div>
    );
  }
}
