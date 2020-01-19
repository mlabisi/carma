import React, {Component} from 'react'
import ProfileDetails from "../presentation/ProfileDetails";
import {connect} from 'react-redux'
import {fetchProfile} from "../../actions/actions"

class Profile extends Component {
    componentDidMount() {
        this.props.dispatch(fetchProfile(this.props.match.params.id))
    }

    render () {
        return (
            <div>
               <h2>Seller Profile</h2>
                <ul>
                   <div><ProfileDetails profile = {this.props.profile} /></div>
                </ul>
        </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        profile: state.store.profile
    }
};

export default connect(mapStateToProps)(Profile)