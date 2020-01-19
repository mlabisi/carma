import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types';

class CarListing extends Component {
    render() {
        return (
            <div>
                <h4> <Link to={`/listing/${this.props.data.id}`}>{this.props.data.title}</Link></h4>
                <div>{this.props.data.teaser}</div>
            </div>
        )
    }
}

CarListing.propTypes = {
    data: PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        teaser: PropTypes.string.isRequired
    })
};

export default CarListing