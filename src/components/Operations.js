import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Operations extends Component {
    constructor() {
        super()
        this.state = {
            amount: "", vendor: "", category: ""
        }
    }
    handelInput = event => {
        this.setState({ [event.target.name]: event.target.value })
    }
    addTrans = type => () => {
        if(type === 'deposit'){
            const { amount, vendor, category } = this.state
            this.props.deposit({ amount: 1 * (amount), vendor: vendor.toLowerCase(), category: category.toLowerCase() })
        } else {
            const { amount, vendor, category } = this.state
            this.props.withdraw({ amount: -1 * (amount), vendor: vendor.toLowerCase(), category: category.toLowerCase() })
        }
    }
    render() {
        return (
            <div id="operations">
                <div id="make-a-transaction-headline">Make a transaction:</div>
                <input id="amount-input" type="text" placeholder="Enter an amount" onChange={this.handelInput} name="amount" value={this.state.amount} />
                <input id="vendor-input" type="text" placeholder="Enter a vendor" onChange={this.handelInput} name="vendor" value={this.state.vendor} />
                <input id="category-input" type="text" placeholder="Enter a category" onChange={this.handelInput} name="category" value={this.state.category} />
              <Link to="/transactions"><button name='deposit' onClick={this.addTrans('deposit')}>Deposit</button></Link>
              <Link to="/transactions"><button onClick={this.addTrans('withdraw')}>Withdraw</button></Link>
            </div>
        )
    }
}

export default Operations