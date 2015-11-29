'use strict';

import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import {pushState} from 'redux-router';

import actions from '../actions';
import ApplicationIntroText from './apply_intro_text';
import ApplicationInfoForm from '../forms/application_info';
import ApplicationEducationForm from '../forms/application_education';

const STAGES = [
  'Introduction',
  'Personal Information',
  'Education',
  'Documents',
  'Confirmation'
]

function ApplyStages (props) {
  const {stage, completed} = props;
  const baseCls = "left btn btn-primary bg-blue p1 flex-auto m1";
  return (
    <div className="flex center">
      {STAGES.map((stageName, index) => {
        let cls = baseCls;
        cls = completed.includes(index) ? cls + ' bg-green' : cls;
        cls = index === stage ? cls + ' bg-teal' : cls;
        return (
          <Link to={`/apply/${index}`} key={index} className={cls}>
            {`(${index + 1}) ${stageName}`}
          </Link>
        );
      })}
    </div>
  )
}

export class ApplyStageWrapper extends React.Component {
  constructor (props) {
    super(props);
  }

  correctStage = (props) => {
    const stage = props.application.stage;
    const urlStage = Number(props.location.pathname.split('/').slice(-1)[0]);
    if (Number.isInteger(urlStage) && stage !== urlStage) {
      this.props.dispatch(actions.applicationSwitchTo({stage: urlStage}));
    }
  }

  componentWillMount () { this.correctStage(this.props); }
  componentWillReceiveProps (nextProps) { this.correctStage(nextProps); }

  next = (data) => {
    const stage = this.props.application.stage;
    this.props.dispatch(
      actions.applicationAdvance({stage}));
    this.props.dispatch(pushState(null, `/apply/${stage + 1}`));
  }

}

export class ApplicationIntro extends ApplyStageWrapper {

  render () {
    return (
      <section>
        <ApplicationIntroText/>
        <button onClick={this.next}
                className="block m1 p1 btn btn-primary">
          Start your application
        </button>
      </section>
    )
  }
}

ApplicationIntro = connect(state => state)(ApplicationIntro);

export class ApplicationInfo extends ApplyStageWrapper {

  render () {
    return (
      <div className="page container">
        <h2>Personal Information</h2>
        <ApplicationInfoForm onSubmit={this.next}/>
      </div>
    )
  }
}

ApplicationInfo = connect(state => state)(ApplicationInfo);

export class ApplicationEducation extends ApplyStageWrapper {

  render () {
    return (
      <div className="page container">
        <h2>Your education</h2>
        <ApplicationEducationForm onSubmit={this.next}/>
      </div>
    )
  }
}

ApplicationEducation = connect(state => state)(ApplicationEducation);

class Apply extends React.Component {
  constructor (props) {
    super(props);
  }

  correctRoute = (props) => {
    if (props.location.pathname === '/apply') {
      const stage = this.props.application.stage;
      this.props.dispatch(pushState(null, `/apply/${stage}`));
    }
  }
  componentWillMount () { this.correctRoute(this.props); }
  componentWillReceiveProps (nextProps) { this.correctRoute(nextProps); }

  render () {
    return (
      <div className="page container">
        <h1>Application Process</h1>
        <ApplyStages
          stage={this.props.application.stage}
          completed={this.props.application.completed}/>
        {this.props.children}
      </div>
    );
  }
}

export const ApplyPage = connect(state => state)(Apply);
