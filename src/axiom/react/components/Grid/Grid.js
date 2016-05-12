import React, { Component } from 'react';
import classnames from 'classnames';
import { enhance, addDisplayName, addPropTypes, addClassName } from '../../utils/components';
import { addDynamicClass, breakpointClassName } from '../../utils/class-name';
import { breakpointIds, gridGutters } from '../../../sass';

export class Grid extends Component {
  static propTypes = {
    children: { node: true, isRequired: true },
    responsive: { oneOf: [false] },
    gutters: { oneOf: [false, ...gridGutters.map(({id}) => id)] },
    vGutters: { bool: true },
    hGutters: { bool: true },
    full: { oneOf: [true, ...breakpointIds] },
    fit: { oneOf: [true, ...breakpointIds] },
    vAlign: { oneOf: ['top', 'middle', 'bottom'] },
    hAlign: { oneOf: ['left', 'center', 'right', 'around', 'between'] },
  };

  render() {
    const {
      className,
      children,
      responsive = true,
      gutters = true,
      vGutters = true,
      hGutters = true,
      full,
      fit,
      vAlign,
      hAlign,
    } = this.props;

    const classes = classnames(className,
      'ax-grid', {
        'ax-grid--unresponsive': responsive === false,
        'ax-grid--gutters-none': gutters === false,
        'ax-grid--gutters-none-v': vGutters === false,
        'ax-grid--gutters-none-h': hGutters === false,
        'ax-grid--full': full === true,
        'ax-grid--fit': fit === true,
        'ax-grid--top': vAlign === 'top',
        'ax-grid--middle': vAlign === 'middle',
        'ax-grid--bottom': vAlign === 'bottom',
        'ax-grid--left': hAlign === 'left',
        'ax-grid--center': hAlign === 'center',
        'ax-grid--right': hAlign === 'right',
        'ax-grid--around': hAlign === 'around',
        'ax-grid--between': hAlign === 'between',
      },
      addDynamicClass(gridGutters, ({id}) => gutters === id, ({id}) => `ax-grid--gutters--${id}`),
      breakpointClassName(full, ({id}) => `ax-grid--full--${id}`),
      breakpointClassName(fit, ({id}) => `ax-grid--fit--${id}`),
    );

    return (
      <div {...this.props} className={classes}>
        {children}
      </div>
    );
  }
}

export default enhance(Grid)(
  addPropTypes('global', 'text'),
  addClassName('global', 'text'),
);
