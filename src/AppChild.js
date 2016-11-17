import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { updateItem } from './actions';

class AppChild extends Component {
    render() {
        let randChange = 'Changed: ' + Math.floor(Math.random() * 1000);
        return (
            <div>
                <p>{this.props.text}</p>
                <button onClick={this.props.updateItem.bind(null, randChange)}>Change</button>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        text: state.text
    }
}

function mapActionsToProps(dispatch) {
    return bindActionCreators({ updateItem }, dispatch);
}

export default connect(mapStateToProps, mapActionsToProps)(AppChild);