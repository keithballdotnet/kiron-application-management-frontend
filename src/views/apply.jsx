'use strict';

import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import {pushState} from 'redux-router';

import actions from '../actions';
import Viewer from './document_viewer';
import ApplicationIntroText from './apply_intro_text';
import ApplicationInfoForm from '../forms/application_info';
import ApplicationEducationForm from '../forms/application_education';
import ApplicationDocumentForm from '../forms/application_document';

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
        cls = index === stage ? cls + ' bg-teal' : cls;
        cls = completed.includes(index) ? cls + ' bg-green' : cls;
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
      actions.applicationAdvance({stage, data}));
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
      <div className="container">
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
      <div className="container">
        <h2>Your education</h2>
        <ApplicationEducationForm onSubmit={this.next}/>
      </div>
    )
  }
}

ApplicationEducation = connect(state => state)(ApplicationEducation);

export class ApplicationDocument extends ApplyStageWrapper {

  render () {
    return (
      <div className="container">
        <h2>Proof of refuger status</h2>
        <ApplicationDocumentForm onSubmit={this.next}/>
      </div>
    )
  }
}

ApplicationDocument = connect(state => state)(ApplicationDocument);

function completed(arr) {
  return (
    arr.includes(1) && arr.includes(2) && arr.includes(3)
  );
}

export class ApplicationConfirm extends ApplyStageWrapper {

  constructor (props) {
    super(props);
  }

  render () {

    let warning = <span></span>;
    if (!completed(this.props.application.completed)) {
      warning = (
        <div className="md-col-12 border-box mb2 mt2">
          <div className="overflow-hidden border-box m1 bg-white border rounded">
            <div className="p1 bg-red white">
              <h1 className="h3 m0">Incomplete application</h1>
            </div>
            <div className="p2">
              <p className="m0">
                You cannot submit you application before filling all the required data.
                <br/>
                Please have a look at previous steps.
              </p>
            </div>
          </div>
        </div>
      )
    }

    let items = [];

    if (this.props.application.completed.includes(1)) {
      items.push(
        <div key='1'>
        <h3>Personal Information</h3>
        <pre>
          {JSON.stringify(this.props.application.data[1])}
        </pre>
        </div>
      )
    }

    if (this.props.application.completed.includes(2)) {
      items.push(
        <div key='2'>
        <h3>Education</h3>
        <pre>
          {JSON.stringify(this.props.application.data[2])}
        </pre>
        </div>
      )
    }

    if (this.props.application.completed.includes(3)) {
      items.push(
        <div key='3'>
        <h3>Attestation document</h3>
        <Viewer file={this.props.application.data[3].doc}/>
        </div>
      )
    }

    return (
      <div className="container">
        <h2>Confirm your data</h2>
        {warning}
        {items}
      </div>
    );
  }
}

ApplicationConfirm = connect(state => state)(ApplicationConfirm);

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
      <div className="container">
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
