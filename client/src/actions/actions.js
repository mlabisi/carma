import actionTypes from "../constants/actionTypes";

function listingReceived(listing) {
    return {
        type: actionTypes.LISTING_RECEIVED,
        listing: listing
    }
}

function detailsReceived(details) {
    return {
        type: actionTypes.DETAILS_RECEIVED,
        details: details
    }
}

function profileReceived(profile) {
    return {
        type: actionTypes.PROFILE_RECEIVED,
        profile: profile
    }
}

function detailsLoading() {
    return {
        type: actionTypes.DETAILS_LOADING
    }
}

export function fetchListings() {
    return dispatch => {
        return fetch(`/listings`)
            .then( (response) => response.json() )
            .then( (data) => dispatch(listingReceived(data.data)))
            .catch( (e) => console.log(e));
    }
}

export function fetchDetails(id) {
    return dispatch => {
        return fetch(`/listings/${id}`)
            .then((response)=> response.json())
            .then((data)=> dispatch(detailsReceived(data.data)))
            .catch((e) => console.log(e));
    }
}

export function fetchProfile(id) {
    return dispatch => {
        return fetch(`/profile/${id}`)
            .then((response)=> response.json())
            .then((data)=> dispatch(profileReceived(data.data)))
            .catch((e) => console.log(e));
    }
}