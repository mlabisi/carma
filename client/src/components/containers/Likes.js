import React, {Component} from 'react'
import CarListing from "../presentation/CarListing";
import {fetchLikes, fetchListings} from "../../actions/actions";
import {connect} from "react-redux";

class Likes extends Component {
    componentDidMount() {
        this.props.dispatch(fetchLikes(this.props.me));
        this.props.dispatch(fetchListings(this.props.me));
    }

    render() {
        const likes = this.props.likes.map(like => {
            return this.props.listings
                .filter(listing => (listing.id === like.listingId))
                .map((listing, i) => {
                    return (<li key={i}><CarListing data={listing}/></li>)
                });
        })
        return (
            <div>
                {(this.props.listings.length > 0) ? <ul>{likes}</ul> : <div> Mini Cards Will Go Here</div>}
            </div>)
    }
}

const mapStateToProps = state => {
    return {
        likes: state.store.likes,
        listings: state.store.listings
    }
};

export default connect(mapStateToProps)(Likes)