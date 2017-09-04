import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import './index.css';
import {App} from './App';
import registerServiceWorker from './registerServiceWorker';

const Main = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={App}/>
        </Switch>
    </BrowserRouter>
);


ReactDOM.render(<Main />, document.getElementById('root'));

registerServiceWorker();
