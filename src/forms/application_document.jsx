'use strict';

import React from 'react';
import {reduxForm} from 'redux-form';

const FIELDS = ['doc'];

class _ApplicationDocumentForm extends React.Component {

  constructor (props) {
    super(props);
  }

  render () {
    const {fields: {doc}, handleSubmit} = this.props;
    const _cls = "block col-12 mb2";

    return (
      <form className="sm-col-12" onSubmit={handleSubmit}>
        <fieldset className="field mt2 mb2">
          <label>Document attesting of your refugee status</label>
          <br/>
          <input type="file" accept=".png,.jpg,.jpeg,.pdf" {...doc} value={null} />
        </fieldset>
        <button className="block mb2 mt2 btn btn-primary" onClick={handleSubmit}>Upload</button>
      </form>
    );
  }
}

export default reduxForm({
  form: 'applicationDocumentForm', fields: FIELDS
})(_ApplicationDocumentForm);
