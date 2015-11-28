'use strict';

import React from 'react';
import { combineReducers, applyMiddleware, compose, createStore } from 'redux';
import { Provider } from 'react-redux';
import { reduxReactRouter, routerStateReducer, ReduxRouter } from 'redux-router';
import createHashHistory from 'history/lib/createHashHistory';
import { Route } from 'react-router';
import {reducer as formReducer} from 'redux-form';

import Header from './header';
import SignUp from './sign_up';
import Apply from './apply';
import ApplyInfo from './apply_info';
import ApplyDocuments from './apply_documents'

const reducer = combineReducers({
  router: routerStateReducer,
  form: formReducer
});

const Index = () => <div className='page container'><h1>Index</h1></div>;
const _404 = () => <div className='page container'><h1>404</h1></div>;

class AppHandler extends React.Component {
  constructor (props) {
    super(props);
  }

  render () {
    return (
      <div>
        <Header/>
        {this.props.children}
      </div>
    );
  }
}

const routes = (
  <Route component={AppHandler}>
    <Route path='/' component={Index}/>
    <Route path='/signup' component={SignUp}/>
    <Route path='/apply_documents' component={ApplyDocuments}/>
    //<Route path='/apply' component={Apply}/>

    <Route path="*" component={_404}/>
  </Route>
);

// Compose reduxReactRouter with other store enhancers
const store = compose(
  reduxReactRouter({
    routes,
    history: createHashHistory()
  }),
  // devTools()
)(createStore)(reducer);

export default class App extends React.Component {
  constructor (props) {
    super(props);
  }

  render () {
    return (
      <Provider store={store}>
          <ReduxRouter>{routes}</ReduxRouter>
      </Provider>
    );
  }
}
