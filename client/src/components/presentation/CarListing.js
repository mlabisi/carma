import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types';

class CarListing extends Component {
    render() {
        return (
            <div>
                <div><Link to={`/profile/${this.props.id}`}><b>{this.props.title}</b></Link></div>
                <div>{this.props.teaser}</div>
            </div>
        )
    }
}

CarListing.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    teaser: PropTypes.string.isRequired
};

export default CarListing