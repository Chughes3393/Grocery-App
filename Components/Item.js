class Item extends React.Component {

    state = {
        onGroceryList: false
    }
    render() {
        return (
            <li onClick={() => this.props.handleAdd(this.props.groceries)}>
                {this.props.groceries.item} ||
                {this.props.groceries.brand}
                {
                    this.state.OnList
                        ?
                        <span> is on the grocery List!</span>
                        : ''
                }
            </li>
        )
    }
}