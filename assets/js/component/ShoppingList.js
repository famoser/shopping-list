import React from "react";
import {api} from "../services/api";
import CategorizedProductsList from "./views/CategorizedProductsList";
import './ShoppingList.scss'
import {withTranslation} from "react-i18next";
import FilterProducts from "./actions/FilterProducts";

class ShoppingList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            products: null,
            search: "",
            shoppingMode: false
        }

        this.download()

        this.handleProductAdd = this.handleProductAdd.bind(this);
        this.handleSearchChange = this.handleSearchChange.bind(this);
        this.handleShoppingModeChange = this.handleShoppingModeChange.bind(this);
        this.handleProductChange = this.handleProductChange.bind(this);
    }

    handleSearchChange(value) {
        this.setState({
            search: value
        })
    }

    handleShoppingModeChange(value) {
        this.setState({
            shoppingMode: value
        })
    }

    download() {
        api.getProducts().then((products) => {
            this.setState({
                products
            })
        })
    }

    filteredProducts() {
        let filteredProducts = this.state.products

        if (this.state.search) {
            let lowercaseSearch = this.state.search.toLowerCase();
            filteredProducts = filteredProducts.filter(p => p.name.toLowerCase().includes(lowercaseSearch))
        }

        if (this.state.shoppingMode) {
            filteredProducts = filteredProducts.filter(p => p.active)
        }

        return filteredProducts
    }

    handleProductAdd(product) {
        this.setState((state) => {
            const newProducts = [...state.products]
            newProducts.push(product)
            return {
                products: newProducts,
                search: ""
            }
        })
    }

    handleProductChange(newProduct) {
        this.setState((state) => {
            const product = state.products.find(p => p['@id'] === newProduct['@id'])
            product.active = newProduct.active
            return {
                products: state.products
            }
        })

    }

    renderProducts() {
        // not finished loading yet
        if (!this.state.products) {
            return false;
        }

        const filteredProducts = this.filteredProducts()
        if (filteredProducts.length > 0) {
            return <CategorizedProductsList products={filteredProducts} onProductChange={this.handleProductChange}/>
        }

        if (this.state.shoppingMode && !this.state.search) {
            return <p>{this.props.t('products.shopping_successful')}</p>
        } else {
            return <p>{this.props.t('products.no_products')}</p>
        }
    }

    render() {
        return (
            <div className={"card-wrapper"}>
                <div className={"card"}>
                    <FilterProducts search={this.state.search} shoppingMode={this.state.shoppingMode}
                                    onProductAdd={this.handleProductAdd} onSearchChange={this.handleSearchChange}
                                    onShoppingModeChange={this.handleShoppingModeChange}/>

                    {this.renderProducts()}
                </div>
            </div>
        );
    }
}

export default withTranslation()(ShoppingList)
