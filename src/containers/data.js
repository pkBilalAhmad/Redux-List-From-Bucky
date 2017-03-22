import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import action from '../actions/action'
class Data extends Component {
    render() {
        return (
            <div>
                <ol>
                    {
                        this.props.data.map((i) => (
                            <li key={i.id} onClick={
                                ()=> this.props.action(i)
                            }>
                                {i.name}
                            </li>
                        ))
                    }
                </ol>
            </div>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ action: action }, dispatch)
}

function mapStateToProps(state) {
    return {
        data: state.data
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Data);