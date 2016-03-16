import React, { PropTypes, Component } from 'react';
import classnames from 'classnames';

export default class Indicator extends Component {
  static propTypes = {
    children: PropTypes.string,
  };

  render() {
    const { children } = this.props;
    const classes = classnames('ax-indicator__container');

    return (
      <div className={classes}>
        <div className="ax-indicator" />
        {children}
      </div>
    );
  }
}
