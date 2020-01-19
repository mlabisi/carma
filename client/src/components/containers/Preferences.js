import React, {Component} from 'react'
import CarListing from "../presentation/CarListing";
import {connect} from 'react-redux'

class Preferences extends Component {
    render() {
        const listings = this.props.listings.map((listing, i) => {
            return (<li key={i}><CarListing data={listing}/></li>)
        })
        return (<div>
            <div> Preferences Form</div>
            <div>Edit (tooltip)</div>
        </div>)
    }
}

const mapStateToProps = state => {
    return {
        listings: state.store.listings
    }
}
export default connect(mapStateToProps)(Preferences)