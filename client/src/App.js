import React, { Component } from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import history from './utils/history';
import LayoutDefault from './components/layouts/LayoutDefault';
import * as routes from './config/routes';
import Notice from './components/Notice/Notice';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Login from './pages/Login';
import MyAccount from './pages/MyAccount';
import ProductDetails from './pages/ProductDetails';
import ProductList from './pages/ProductList';
import Footer from './components/Footer';
import Header from './components/Header';
import ScrollToTop from './components/ScrollButton';

export default class App extends Component {
  render() {
    return (
      <Router history={history}>

        <Header />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/cart" component={Cart} />
          <Route exact path="/checkout" component={Checkout} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/account" component={MyAccount} />
          <Route exact path="/product/:id" component={ProductDetails} />
          <Route exact path="/products" component={ProductList} />
          <Route exact path="*" component={NotFound} />
          <LayoutDefault exact path={routes.HOME} component={Home} />
          <LayoutDefault component={NotFound} />
        </Switch>

        <ScrollToTop />
        <Footer />
        <Notice />
      </Router>
    );
  }
