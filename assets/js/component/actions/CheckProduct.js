import React from "react";
import {api} from "../../services/api";

export class CheckProduct extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: props.product.active,
            disabled: false
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        let value = event.target.checked;
        this.setState({value, disabled: true});
        api.patch(this.props.product, {active: value}).then(() => {
            this.setState({disabled: false})
        })
    }

    render() {
        return (
            <div className="form-check">
                <input className="form-check-input" type="checkbox" disabled={this.state.disabled} checked={this.state.value} onChange={this.handleChange} id={this.props.product["@id"]} />
                <label className="form-check-label" htmlFor={this.props.product["@id"]}>
                    {this.props.product.name}
                </label>
            </div>
        );
    }
}
