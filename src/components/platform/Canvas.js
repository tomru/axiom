import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Base from '../base/Base';
import classnames from 'classnames';
import './Canvas.css';

export default class Canvas extends Component {
  static propTypes = {
    children: PropTypes.node,
    isDockless: PropTypes.bool,
    isShifted: PropTypes.bool,
  };

  static contextTypes = {
    consoleWidth: PropTypes.string.isRequired,
  };

  render() {
    const { children, isDockless, isShifted, ...rest } = this.props;
    const { consoleWidth } = this.context;
    const style = {
      marginRight: isShifted && consoleWidth,
      transform: isShifted && `translateX(${consoleWidth})`,
    };
    const classes = classnames('ax-platform__canvas', {
      'ax-platform__canvas--no-dock': isDockless,
    });

    return (
      <Base { ...rest } className={ classes } style={ style }>
        { children }
      </Base>
    );
  }
}
