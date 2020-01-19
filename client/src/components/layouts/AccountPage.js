import React, {Component} from 'react';
import Account from "../containers/Account"
import {fetchCurrentId} from "../../actions/actions";
import {connect} from "react-redux";

class AccountPage extends Component {
    componentDidMount() {
        this.props.dispatch(fetchCurrentId())
    }

    render() {
        return (
            <div>
                <div> <h1>My Account</h1> </div>
                <div>
                    <Account me={this.props.me}/>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        me: state.store.me
    }
};

export default connect(mapStateToProps)(AccountPage);