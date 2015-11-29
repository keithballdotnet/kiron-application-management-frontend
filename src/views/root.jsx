'use strict';

import React from 'react';
import { Route } from 'react-router';
import { ReduxRouter } from 'redux-router';
import { Provider } from 'react-redux';

import Header from './header';
import SignUp from './signup';
import Login from './login';
import Apply from './apply';
import ApplyInfo from './apply_info';
import ApplyEducation from './apply_education';

const Index = () => <div className='page container'><h1>Index</h1></div>;
const _404 = () => <div className='page container'><h1>404</h1></div>;

class AppHandler extends React.Component {
  constructor (props) {
    super(props);
  }

  render = () => <div><Header/>{this.props.children}</div>;
}

export const routes = (
  <Route component={AppHandler}>
    <Route path='/' component={Index}/>
    <Route path='/signup' component={SignUp}/>
    <Route path='/login' component={Login}/>
    <Route path='/apply/info' component={ApplyInfo}/>
    <Route path='/apply/education' component={ApplyEducation}/>
    <Route path='/apply' component={Apply}/>
    <Route path="*" component={_404}/>
  </Route>
);

export default class Root extends React.Component {
  constructor (props) {
    super(props);
  }

  render () {
    return (
      <Provider store={this.props.store}>
          <ReduxRouter>{routes}</ReduxRouter>
      </Provider>
    );
  }
}
