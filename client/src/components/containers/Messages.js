import React, {Component} from 'react'
import CarListing from "../presentation/CarListing";
import {connect} from 'react-redux'

class Messages extends Component {
    render () {
        const listings = this.props.listings.map( (listing, i) => {
            return ( <li key={i}><CarListing data={listing} /></li>)
        })
        return ( <div>
                 <div> You haven't started any conversations yet!</div>
        </div>)
    }
}

const mapStateToProps = state => {
    return {
        listings: state.listings.listings
    }
}
export default connect(mapStateToProps)(Messages)