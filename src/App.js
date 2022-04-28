import React, { Component } from "react";
import Header from "./components/Header";
import Contacts from "./components/Contacts";
import { Provider } from "./components/context";

import "./App.css";

class App extends Component {
  render() {
    return (
      <Provider>
        <div>
          <Header />
          <Contacts />
        </div>
      </Provider>
    );
  }
}
export default App;
