import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import { Base } from 'bw-axiom';

if (__INCLUDE_CSS__) {
  require('./Link.scss');
}

export default class Link extends Component {
  static propTypes = {
    children: PropTypes.node,
    inheritColor: PropTypes.bool,
  };

  render() {
    const { children, inheritColor, ...rest } = this.props;
    const classes = classnames('ax-link', {
      'ax-link--inherit-color': inheritColor,
    });

    return (
      <Base { ...rest } Component="a" className={ classes }>
        { children }
      </Base>
    );
  }
}
