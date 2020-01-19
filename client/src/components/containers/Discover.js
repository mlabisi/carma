import React, {Component} from 'react'
import CarListing from "../presentation/CarListing";
import {connect} from 'react-redux'
import {fetchListings} from "../../actions/actions";

class Discover extends Component {

    componentDidMount() {
        let fakeListings = [
            {
                id: '1',
                title: 'Hyundai Accent',
                teaser: 'Used | 2012 | Torrance, CA'
             },
            {
                id: '2',
                title: 'Tesla Model 3',
                teaser: 'New | 2019 | Chino Hills, CA'
            },
            {
                id: '3',
                title: 'Toyota Corolla',
                teaser: 'Like New | 2018 | Pomona, CA'
            },
            {
                id: '4',
                title: 'Mercedes-Benz C250',
                teaser: 'Used | 2017 | Santa Monica, CA'
            },
            {
                id: '5',
                title: 'Lexus NS230',
                teaser: 'New | 2019 | Glendale, CA'
            }]

        this.props.dispatch(fetchListings(fakeListings))
    }

    render () {
        const listings = this.props.listings.map( (listing, i) => {
            return ( <li key={i}><CarListing data={listing} /></li>)
        })
        return ( <div>
            {(this.props.listings.length > 0) ? <ul>{listings}</ul> : <div> Tinder Cards Will Go Here</div>}
        </div>)
    }
}

const mapStateToProps = state => {
    return {
        listings: state.listings.listings
    }
}
export default connect(mapStateToProps)(Discover)