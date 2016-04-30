import React, { PropTypes, Component } from 'react';
import classnames from 'classnames';

export default class DemoBox extends Component {
  static propTypes = {
    children: PropTypes.any,
    attention: PropTypes.bool,
  };

  render() {
    const {children, attention} = this.props;
    const classes = classnames('dm-demo-box', {
      'dm-demo-box--attention': attention,
    });

    return (
      <div className={classes}>
        <span>{children}</span>
      </div>
    );
  }
};
