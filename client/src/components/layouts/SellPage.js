import React, {Component} from 'react';
import Sell from "../containers/Sell"
import {connect} from "react-redux";
import {fetchCurrentId} from "../../actions/actions";

class SellPage extends Component {
    componentDidMount() {
        this.props.dispatch(fetchCurrentId());
    }

    render() {
        return (
            <div>
                <div> <h1>My Listings</h1> </div>
                <div>
                    <Sell me={this.props.me}/>
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

export default connect(mapStateToProps) (SellPage);