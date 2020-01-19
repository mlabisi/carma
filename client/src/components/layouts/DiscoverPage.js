import React, {Component} from 'react';
import Discover from "../containers/Discover"
import {connect} from "react-redux";
import {fetchCurrentId} from "../../actions/actions";

class DiscoverPage extends Component {
    componentDidMount() {
        this.props.dispatch(fetchCurrentId());
    }

    render() {
        return (
            <div>
                <div> <h1>Your Personal Marketplace</h1> </div>
                <div>
                    <Discover me={this.props.me}/>
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

export default connect(mapStateToProps)(DiscoverPage);