import React from "react";
import {api} from "../../services/api";
import CategorizedProductsList from "../views/CategorizedProductsList";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import AddProduct from "./AddProduct";
import {withTranslation} from "react-i18next";

class FilterProducts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            editMode: false
        }

        this.handleSearchChange = this.handleSearchChange.bind(this);
        this.handleShoppingModeChange = this.handleShoppingModeChange.bind(this);
        this.handleProductAdd = this.handleProductAdd.bind(this);
        this.handleProductAddAbort = this.handleProductAddAbort.bind(this);
        this.handleEditClick = this.handleEditClick.bind(this);
    }

    handleSearchChange(event) {
        this.props.onSearchChange(event.target.value)
    }

    handleShoppingModeChange(event) {
        this.props.onShoppingModeChange(event.target.checked)
    }

    handleProductAdd(product) {
        this.setState({
            editMode: false
        })
        this.props.onProductAdd(product)
    }

    handleProductAddAbort() {
        this.setState({
            editMode: false
        })
    }

    handleEditClick() {
        this.setState({editMode: true})
    }

    render() {
        return (
            <>
                <div className="input-group mb-2">
                    <input name="search" type="text" value={this.props.search} onChange={this.handleSearchChange}
                           className="form-control" placeholder={this.props.t('products.search')}/>
                    <button className={"btn btn-outline-secondary " + (!this.props.search && "d-none")}
                            onClick={this.handleEditClick}>
                        <FontAwesomeIcon icon={["fal", "plus"]}/>
                    </button>
                    <label
                        className={"btn ms-4 " + (this.props.shoppingMode ? "btn-secondary" : "btn-outline-secondary")}>
                        <input name="shoppingMode" type="checkbox" checked={this.props.shoppingMode}
                               onChange={this.handleShoppingModeChange} className="d-none"/>
                        <FontAwesomeIcon icon={["fal", "shopping-bag"]}/>
                    </label>
                </div>

                {this.state.editMode > 0 &&
                    <AddProduct onProductAdd={this.handleProductAdd} onDismissed={this.handleProductAddAbort}
                                name={this.props.search}/>
                }
            </>
        );
    }
}

export default withTranslation()(FilterProducts)
