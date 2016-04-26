import React, { PropTypes, Component } from 'react';
import classnames from 'classnames';

export default class LayoutContent extends Component {
  render() {
    const { className, children } = this.props;
    const classes = classnames(className, 'ax-layout__content');

    return (
      <div className={classes}>
        { children }
      </div>
    );
  }
}
