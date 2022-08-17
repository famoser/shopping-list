import React from "react";
import {CheckProduct} from "../actions/CheckProduct";
import './ProductsList.scss'

export default class ProductsList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const sortedProducts = this.props.products.sort((a,b) => a.name.localeCompare(b.name))
        const products = sortedProducts.map((product) =>
            <CheckProduct onProductChange={this.props.onProductChange} key={product["@id"]} product={product} />
        );
        return (
            <ul className={"product-list"}>{products}</ul>
        );
    }
}
