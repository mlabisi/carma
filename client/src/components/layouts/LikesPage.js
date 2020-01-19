import React, {Component} from "react"
import Likes from "../containers/Likes";
import {connect} from "react-redux";
import {fetchCurrentId} from "../../actions/actions";

class LikesPage extends Component {
    componentDidMount() {
        this.props.dispatch(fetchCurrentId());
    }

    render() {
        return (
            <div>
                <h1>My Likes</h1>
                <div>
                    <Likes me={this.props.me}/>
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

export default connect(mapStateToProps)(LikesPage)