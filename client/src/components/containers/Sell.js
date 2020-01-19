import React, {Component} from 'react'
import CarListing from "../presentation/CarListing";
import {connect} from 'react-redux'

class Sell extends Component {
    render () {
        const listings = this.props.listings.map( (listing, i) => {
            return ( <li key={i}><CarListing data={listing} /></li>)
        })
        return ( <div>
             <div> Sorry! Looks you haven't made any listings yet.</div>
            <div>List A Vehicle (make this a tooltip button)</div>
        </div>)
    }
}

const mapStateToProps = state => {
    return {
        listings: state.store.listings
    }
}
export default connect(mapStateToProps)(Sell)