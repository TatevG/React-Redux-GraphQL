import React from 'react';
import { render } from 'react-dom';
import 'babel-polyfill';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from './store/storeConfig';
import Root from './containers/root';
import '../public/styles/index.scss';

const store = configureStore();

window.store = store;

render(
    <div>
        <Provider store={store} >
            <BrowserRouter>
                <Root />
            </BrowserRouter>
        </Provider>
    </div>
    ,
    document.getElementById("app")
);
