import React, { Component } from 'react';
import Header from './components/layout/Header';
import Contacts from './components/contacts/Contacts';
import AddContact from './components/contacts/AddContact';
import { Provider } from './context';

import './App.css';

class App extends Component {
  render() {
    return (
      <Provider>
        <div>
          <Header />
          <Contacts />
          <AddContact />
        </div>
      </Provider>
    );
  }
}
export default App;
