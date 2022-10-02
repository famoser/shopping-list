import React from "react";
import ProductsList from "./ProductsList";
import { withTranslation } from 'react-i18next';

class CategorizedProductsList extends React.Component {
    constructor(props) {
        super(props);
    }

    productsOfCategory(category) {
        return this.props.products
            .filter(p => p.category === category)
    }

    categoryToTranslationSuffix(category) {
        switch (category) {
            case 1:
                return "fruit_vegetables";
            case 2:
                return "dairy_products_eggs";
            case 3:
                return "bread_backed_goods"
            case 4:
                return "inventories"
            case 5:
                return "frozen_food_ready_made_meals"
            case 6:
                return "drinks"
            case 7:
                return "household"
            case 8:
                return "meat_fish"
            case 9:
                return "snacks"
            default:
                return "other"
        }
    }

    translateCategory(category) {
        return this.props.t("products.categories." + this.categoryToTranslationSuffix(category))
    }

    render() {
        const allCategories = [1, 2, 8, 3, 4, 5, 9, 6, 7, 8]
        const categoriesWithProducts = allCategories.filter(category => this.props.products.filter(p => p.category === category).length > 0)

        return categoriesWithProducts.map((category) =>
            <div key={category}>
                <h3 className={"mt-4"}>{this.translateCategory(category)}</h3>
                <ProductsList onProductChange={this.props.onProductChange} products={this.productsOfCategory(category)} />
            </div>
        );
    }
}

export default withTranslation()(CategorizedProductsList)
