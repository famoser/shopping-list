import React from "react";
import {api} from "../services/api";
import CategorizedProductsList from "./views/CategorizedProductsList";
import './ShoppingList.scss'
import SearchOrAddProduct from "./actions/SearchOrAddProduct";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {withTranslation} from "react-i18next";

class ShoppingList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            products: null,
            search: "",
            shoppingMode: false
        }

        this.download()

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleProductAdd = this.handleProductAdd.bind(this);
        this.handleProductChange = this.handleProductChange.bind(this);
    }

    download() {
        api.getProducts().then((products) =>  {
            this.setState({
                products
            })
        })
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState({
            [name]: value
        });
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
            return {
                products: [...state.products].push(product)
            }
        })
    }

    handleProductChange(newProduct) {
        this.setState((state) => {
            const product = state.products.find(p => p['@id'] === newProduct['@id'])
            console.log(product)
            product.active = newProduct.active
            console.log(product)
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
            return <CategorizedProductsList products={filteredProducts} onProductChange={this.handleProductChange} />
        }

        if (this.state.shoppingMode) {
            return <p>{t('products.shopping_successful')}</p>
        } else {
            return <p>{t('products.no_products')}</p>
        }
    }

    render() {
        return (
            <div className={"card-wrapper"}>
                <div className={"card"}>
                    <div className="input-group mb-2">
                        <input name="search" type="text" value={this.state.search} onChange={this.handleInputChange} className="form-control" placeholder={this.props.t('products.search')} />
                        <label className={"btn ms-4 " + (this.state.shoppingMode ? "btn-secondary" : "btn-outline-secondary")}>
                            <input name="shoppingMode"  type="checkbox" checked={this.state.shoppingMode} onChange={this.handleInputChange} className="d-none" />
                            <FontAwesomeIcon icon={["fal", "shopping-bag"]} />
                        </label>
                    </div>

                    {this.renderProducts()}
                </div>
            </div>
        );
    }
}

export default withTranslation()(ShoppingList)
