import React from 'react';
import ReactDOM from 'react-dom';
import {Link, NavLink} from 'react-router-dom';

const Header = () => (
    <header>
        <h1>MyExpence App</h1>
        <NavLink to="/" activeClassName="is-active" exact={true}>Home</NavLink>
        <NavLink to="/create" activeClassName="is-active">Create</NavLink>
        <NavLink to="/help" activeClassName="is-active">help</NavLink>
    </header>
);

export default Header;
