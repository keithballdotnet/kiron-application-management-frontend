'use strict';

import React from 'react';
import { Route } from 'react-router';
import { ReduxRouter } from 'redux-router';
import { Provider, connect } from 'react-redux';

import { USER_ROLE } from '../constants';

import Header from './header';

import Footer from './footer';
import FlashMessageList from './flash';

import guard from './guard';

import SignUp from './signup';
import Login from './login';
import {
  ApplyPage, ApplicationIntro, ApplicationInfo, ApplicationEducation,
  ApplicationDocument, ApplicationConfirm
} from './apply';
import Landing from './landing';

//const Index = () => <div className='page container'><h1>Index</h1></div>;
const _404 = () => <div className='page container'><h1>404</h1></div>;

class AppHandler extends React.Component {
  constructor (props) {
    super(props);
  }

  render = () => (
    <div className="flex flex-column whole">
      <Header/>
        <main className="flex-auto">
      <FlashMessageList/>
      {this.props.children}
        </main>
      <Footer/>
    </div>
  );
}

export const routes = (
  <Route component={AppHandler}>
    <Route path='/' component={Landing}/>
    <Route path='/signup' component={SignUp}/>
    <Route path='/login' component={Login}/>
    <Route path='/apply' component={guard(ApplyPage, [USER_ROLE.APPLICANT])}>
      <Route path='/apply/0' component={ApplicationIntro}/>
      <Route path='/apply/1' component={ApplicationInfo}/>
      <Route path='/apply/2' component={ApplicationEducation}/>
      <Route path='/apply/3' component={ApplicationDocument}/>
      <Route path='/apply/4' component={ApplicationConfirm}/>
    </Route>
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
