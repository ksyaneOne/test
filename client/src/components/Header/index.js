import React from 'react';
import {Link} from 'react-router-dom';
const style = {height:'100px', background:'green', 'text-align':'center'}
export function Header(){
    return (
        <div style={style}>
            <Link to="/products">products</Link>
            <Link to="/cart">cart</Link>
            <Link to="/checkout">checkout</Link>
            <Link to="/login">login</Link>
            <Link to="/account">account</Link>
        </div>
    );
}