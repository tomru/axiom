import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import { enhance, addPropTypes, addClassName } from '../../utils/components';

export class LayoutMain extends Component {
  static propTypes = {
    children: { node: true, isRequired: true },
  };

  static contextTypes = {
    hideSidebar: PropTypes.func,
  };

  render() {
    const { className, children } = this.props;
    const { hideSidebar } = this.context;
    const classes = classnames(className, 'ax-layout__main');

    return (
      <div className={ classes } onClick={ hideSidebar }>
        { children }
      </div>
    );
  }
}

export default enhance(LayoutMain)(
  addPropTypes('global'),
  addClassName('global'),
);
