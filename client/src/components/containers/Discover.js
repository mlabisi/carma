import React, {Component} from 'react'
import CarListing from "../presentation/CarListing";
import {connect} from 'react-redux'
import {fetchListings} from "../../actions/actions";

class Discover extends Component {

    componentDidMount() {
        this.props.dispatch(fetchListings(this.props.me));
    }

    render () {
        const listings = this.props.listings.map( (listing, i) => {
            return ( <li key={i}><CarListing data={listing} /></li>)
        });
        return ( <div>
            {(this.props.listings.length > 0) ? <ul>{listings}</ul> : <div> Tinder Cards Will Go Here</div>}
        </div>)
    }
}

const mapStateToProps = state => {
    return {
        listings: state.store.listings
    }
};

export default connect(mapStateToProps)(Discover)