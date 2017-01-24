import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import { Base } from 'bw-axiom';

if (__INCLUDE_CSS__) {
  require('./ButtonGroup.scss');
}

export default class ButtonGroup extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    joined: PropTypes.bool,
  };

  render() {
    const { children, joined, ...rest } = this.props;
    const classes = classnames('ax-button__group', {
      'ax-button__group--joined': joined,
    });

    return (
      <Base { ...rest } className={ classes }>
        { children }
      </Base>
    );
  }
}
