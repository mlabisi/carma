import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import CarListing from "../presentation/CarListing";
import {connect} from 'react-redux'
import Likes from "./Likes";
import {fetchProfile} from "../../actions/actions";
import ProfileDetails from "../presentation/ProfileDetails";

class Account extends Component {
    componentDidMount() {
        this.props.dispatch(fetchProfile(this.props.me))
    }

    render() {
        return (
            <div>
                <div><ProfileDetails profile={this.props.profile}/></div>
                <div><Link to={'/preferences'}>Preferences</Link></div>
                <h2>My Likes</h2>
                <Likes me={this.props.me}/>
            </div>)
    }
}

const mapStateToProps = state => {
    return {
        profile: state.store.profile
    }
};

export default connect(mapStateToProps)(Account)