import React, { Component } from 'react';
import Transaction from "./Transaction";

class Transactions extends Component {
    render() {
        return (
            <div id="transactions">
                <div id="transaction-headline">Your Transactions:</div>
                {this.props.transactions.map(t =>
                <Transaction className="transaction"
                 deleteTransaction={this.props.deleteTransaction} transaction={t} key={t._id} />)}
            </div>

        )
    }
}

export default Transactions;

