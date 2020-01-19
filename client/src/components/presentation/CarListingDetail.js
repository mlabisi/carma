import React, {Component} from 'react';
import PropTypes from 'prop-types'
import {fetchDetails} from "../../actions/actions";
import {Link} from "react-router-dom";

class CarListingDetail extends Component {
    render(){
        return (
            <div>
                <h2>{this.props.details.title}</h2>
                <p>{this.props.details.teaser}</p>
                <p>{this.props.details.specs}</p>
                <p><Link to={`/profile/${this.props.details.sellerId}`}>Seller's Profile</Link></p>
            </div>
        )
    }
}

CarListingDetail.propTypes = {
    details: PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        teaser: PropTypes.string.isRequired,
        specs: PropTypes.string.isRequired,
        sellerId: PropTypes.string.isRequired
    })
}

export default CarListingDetail