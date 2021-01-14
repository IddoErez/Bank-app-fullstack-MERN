import React, { Component } from 'react';
class Transaction extends Component {

    deleteTransaction = () => {
        this.props.deleteTransaction(this.props.transaction._id)
    }
    render() {
        let transaction = this.props.transaction
             return (
            <div className="transaction"  >
                <br></br>
                <hr></hr>
                {transaction.amount > 0
                ? <div className='amount-plus'>Amount:{transaction.amount}</div>
                : <div className='amount-minus'>Amount:{transaction.amount}</div>}
                <div className='vendor'>Vendor: {transaction.vendor}</div>
                <div className='category'>Category: {transaction.category}</div>
              <button onClick={this.deleteTransaction}>Delete Transaction</button>
            </div>
        )
    }
}
export default Transaction;
