import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserHistory } from "history";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";
import './index.css';
import App from './App';
import MessageBoard from './components_study/MessageBoard'
import TodoApp from './test/TodoApp'
import SignIn from './test/SighIn'
import * as serviceWorker from './serviceWorker';

// const hist = createBrowserHistory();
ReactDOM.render(
    <HashRouter >
        <Switch>
            <Route exact path="/" component={SignIn}/>
            <Route exact path="/messages" component={MessageBoard}/>
            <Route exact path="/todos" component={TodoApp} />
            <Redirect to="/"/>
        </Switch>
    </HashRouter>,
    document.getElementById("root")
);
serviceWorker.unregister();
