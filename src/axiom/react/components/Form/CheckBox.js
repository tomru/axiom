import React, { Component, PropTypes } from 'react';
import { blacklist } from '../../utils';
import { defaultPropTypes, mergeDefaultClassName } from '../../defaults';

export default class CheckBox extends Component {
  static propTypes = {
    ...defaultPropTypes,
    children: PropTypes.node,
    inline: PropTypes.bool,
  };

  render() {
    const { children, inline } = this.props;
    const className = mergeDefaultClassName(this.props,
      'ax-checkbox__group', {
        'ax-checkbox__group--inline': inline === true,
        'ax-checkbox__group--space': !!children,
      }
    );

    return (
      <label className={className}>
        <input className="ax-checkbox"
               type="checkbox"
               {...blacklist(this.props, ['children'])} />
        <span className="ax-checkbox__label">{children}</span>
      </label>
    );
  }
}
