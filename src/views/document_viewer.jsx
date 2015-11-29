'use strict';

import React from 'react';
import RPDF from 'react-pdf';
console.log(PDFJS);

export default class Viewer extends React.Component {

  constructor (props) {
    super(props);
    this.state = {data: null};
  }

  setUp = (props)  => {

    this.setState({...this.state, data: null});
    this.reader = new FileReader();
    this.file = props.file[0];

    const type = this.file.type.split('/').slice(-1)[0];

    console.log("SETUP", this.file, this.reader, type);

    // if (['png', 'jpg', 'jpeg'].includes(type)) {
    //   this.reader.readAsDataURL(this.file);
    // } else if (type === "pdf") {
    //   this.reader.readAsBinaryString(this.file);
    // }

    this.reader.readAsDataURL(this.file);

    this.reader.onload = () => {
      console.log("LOADED");
      this.setState({...this.state, data: this.reader.result});
    };
  }

  componentWillMount () {
    this.setUp(this.props);
  }

  componentWillReceiveProps (nextProps) {
    this.setUp(nextProps);
  }

  _onDocumentCompleted = (pages) => {
    console.log('DOCC');
    this.setState({pages: pages});
  }

  _onPageCompleted = (page) => {
    console.log("PAGEC");
    this.setState({currentPage: page});
  }

  render () {
    if (!this.state.data) {
      return <span></span>;
    }

    const type = this.file.type.split('/').slice(-1)[0];

    console.log(type, this.state);

    if (['png', 'jpg', 'jpeg'].includes(type)) {
      return <div><img src={this.state.data}/></div>;
    } else if ("pdf" === type) {
      console.log("SEND OUT");
      return <RPDF file={window.URL.createObjectURL(this.file)}
            page={1}
            onDocumentComplete={this._onDocumentComplete}
            onPageComplete={this._onPageComplete}
            loading={(<span>Loading PDF file ...</span>)}/>
    } else {
      return <span className="red">Invalid extension {type}</span>;
    }

    return <span></span>;
  }
}
