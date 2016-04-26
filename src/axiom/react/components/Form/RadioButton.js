import React, { Component, PropTypes } from 'react';
import { PROP_TYPES_GLOBAL, mergeDefaultClassName } from '../../defaults';
import { blacklist } from '../../utils';

export default class RadioButton extends Component {
  static propTypes = {
    ...PROP_TYPES_GLOBAL,
    children: PropTypes.node,
    inline: PropTypes.bool,
  };

  render() {
    const { children, inline } = this.props;
    const className = mergeDefaultClassName(this.props,
      'ax-radio__group', {
        'ax-radio__group--inline': inline === true,
        'ax-radio__group--space': !!children,
      }
    );

    return (
      <label className={className}>
        <input className="ax-radio"
               type="radio"
               {...blacklist(this.props, ['children', 'className'])} />
        <span className="ax-radio__label">{children}</span>
      </label>
    );
  }
}
