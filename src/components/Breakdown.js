import React, { Component } from 'react';
const axios = require('axios')

class Breakdown extends Component {
    constructor() {
        super()
        this.state = {
            categories: []
        }
    }
    async componentDidMount() {
        const categories = await this.getCategories()
        console.log(categories.data)
        this.setState({ categories: categories.data })
    }
    getCategories = async () => {
        const response = await axios.get("/breakdown")
        return response
    }
    render() {
        const categories = this.state.categories
         return (
            <div id="categories">
                {categories.map(c =>
                    <div><span>Category: {c._id}</span>,   <span>Sum :{c.totalAmount}</span></div>
                )}

            </div>
        )
    }
}
export default Breakdown;
