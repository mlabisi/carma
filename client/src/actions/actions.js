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

function saleItemsReceived(items) {
    return {
        type: actionTypes.SALE_ITEMS_RECEIVED,
        items: items
    }
}

function likeReceived(like) {
    return {
        type: actionTypes.LIKES_RECEIVED,
        like: like
    }
}

function loggedIn() {
    return {
        type: actionTypes.LOGGED_IN,
        me: '4'
    }
}

function detailsLoading() {
    return {
        type: actionTypes.DETAILS_LOADING
    }
}

export function fetchListings(id) {
    return dispatch => {
        return fetch(`/listings/all/${id}`)
            .then( (response) => response.json() )
            .then( (data) => dispatch(listingReceived(data.data)))
            .catch( (e) => console.log(e));
    }
}

export function fetchForSale(sellerId) {
    return dispatch => {
        return fetch(`/sell/${sellerId}`)
            .then( (response) => response.json() )
            .then( (data) => dispatch(saleItemsReceived(data.data)))
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

export function fetchLikes(id) {
    return dispatch => {
        return fetch(`/likes/${id}`)
            .then((response)=> response.json())
            .then((data)=> dispatch(likeReceived(data.data)))
            .catch((e) => console.log(e));
    }
}

export function fetchCurrentId() {
    return dispatch => {
            dispatch(loggedIn())
    }
}