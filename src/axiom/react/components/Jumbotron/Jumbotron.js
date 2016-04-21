import React, { PropTypes, Component } from 'react';
import { colorBaseVariation } from 'sass-vars';
import { defaultPropTypes, mergeDefaultClassName } from '../../defaults';

export default class Jumbotron extends Component {
  static propTypes = {
    ...defaultPropTypes,
    children: PropTypes.node,
    image: PropTypes.string,
    color: PropTypes.string,
    overlay: PropTypes.bool,
    spaced: PropTypes.bool,
  };

  render() {
    const {
      children,
      image,
      color,
      overlay,
      spaced,
      variation = colorBaseVariation,
    } = this.props;

    const className = mergeDefaultClassName(this.props,
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
      <div {...this.props} className={className} style={style}>
        {children}
      </div>
    );
  }
}
