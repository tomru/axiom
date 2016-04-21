import React, { Component, PropTypes } from 'react';
import { defaultPropTypes, mergeDefaultClassName } from '../../defaults';

export default class Heading extends Component {
  static propTypes = {
    ...defaultPropTypes,
    level: PropTypes.oneOf([1, 2, 3, 4, 5]).isRequired,
    space: PropTypes.bool,
  };

  render() {
    const {level, space} = this.props;
    const className = mergeDefaultClassName(this.props, {
      'ax-text--no-space': space === false,
    });

    switch (level) {
    case 1:
      return <h1 {...this.props} className={className} />
    case 2:
      return <h2 {...this.props} className={className} />
    case 3:
      return <h3 {...this.props} className={className} />
    case 4:
      return <h4 {...this.props} className={className} />
    case 5:
      return <h5 {...this.props} className={className} />
    default:
      return null;
    }
  }
}
