import actionTypes from "../constants/actionTypes";

function listingAdded(listing) {
    return {
        type: actionTypes.LISTING_ADDED,
        listing: listing
    }
}

function detailsReceived(details) {
    return {
        type: actionTypes.DETAILS_RECEIVED,
        details: details
    }
}

export function fetchListings(fakeListing) {
    return dispatch => {
        dispatch(listingAdded(fakeListing));
    }
}

export function fetchDetails(fakeDetails) {
    return dispatch => {
        dispatch(detailsReceived(fakeDetails))
    }
}