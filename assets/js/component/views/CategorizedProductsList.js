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
                return "drinks";
            case 7:
                return "household"
            default:
                return "other"
        }
    }

    translateCategory(category) {
        return this.props.t("products.categories." + this.categoryToTranslationSuffix(category))
    }

    render() {
        const unique = (arr) => [...new Set(arr)];
        const categoriesWithProducts = unique(this.props.products.map(p => p.category))
        categoriesWithProducts.sort()

        return categoriesWithProducts.map((category) =>
            <div key={category}>
                <h3 className={"mt-4"}>{this.translateCategory(category)}</h3>
                <ProductsList onProductChange={this.props.onProductChange} products={this.productsOfCategory(category)} />
            </div>
        );
    }
}

export default withTranslation()(CategorizedProductsList)
