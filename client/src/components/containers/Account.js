import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import CarListing from "../presentation/CarListing";
import {connect} from 'react-redux'
import Likes from "./Likes";

class Account extends Component {
    render () {
        const listings = this.props.listings.map( (listing, i) => {
            return ( <li key={i}><CarListing data={listing} /></li>)
        })
        return ( <div>
            <h2>Mora Labisi</h2>
            <img src={""}/>
            <div><Link to={'/preferences'}>Preferences</Link></div>
            <Likes/>
        </div>)
    }
}

const mapStateToProps = state => {
    return {
        listings: state.store.listings
    }
}
export default connect(mapStateToProps)(Account)