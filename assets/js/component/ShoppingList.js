import React from "react";
import {api} from "../services/api";
import CategorizedProductsList from "./views/CategorizedProductsList";
import './ShoppingList.scss'
import SearchOrAddProduct from "./actions/SearchOrAddProduct";

export default class ShoppingList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            products: null
        }

        this.download()

    }

    download() {
        api.getProducts().then((products) =>  {
            this.setState({
                products
            })
        })
    }

    render() {
        return (
            <div className={"card-wrapper"}>
                <div className={"card"}>
                    <SearchOrAddProduct />
                    {this.state.products && <CategorizedProductsList products={this.state.products} />}
                </div>
            </div>
        );
    }
}
