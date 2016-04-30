import React, { Component } from 'react';
import classnames from 'classnames';
import { enhance, addDisplayName, addPropTypes, addClassName } from '../../utils/components';

export class ButtonGroup extends Component {
  static propTypes = {
    children: { node: true },
  };

  render() {
    const { className, children } = this.props;
    const classes = classnames(className, 'ax-button__group');

    return (
      <div {...this.props} className={classes}>
        {children}
      </div>
    );
  }
}

export default enhance(ButtonGroup)(
  addDisplayName('ButtonGroup'),
  addPropTypes('global', 'text'),
  addClassName('global', 'text'),
);
