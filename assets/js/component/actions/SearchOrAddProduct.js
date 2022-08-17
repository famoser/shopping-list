import React from "react";
import {withTranslation} from "react-i18next";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

class CheckProduct extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ""
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        let value = event.target.value;
        this.setState({value, disabled: true});
    }

    render() {
        return (
            <div className="input-group mb-2">
                <input type="text" value={this.state.search} onChange={this.handleChange} className="form-control" placeholder={this.props.t('products.search')} />
                <label className="btn btn-outline-secondary ms-4">
                    <input type="checkbox" autoComplete="off" true-value="true" className="d-none" />
                    <FontAwesomeIcon icon={["fal", "shopping-bag"]} />
                </label>
            </div>
        );
    }
}

export default withTranslation()(CheckProduct)
