import React from "react";
import {withTranslation} from "react-i18next";

class Modal extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <div className={"modal show d-block"} tabIndex="-1">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">{this.props.title}</h5>
                                <button type="button" className="btn-close" aria-label="Close"
                                        onClick={this.props.onDismissed}></button>
                            </div>
                            <div className="modal-body">
                                {this.props.children}
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary"
                                        onClick={this.props.onDismissed}>{this.props.t('modal.cancel')}</button>
                                <button type="button" className="btn btn-primary"
                                        onClick={this.props.onSaved}>{this.props.t('modal.save')}</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="modal-backdrop show"></div>
            </>
        );
    }
}


export default withTranslation()(Modal)
