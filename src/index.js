import React from 'react';
import ReactDOM from 'react-dom';
import './style.scss';

// Router
import { Router, Route, browserHistory, IndexRoute} from 'react-router';

// Container Components 
import {App, Home, Login, Redirect, Party, NewParty } from './containers';

// Redux
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import thunk from 'redux-thunk'; 


const store = createStore(reducers, applyMiddleware(thunk));
const rootElement = document.getElementById('root');

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Home} />
        <Route path="login" component={Login}/>
        <Route path="party" component={Party} /> 
        <Route path="party/new" component={NewParty} />
        <Route path="oauth2/redirect" component={Redirect}/>
      </Route>
    </Router>
  </Provider>, rootElement
);
