import React from "react";
import {withTranslation} from "react-i18next";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Modal from "../library/Modal";
import {api} from "../../services/api";

class AddProduct extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            category: 1,
            name: props.name
        }

        this.handleModalDismissed = this.handleModalDismissed.bind(this);
        this.handleModalSaved = this.handleModalSaved.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleModalDismissed() {
        this.props.onDismissed()
    }

    handleModalSaved() {
        const product = {name: this.state.name, category: Number(this.state.category), active: true}
        api.postProduct(product).then(product => {
            this.props.onProductAdd(product)
        })
    }

    handleInputChange(event) {
        const target = event.target;
        this.setState({
            [target.name]: target.value
        });
    }

    render() {
        return (
            <Modal onDismissed={this.handleModalDismissed} onSaved={this.handleModalSaved} title={this.props.t('products.add')}>
                <input name="name" type="text" value={this.state.name} onChange={this.handleInputChange} className="form-control" />
                <select className="form-select mt-2" name="category" value={this.state.category} onChange={this.handleInputChange}>
                    <option value="1">{this.props.t('products.categories.fruit_vegetables')}</option>
                    <option value="2">{this.props.t('products.categories.dairy_products_eggs')}</option>
                    <option value="3">{this.props.t('products.categories.bread_backed_goods')}</option>
                    <option value="4">{this.props.t('products.categories.inventories')}</option>
                    <option value="5">{this.props.t('products.categories.frozen_food_ready_made_meals')}</option>
                    <option value="6">{this.props.t('products.categories.drinks')}</option>
                    <option value="7">{this.props.t('products.categories.household')}</option>
                </select>
            </Modal>
        );
    }
}

export default withTranslation()(AddProduct)
