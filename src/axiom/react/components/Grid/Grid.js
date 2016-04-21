import React, { PropTypes, Component } from 'react';
import { breakpoints, gridGutters } from 'sass-vars';
import { classHelper } from '../../utils';
import { defaultPropTypes, mergeDefaultClassName } from '../../defaults';

export default class Grid extends Component {
  static propTypes = {
    ...defaultPropTypes,
    children: PropTypes.node,
    responsive: PropTypes.bool,
    gutters: PropTypes.oneOf([false, ...gridGutters.map(({id}) => id)]),
    vGutters: PropTypes.bool,
    hGutters: PropTypes.bool,
    full: PropTypes.oneOf([true, ...breakpoints.map(({id}) => id)]),
    fit: PropTypes.oneOf([true, ...breakpoints.map(({id}) => id)]),
    vAlign: PropTypes.oneOf(['top', 'middle', 'bottom']),
    hAlign: PropTypes.oneOf(['left', 'center', 'right', 'around', 'between']),
  };

  render() {
    const {
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

    const className = mergeDefaultClassName(this.props,
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
      classHelper(gridGutters, ({id}) => gutters === id, ({id}) => `ax-grid--gutters--${id}`),
      classHelper(breakpoints, ({id}) => full === id, ({id}) => `ax-grid--full--${id}`),
      classHelper(breakpoints, ({id}) => fit === id, ({id}) => `ax-grid--fit--${id}`),
    );

    return (
      <div {...this.props} className={className}>
        {children}
      </div>
    );
  }
}
