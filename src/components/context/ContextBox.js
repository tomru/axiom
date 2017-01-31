import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import { Base } from 'bw-axiom';

if (__INCLUDE_CSS__) {
  require('./ContextBox.scss');
}

export default class ContextBox extends Component {
  static propTypes = {
    arrowRef: PropTypes.func,
    children: PropTypes.node,
    padded: PropTypes.bool,
    position: PropTypes.oneOf(['top', 'bottom', 'right', 'left']),
    width: PropTypes.string,
  };

  static defaultProps = {
    padded: true,
    position: 'top',
    width: '14.5rem',
  };

  render() {
    const { arrowRef, children, padded, position, width, ...rest } = this.props;
    const style = { width };
    const classes = classnames('ax-context-box',  `ax-context-box--${position}`, {
      'ax-context-box--padded': padded,
    });

    return (
      <Base { ...rest } className={ classes } style={ style }>
        { children }

        <span
            className="ax-context-box__arrow"
            ref={ arrowRef } />
      </Base>
    );
  }
}
