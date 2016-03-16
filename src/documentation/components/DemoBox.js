import React, { PropTypes, Component } from 'react';
import classnames from 'classnames';

export default class DemoBox extends Component {
  static propTypes = {
    children: PropTypes.any,
    attention: PropTypes.bool,
    large: PropTypes.bool,
  };

  render() {
    const {children, attention, large} = this.props;
    const classes = classnames('dm-demo-box', {
      'dm-demo-box--attention': attention,
      'dm-demo-box--lg': large,
    });

    return (
      <div className={classes}>
        <span>{children}</span>
      </div>
    );
  }
};
