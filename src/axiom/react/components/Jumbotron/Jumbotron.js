import React, { Component } from 'react';
import classnames from 'classnames';
import { enhance, addDisplayName, addPropTypes, addClassName } from '../../utils/components';
import { colorBaseVariation } from '../../../sass';

export class Jumbotron extends Component {
  static propTypes = {
    children: { node: true },
    image: { string: true },
    color: { string: true },
    overlay: { bool: true },
    spaced: { bool: true },
  };

  render() {
    const {
      className,
      children,
      image,
      color,
      overlay,
      spaced,
      variation = colorBaseVariation,
    } = this.props;

    const classes = classnames(className,
      'ax-jumbotron', {
        [`ax-jumbotron--${color}--${variation}`]: color,
        'ax-jumbotron--image': image,
        'ax-jumbotron--overlay': overlay === true,
        'ax-jumbotron--spaced': spaced === true,
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

export default enhance(Jumbotron)(
  addDisplayName('Jumbotron'),
  addPropTypes('global', 'text'),
  addClassName('global', 'text'),
);
