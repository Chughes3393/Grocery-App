class OnList extends React.Component {
    render() {
        return (
            <li>
                {this.props.groceries.item} // {this.props.groceries.brand}
            </li>
        )
    }
}