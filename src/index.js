import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Switch} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css'
import './index.css';
import HomePage from "./pages/HomePage";

ReactDOM.render(
    <React.StrictMode>
        <Router>
            <Switch>
                <HomePage/>
            </Switch>
        </Router>
    </React.StrictMode>,
    document.getElementById('root')
);
