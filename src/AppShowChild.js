import React, { Component } from 'react';
import { connect } from 'react-redux';

class AppShowChild extends Component {
    render() {
        return (
            <div>
                <p>{this.props.accomplishments}</p>
            </div>
        )
    }
} 

function mapStateToProps(state) {
    return {
        accomplishments: state.accomplishments
    }
}

export default connect(mapStateToProps)(AppShowChild);