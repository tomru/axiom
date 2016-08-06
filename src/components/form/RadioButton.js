import React, { Component } from 'react';
import classnames from 'classnames';
import { enhance, addPropTypes, addClassName } from '../_utils/components';

export class RadioButton extends Component {
  static propTypes = {
    children: { node: true },
    inline: { bool: true },
  };

  render() {
    const { className, children, inline, ...rest } = this.props;
    const classes = classnames(className,
      'ax-radio__group', {
        'ax-radio__group--inline': inline === true,
        'ax-radio__group--space': !!children,
      }
    );

    return (
      <label className={ classes }>
        <input className="ax-radio" type="radio" { ...rest } />
        <span className="ax-radio__label">{ children }</span>
      </label>
    );
  }
}

export default enhance(RadioButton)(
  addPropTypes('global'),
  addClassName('global'),
);

