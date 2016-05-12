import React, { Component } from 'react';
import classnames from 'classnames';
import { enhance, addDisplayName, addPropTypes, addClassName } from '../../utils/components';

export class Avatar extends Component {
  static propTypes = {
    src: {
      string: true,
      isRequired: true,
    },
    size: {
      oneOf: ['sm', 'md', 'lg'],
      default: 'md',
    },
  };

  render() {
    const {
      className,
      size = Avatar.propTypes.size.default,
    } = this.props;

    const classes = classnames(className,
      'ax-avatar', {
        'ax-avatar--sm': size === 'sm',
        'ax-avatar--md': size === 'md',
        'ax-avatar--lg': size === 'lg',
      }
    );

    return (
      <img {...this.props} className={classes} />
    );
  }
}

export default enhance(Avatar)(
  addDisplayName('Avatar'),
  addPropTypes('global'),
  addClassName('global'),
);
