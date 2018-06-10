import React from 'react';
import ReactDOM from 'react-dom';
import Header from '../components/Header';
import Dashboard from '../components/Dashboard';
import AddExpencePage from '../components/AddExpencePage';
import EditExpencePage from '../components/EditExpencePage';
import ExpenceHelpPage from '../components/ExpenceHelpPage';
import PageNotFound from '../components/PageNotFound';


import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';


const AppRouter = () => (

    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path="/" component={Dashboard} exact={true}/>
                <Route path="/create" component={AddExpencePage} />
                <Route path="/edit/:id" component={EditExpencePage} />
                <Route path="/help" component={ExpenceHelpPage} />
                <Route component={PageNotFound} />
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;