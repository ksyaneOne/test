import React from 'react';
import { Switch, Route } from 'react-router-dom'
import {Home} from './pages/Home/index';
import {Cart} from './pages/Cart/index';
import {Checkout} from './pages/Checkout/index';
import {Login} from './pages/Login/index';
import {MyAccount} from './pages/MyAccount/index';
import {NotFound} from './pages/NotFound/index';
import {ProductDetails} from './pages/ProductDetails/index';
import {ProductList} from './pages/ProductList/index';
import {Header} from './components/Header';
import {Footer} from './components/Footer';
import './App.css';

function App() {
  return (
    <>
      <Header/>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/cart" component={Cart} />
        <Route exact path="/checkout" component={Checkout} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/account" component={MyAccount} />
        <Route exact path="/product/:id" component={ProductDetails} />
        <Route exact path="/products" component={ProductList} />
        <Route exact path="*" component={NotFound} />
      </Switch>
      <Footer/>
    </>
  );
}

export default App;
