import React from 'react';

import {Route, BrowserRouter as Router, Switch, Redirect} from 'react-router-dom';
import DuckTest from './Pages/DuckTest';
import TodoDetails from './Pages/TodoDetails';

const rotas=(
    <Router>
        <div>
            <Switch>
                <Route exact path="/" component={DuckTest} /> 
                <Route  path="/details/:id" component={TodoDetails} /> 
            </Switch>
        </div>
    </Router>

);
export default rotas;