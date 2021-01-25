import React, { Component } from 'react';
import Operations from './components/Operations';
import Transactions from './components/Transactions';
import Breakdown from './components/Breakdown';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import './App.css';
const axios = require('axios')


class App extends Component {
  constructor() {
    super()
    this.state = {
      transactions: []
    }
  }
  async getTransactions() {
    return axios.get("/transactions")
  }
  async componentDidMount() {
    const response = await this.getTransactions()
    this.setState({ transactions: response.data })
  }
  deleteTransaction = async (id) => {
    const response = await axios.delete(`/transaction/${id}`)
    this.setState({ transactions: response.data })
  }
  async postTransaction(newTransaction) {
    return axios.post("/transaction", newTransaction)
  } 
  deposit = async (newTransaction) => {
    const response = await this.postTransaction(newTransaction)
    this.setState({ transactions: response.data })
  }
  withdraw = async (newTransaction) => {
    const response = await this.postTransaction(newTransaction)
    this.setState({ transactions: response.data })
  }
  getBalance() {
    const transactions = this.state.transactions
    let balance = 0
    for (let i in transactions) {
      balance += transactions[i].amount
    }
    return balance
  }
  render() {
    return (
      <Router>
        <div>
          <div className='balance'>
            {this.getBalance() > 500
              ? <h1 className='balance-plus'>Your Balance is: {this.getBalance()}</h1>
              : <h1 className='balance-minus'>Your Balance is: {this.getBalance()}</h1>}
          </div>
          <br></br>
          <Link to="/operations"><p id="make-a-transaction">Make a Transaction</p></Link>
          <Link to="/transactions"><p id="your-transaction">Your Transactions</p></Link>
          <Link to="/breakdown"><p id="get-breakdown">Get Breakdown</p></Link>

          <Route path="/operations" exact render={() => <Operations deposit={this.deposit} withdraw={this.withdraw} />} />
          <Route path="/transactions" exact render={() => <Transactions deleteTransaction={this.deleteTransaction} transactions={this.state.transactions} />} />
          <Route path="/breakdown" exact render={() => <Breakdown/>} />

        </div>
      </Router>
    )
  }
}

export default App;
