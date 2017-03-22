import React, { Component } from 'react';
import { connect } from 'react-redux'
class User extends Component {

    componentWillReceiveProps(nextProps) {
        console.log("next props: ", nextProps);
    }

    render() {

        // var keysArr = Object.keys(this.props.data); // ["name", "age", "id"]
        // keysArr.map((val, index, arr) => {
        //     var data = this.props.data[val]
        //     console.log("inside map", data);
        // })

        if (!this.props.data) {
            return <h3>No Data</h3>
        } else {
            return (<div>
                <h1>{this.props.data.name}</h1>
                <h1>{this.props.data.age}</h1>
                <h1>{this.props.data.id}</h1>
            </div>)
        }
    }
}


function mapStateToProps(state) {
    return {
        data: state.users
    }
}
export default connect(mapStateToProps)(User);