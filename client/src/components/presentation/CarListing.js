import React, {Component} from 'react';
import PropTypes from 'prop-types';

class CarListing extends Component {
    render() {
        return (
            <div>
                <div><b>{this.props.title}</b></div>
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