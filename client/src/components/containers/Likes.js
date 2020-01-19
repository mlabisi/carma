import React, {Component} from 'react'
import CarListing from "../presentation/CarListing";
import {connect} from 'react-redux'

class Likes extends Component {
    render () {
        const listings = this.props.listings.map( (listing, i) => {
            return ( <li key={i}><CarListing data={listing} /></li>)
        })
        return ( <div>
            <h2>Vehicles You've Liked</h2>
                <div> You haven't liked any vehicles yet!</div>
        </div>)
    }
}

const mapStateToProps = state => {
    return {
        listings: state.store.listings
    }
}
export default connect(mapStateToProps)(Likes)