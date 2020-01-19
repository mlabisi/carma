import React, {Component} from 'react';
import {Route, BrowserRouter } from 'react-router-dom'
import {Provider} from 'react-redux'
import './App.css';
import store from './store/store'

import AccountPage from './components/layouts/AccountPage';
import DiscoverPage from './components/layouts/DiscoverPage';
import LikesPage from "./components/layouts/LikesPage";
import MessagesPage from "./components/layouts/MessagesPage";
import SellPage from "./components/layouts/SellPage";
import Nav from "./components/layouts/Nav";
import CarListingDetail from "./components/presentation/CarListingDetail";

class App extends Component {
  render() {
    return (
        <Provider store={store}>
        <BrowserRouter>
          <Nav>
            <Route exact path='/' component={DiscoverPage} />
            <Route path='/likes' component={LikesPage} />
            <Route path='/sell' component={SellPage} />
            <Route path='/messages' component={MessagesPage} />
            <Route path='/account' component={AccountPage} />
            <Route path='/listing/:id' component={CarListingDetail} />
            <Route path='/profile/:id' component={CarListingDetail} />
          </Nav>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;