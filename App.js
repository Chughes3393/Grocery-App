class App extends React.Component {

    state = {
        groceries: groceries,
        item: '',
        brand: '',
        units: '',
        quantity: 0,
        cartItems: [],
        isPurchased: false
    }

    addToCart = item => {
        // console.log('We are inside addToCart function', item)
        this.setState({
            cartItems: [item, ...this.state.cartItems]
        })
    }

    handleChange = (event) => {

        this.setState({
            [event.target.id]: event.target.value,

        })
    }

    handleSubmit = e => {
        e.preventDefault()
        const newItem = {
            item: this.state.item,
            brand: this.state.brand,
            units: this.state.units,
            quantity: this.state.quantity,
        }

        console.log(newItem)

        this.setState({
            groceries: [newItem, ...this.state.groceries],
            item: '',
            brand: '',
            units: '',
            quantity: 0,

        })
    }

    render() {

        return (
            <div>
                <h1>Grocery List</h1>

                <div id='create-product'>
                    <form id="form" onSubmit={this.handleSubmit}>

                        <label htmlFor='item'>Add Item:</label>
                        <input id='item' type='text' value={this.state.item} onChange={this.handleChange} />

                        <label htmlFor='brand'>Brand:</label>
                        <input id='brand' type='text' value={this.state.brand} onChange={this.handleChange} />

                        <label htmlFor='units'>Units:</label>
                        <input id='units' type='text' value={this.state.units} onChange={this.handleChange} />

                        <label htmlFor='quantity'>Quantity:</label>
                        <input id='quantity' type='number' value={this.state.quantity} onChange={this.handleChange} />

                        <input type='submit' />
                    </form>
                    <div className='new_item'>

                        <h2>New Grocery Item:</h2>
                        <h3>{this.state.item}</h3>
                        <h4>{this.state.brand}</h4>
                        <h5>{this.state.units}</h5>
                        <h5>{this.state.quantity}</h5>

                    </div>

                    <div className='products'>
                        <h3>Usual Suspects:</h3>
                        <ul>
                            {
                                this.state.groceries.map(item => {
                                    return (
                                        <Item
                                            groceries = {item}
                                            handleAdd ={ this.addToCart}
                                        />
                                    )
                                })
                            }
                        </ul>
                    </div>

                    <div className='cart'>
                        <h3>THE LIST:</h3>
                        <ul>
                            {
                                this.state.cartItems.map(item => {
                                    return (
                                        <OnList groceries={item} />
                                    )
                                })
                            }
                        </ul>
                    </div>
                    <div className='full_list'>
                        <h3>Full Pantry Item List:</h3>

                        {

                            this.state.groceries.map(item => {
                                return (
                                    <div>
                                        <ul>
                                            <h3>{item.item}</h3>
                                            <li>{item.brand}</li>
                                            <li>{item.units}</li>
                                            <li>{item.quantity}</li>

                                        </ul>

                                    </div>


                                )
                            })


                        }

                    </div>
                </div>

            </div>

        )
    }
}


ReactDOM.render(
    <App />,
    document.querySelector('#container')
)