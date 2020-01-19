import React, {Component} from 'react';
import {Route, BrowserRouter } from 'react-router-dom'
import {Provider} from 'react-redux'
import './App.css';
import store from './store/store'

import AccountPage from './components/layouts/AccountPage';
import DiscoverPage from './components/layouts/DiscoverPage';
import LikesPage from "./components/layouts/LikesPage";
import Listing from "./components/containers/Listing";
import Profile from "./components/containers/Profile";
import SellPage from "./components/layouts/SellPage";
import PreferencesPage from "./components/layouts/PreferencesPage";
import Nav from "./components/layouts/Nav";

class App extends Component {
  render() {
    return (
        <Provider store={store}>
        <BrowserRouter>
          <Nav>
            <Route exact path='/' component={DiscoverPage} />
            <Route path='/likes' component={LikesPage} />
            <Route path='/sell' component={SellPage} />
            <Route path='/account' component={AccountPage} />
            <Route path='/preferences' component={PreferencesPage} />
            <Route path='/listing/:id' component={Listing} />
            <Route path='/profile/:id' component={Profile} />
          </Nav>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;