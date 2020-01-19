import React, {Component} from 'react'
import CarListing from "../presentation/CarListing";
import {connect} from 'react-redux'

class Sell extends Component {
    render () {
        const listings = this.props.listings.map( (listing, i) => {
            return ( <li key={i}><CarListing data={listing} /></li>)
        })
        return ( <div>
            {(this.props.listings.length > 0) ? <ul>{listings}</ul> : <div> Sorry! Looks like there are no listings right now.</div>}
            <div>List A Vehicle (make this a tooltip button)</div>
        </div>)
    }
}

const mapStateToProps = state => {
    return {
        listings: state.listings.listings
    }
}
export default connect(mapStateToProps)(Sell)