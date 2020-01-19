import React, {Component} from "react";
import CarListingDetail from "../presentation/CarListingDetail";
import {connect} from 'react-redux'
import {fetchDetails} from "../../actions/actions";

class Listing extends Component {
    componentDidMount() {
        let fakeDetails = {
                id: '1',
                title: 'Hyundai Accent',
                teaser: 'Used | 2012 | Torrance, CA',
                specs: 'KBB/AT Specs',
                sellerId: '1'
            };

        //     [{
        //     id: '1',
        //     title: 'Hyundai Accent',
        //     teaser: 'Used | 2012 | Torrance, CA',
        //     specs: 'KBB/AT Specs',
        //     sellerId: '1'
        // },
        //     {
        //         id: '2',
        //         title: 'Tesla Model 3',
        //         teaser: 'New | 2019 | Chino Hills, CA',
        //         specs: 'KBB/AT Specs',
        //         sellerId: '2'
        //     },
        //     {
        //         id: '3',
        //         title: 'Toyota Corolla',
        //         teaser: 'Like New | 2018 | Pomona, CA',
        //         specs: 'KBB/AT Specs',
        //         sellerId: '3'
        //     },
        //     {
        //         id: '4',
        //         title: 'Mercedes-Benz C250',
        //         teaser: 'Used | 2017 | Santa Monica, CA',
        //         specs: 'KBB/AT Specs',
        //         sellerId: '4'
        //     },
        //     {
        //         id: '5',
        //         title: 'Lexus NS230',
        //         teaser: 'New | 2019 | Glendale, CA',
        //         specs: 'KBB/AT Specs',
        //         sellerId: '5'
        //     }]

        this.props.dispatch(fetchDetails(fakeDetails))
    }

    render() {
        let {details} = this.props;

        return (
            <div>
                <h2>Listing Details</h2>
                <ul>
                    {details ? <CarListingDetail data = {details} /> : "oop"}
                </ul>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        details: state.listings.details
    }
}

export default connect(mapStateToProps)(Listing)