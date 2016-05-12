import React, { Component } from 'react';
import classnames from 'classnames';
import { enhance, addDisplayName, addPropTypes, addClassName } from '../../utils/components';
import { colorIds, colorBaseVariation } from '../../../sass';

export class Billboard extends Component {
  static propTypes = {
    children: { node: true },
    image: { string: true },
    color: { oneOf: [...colorIds] },
    overlay: { bool: true },
    size: { oneOf: ['sm', 'md', 'lg'], default: 'md' },
  };

  render() {
    const {
      className,
      children,
      image,
      color,
      overlay,
      size = Billboard.propTypes.size.default,
      variation = colorBaseVariation,
    } = this.props;

    const classes = classnames(className,
      'ax-billboard', {
        [`ax-billboard--${color}--${variation}`]: color,
        'ax-billboard--image': image,
        'ax-billboard--overlay': overlay === true,
        'ax-billboard--sm': size === 'sm',
        'ax-billboard--md': size === 'md',
        'ax-billboard--lg': size === 'lg',
      }
    );

    const style = {
      backgroundImage: image && `url('${image}')`,
    };

    return (
      <div {...this.props} className={classes} style={style}>
        {children}
      </div>
    );
  }
}

export default enhance(Billboard)(
  addDisplayName('Billboard'),
  addPropTypes('global', 'text'),
  addClassName('global', 'text'),
);
