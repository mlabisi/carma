import React, {Component} from 'react';
import PropTypes from 'prop-types'
import {fetchDetails} from "../../actions/actions";
import {Link} from "react-router-dom";

class CarListingDetail extends Component {
    render(){
        return (
            <div>
                <h2>{this.props.data.title}</h2>
                <p>{this.props.data.teaser}</p>
                <p>{this.props.data.specs}</p>
                <p>Listing Details (Make, Model, Mileage, KBB/AT Info)</p>
                <p><Link to={`/profile/${this.props.data.sellerId}`}>Seller's Profile</Link></p>
            </div>
        )
    }
}

CarListingDetail.propTypes = {
    data: PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        teaser: PropTypes.string.isRequired,
        specs: PropTypes.string.isRequired,
        sellerId: PropTypes.string.isRequired
    })
}

export default CarListingDetail