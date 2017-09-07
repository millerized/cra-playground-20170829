import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {Subject} from 'rxjs';
import localForage from 'localforage';

import './index.css';
import {App} from './App';
import registerServiceWorker from './registerServiceWorker';

const STORE_NAME = 'state';

const getGlobalStore = () => localForage.getItem(STORE_NAME);
const setGlobalStore = (newState) => localForage.setItem(STORE_NAME, newState);

const Main = ({store}) => (
    <BrowserRouter>
        <Switch>
            <Route exact path='/' render={() => <App store={store}/>}/>
        </Switch>
    </BrowserRouter>
);

const initializeApplication = (store) => {
    if (!store) setGlobalStore({});

    ReactDOM.render(<Main store={store} />, document.getElementById('root'));
    registerServiceWorker();
};

const updateGlobalStateStore = (state) => {
        getGlobalStore()
        .then((prevState) => {
            const newState = {...prevState, ...state};
            setGlobalStore(newState);
        });
};


localForage.config({
    name: 'deepfield',
    storeName: 'global',
});

getGlobalStore()
    .then(initializeApplication)
    .catch(console.log);

export const globalStateStream = new Subject();
globalStateStream.subscribe(updateGlobalStateStore);
