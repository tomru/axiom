import React, { Component } from 'react';
import classnames from 'classnames';
import { enhance, addPropTypes, addClassName } from '../../utils/components';

export class LayoutContent extends Component {
  static propTypes = {
    children: { node: true, isRequired: true },
  };

  render() {
    const { children, className } = this.props;
    const classes = classnames(className, 'ax-layout--established__content');

    return (
      <div className={ classes }>
        { children }
      </div>
    );
  }
}

export default enhance(LayoutContent)(
  addPropTypes('global'),
  addClassName('global'),
);

