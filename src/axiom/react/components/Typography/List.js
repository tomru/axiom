import React, { Component, PropTypes } from 'react';
import { PROP_TYPES_GLOBAL, PROP_TYPES_TEXT, mergeDefaultClassName } from '../../defaults';

export default class List extends Component {
  static propTypes = {
    ...PROP_TYPES_GLOBAL,
    ...PROP_TYPES_TEXT,
    children: PropTypes.node,
    ordered: PropTypes.bool,
    inline: PropTypes.bool,
    aligned: PropTypes.bool,
  };

  render() {
    const {
      children,
      ordered,
      inline,
      aligned = !inline,
    } = this.props;

    const className = mergeDefaultClassName(this.props,
      'ax-list', {
        'ax-list--aligned': aligned === true,
        'ax-list--inline': inline === true,
      }
    );

    if (ordered === true) {
      return (
        <ol {...this.props} className={className}>
          {children}
        </ol>
      );
    }

    return (
      <ul {...this.props} className={className}>
        {children}
      </ul>
    );
  }
}
