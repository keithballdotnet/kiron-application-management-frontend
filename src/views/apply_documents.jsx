// 'use strict';
//
// import React from 'react';
// import {reduxForm} from 'redux-form';
//
// import { USER_TYPES } from '../constants';
// import * as formUtils from '../utils/forms';
//
// const FIELDS = [
//   'documents'
// ];
//
// const validate = function (values) {
//   const errors = {};
//
//   return errors;
// }
//
// class _DocumentsForm extends React.Component {
//
//   constructor (props) {
//     super(props);
//     console.log(props);
//
//   }
//
//   static propTypes = {
//     handleSubmit: React.PropTypes.func.isRequired
//   }
//
//   render () {
//     const {fields: {
//       documents
//     }, handleSubmit} = this.props;
//
//     const baseClass = "block col-6 mb2 field";
//     console.log(handleSubmit);
//
//     return (
//       <form className="sm-col-6" onSubmit={handleSubmit}>
//       <div>
//           <label>Document to state refugee status</label>
//           <div>
//             <input type="file" {...documents} value={ null } />
//           </div>
//         </div>
//         <div>
//           <button className="block mb2 btn btn-primary" onClick={handleSubmit}>Upload &amp; Next</button>
//         </div>
//       </form>
//     );
//   }
// }
//
// const DocumentsForm = reduxForm({
//   form: 'synchronousValidation',
//   fields: FIELDS,
//   validate
// })(_DocumentsForm);
//
// export default class ApplyDocuments extends React.Component {
//
//   constructor (props) {
//     super(props);
//   }
//
//   submit = (data) => {
//     console.log(data);
//   }
//
//   render () {
//     console.log(this.submit);
//     return (
//       <div className="page container">
//         <h1>Document upload</h1>
//         <DocumentsForm onSubmit={this.submit}/>
//       </div>
//     )
//   }
// }
