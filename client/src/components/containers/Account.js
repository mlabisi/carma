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
            <img src={"https://render.bitstrips.com/v2/cpanel/1547fdf4-2759-4056-a006-1e77ad12e568-9da27b08-ce33-4315-8735-f05220d96544-v1.png?transparent=1&palette=1"}/>
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