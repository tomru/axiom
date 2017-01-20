import React, { Component } from 'react';
// import { } from 'bw-axiom';

if (__INCLUDE_CSS__) {
  require('./Labs.scss');
}

export default class Labs extends Component {
  render() {
    return (
      <div className="dm-labs">
        <div className="dm-labs__canvas" style={ { minHeight: 590, width: 800 } }>



        </div>
      </div>
    );
  }
}
