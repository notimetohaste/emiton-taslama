import React, { Component } from 'react';
import Header from './components/layout/Header';
import Contacts from './components/contacts/Contacts';
import AddContact from './components/contacts/AddContact';
import About from './components/pages/About';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from './context';
import './App.css';

class App extends Component {
  render() {
    return (
      <Provider>
        <Router>
          <div>
            <Header />
            <Switch>
              <Route exact path="/" component={Contacts} />
              <Route exact path="/contacts/add" component={AddContact} />
              <Route exact path="/about" component={About} />
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}
export default App;
