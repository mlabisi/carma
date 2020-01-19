import React, {Component} from 'react'
import CarListing from "../presentation/CarListing";
import {connect} from 'react-redux'
import {fetchForSale} from "../../actions/actions";

class Sell extends Component {
    componentDidMount() {
        this.props.dispatch(fetchForSale(this.props.me));
    }

    render() {
        const saleItems = this.props.saleItems.map( (listing, i) => {
            return ( <li key={i}><CarListing data={listing} /></li>)
        });

        return (
            <div>
                {this.props.saleItems.length > 0 ? <ul>{saleItems}</ul> : <div> Sorry! Looks you haven't made any listings yet.</div>}
                <div>Sync Listings w/ KBB/AT (make this a tooltip button)</div>
            </div>)
    }
}

const mapStateToProps = state => {
    return {
        saleItems: state.store.saleItems,
        me: state.store.me
    }
}
export default connect(mapStateToProps)(Sell)