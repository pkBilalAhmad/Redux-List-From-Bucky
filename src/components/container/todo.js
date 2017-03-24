import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { todoAction } from '../../store/actions/add-todo'

class Todo extends Component {
    submit(e) {
        e.preventDefault();
        var input = this.refs.input;
        // console.log(input.value)
        this.props.todoAction(input.value)
        input.value = ''
    }
    render() {
        return (
            <div>
                <form action=""
                    onSubmit={this.submit.bind(this)}>
                    <input type="text" ref='input' />
                    <button type="submit">Add name</button>
                </form>
                <ol>
                    {
                        this.props.data.map((data, index)=>(
                            <li key={index}>
                                {data}
                            </li>
                        ))
                    }
                </ol>
            </div>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ todoAction: todoAction }, dispatch)
}
function mapStateToProps(state) {
    return {
        data: state.todo
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Todo);