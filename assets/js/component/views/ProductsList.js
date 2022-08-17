import React from "react";
import {CheckProduct} from "../actions/CheckProduct";
import './ProductsList.scss'

export default class ProductsList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const products = this.props.products.map((product) =>
            <CheckProduct key={product["@id"]} product={product} />
        );
        return (
            <ul className={"product-list"}>{products}</ul>
        );
    }
}
