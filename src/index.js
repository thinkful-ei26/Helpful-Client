import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import UserDashboard from './components/user-dashboard';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<UserDashboard />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
