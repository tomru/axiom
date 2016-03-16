import React, { PropTypes, Component } from 'react';
import classnames from 'classnames';
import { colorBaseVariation } from 'sass-vars';

export default class Jumbotron extends Component {
  render() {
    const {
      children,
      className,
      image,
      color,
      overlay,
      spaced,
      variation = colorBaseVariation,
    } = this.props;

    const classes = classnames(
      className,
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
      <div className={classes} style={style}>
        {children}
      </div>
    );
  }
}
