import React, { Component } from 'react';
import { connect } from 'react-redux';

class AppShowChild extends Component {
    render() {
        return (
            <div>
                <p>{this.props.text}</p>
            </div>
        )
    }
} 

function mapStateToProps(state) {
    return {
        text: state.text
    }
}

export default connect(mapStateToProps)(AppShowChild);