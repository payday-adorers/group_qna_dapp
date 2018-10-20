import React, { Component } from "react";
import getWeb3 from "./utils/getWeb3";

import "./App.css";

class App extends Component {
  state = { storageValue: 0, web3: null, accounts: null};

  componentDidMount = async (resolve, reject) => {
    try {
        const web3 = await getWeb3();
        const accounts = await this.getAccount(web3);

        this.setState({ web3: web3, accounts: accounts});
    } catch (error) {
      alert(
        `Failed to load web3, accounts, or contract. Check console for details.`
      );
      console.log(error);
    }
  };

  getAccount = function (web3) {

      return new Promise((resolve, reject) => {
          web3.eth.getAccounts((err, res) => {
              if (err !== null) {
                  reject(err);
              } else {
                  resolve(res);
              }
          })
      })
  };

  render() {
    if (!this.state.web3) {
      return <div>Loading Web3, accounts, and contract...</div>;
    }
    return (
      <div className="App">
        <h1>Good to Go!</h1>
        <p>Your Truffle Box is installed and ready.</p>
        <h2>Smart Contract Example</h2>
        <p>
          If your contracts compiled and migrated successfully, below will show
          a stored value of 5 (by default).
        </p>
        <p>
          Try changing the value stored on <strong>line 37</strong> of App.js.
        </p>
        <div>The stored value is: {this.state.storageValue}</div>
      </div>
    );
  }
}

export default App;
