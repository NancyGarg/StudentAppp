import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import { createStore } from 'redux';
import addReducer from './reducers/addReducer';
import {Provider} from 'react-redux';
import $ from 'jquery';
import "../node_modules/jquery/dist/jquery.min.js";

const store = createStore(addReducer);

ReactDOM.render(
<Provider store={store}><App />
</Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
