import React, {Component} from 'react';
import PropTypes from 'prop-types'
import {fetchProfileDetails} from "../../actions/actions";

class ProfileDetails extends Component {
    render(){
        return (
            <div>
                <h2>{this.props.profile.name}</h2>
                <img src={this.props.profile.pic}/>
                <div>{this.props.profile.rating}</div>
                <div>{this.props.profile.specs}</div>
            </div>
        )
    }
}

ProfileDetails.propTypes = {
    profile: PropTypes.shape({
        sellerId: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        pic: PropTypes.string.isRequired,
        rating: PropTypes.string.isRequired,
        specs: PropTypes.string.isRequired
    })
};

export default ProfileDetails