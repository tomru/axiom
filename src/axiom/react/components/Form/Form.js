import React, { Component } from 'react';
import classnames from 'classnames';
import { enhance, addDisplayName, addPropTypes, addClassName } from '../../utils/components';

export class Form extends Component {
  static propTypes = {
    children: { node: true },
  };

  render() {
    const { className, children } = this.props;
    const classes = classnames(className, 'ax-form');

    return (
      <form {...this.props} className={classes}>
        {children}
      </form>
    );
  }
}

export default enhance(
  Form,
  addDisplayName('Form'),
  addPropTypes('global', 'text'),
  addClassName('global', 'text'),
);
