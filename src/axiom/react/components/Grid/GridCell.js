import React, { PropTypes, Component } from 'react';
import { breakpoints } from 'sass-vars';
import { classHelper } from '../../utils';
import { defaultPropTypes, mergeDefaultClassName } from '../../defaults';

export default class GridCell extends Component {
  static propTypes = {
    ...defaultPropTypes,
    children: PropTypes.any,
    full: PropTypes.oneOf([true, ...breakpoints.map(({id}) => id)]),
    fit: PropTypes.oneOf([true, ...breakpoints.map(({id}) => id)]),
    shrink: PropTypes.oneOf([true, ...breakpoints.map(({id}) => id)]),
    half: PropTypes.oneOf([true, ...breakpoints.map(({id}) => id)]),
    third: PropTypes.oneOf([true, ...breakpoints.map(({id}) => id)]),
    quarter: PropTypes.oneOf([true, ...breakpoints.map(({id}) => id)]),
    fifth: PropTypes.oneOf([true, ...breakpoints.map(({id}) => id)]),
    sixth: PropTypes.oneOf([true, ...breakpoints.map(({id}) => id)]),
    vAlign: PropTypes.oneOf(['top', 'middle', 'bottom']),
  };

  render() {
    const {
      children,
      full,
      fit,
      shrink,
      half,
      third,
      quarter,
      fifth,
      sixth,
      vAlign,
    } = this.props;

    const className = mergeDefaultClassName(this.props,
      'ax-grid__cell', {
        'ax-grid__cell--top': vAlign === 'top',
        'ax-grid__cell--middle': vAlign === 'middle',
        'ax-grid__cell--bottom': vAlign === 'bottom',
        'ax-grid__cell--full': full === true,
        'ax-grid__cell--fit': fit === true,
        'ax-grid__cell--shrink': shrink === true,
        'ax-grid__cell--half': half === true,
        'ax-grid__cell--third': third === true,
        'ax-grid__cell--quarter': quarter === true,
        'ax-grid__cell--fifth': fifth === true,
        'ax-grid__cell--sixth': sixth === true,
      },
      classHelper(breakpoints, ({id}) => full === id,  ({id}) => `ax-grid__cell--full--${id}`),
      classHelper(breakpoints, ({id}) => fit === id,  ({id}) => `ax-grid__cell--fit--${id}`),
      classHelper(breakpoints, ({id}) => shrink === id,  ({id}) => `ax-grid__cell--shrink--${id}`),
      classHelper(breakpoints, ({id}) => half === id,  ({id}) => `ax-grid__cell--half--${id}`),
      classHelper(breakpoints, ({id}) => third === id,  ({id}) => `ax-grid__cell--third--${id}`),
      classHelper(breakpoints, ({id}) => quarter === id,  ({id}) => `ax-grid__cell--quarter--${id}`),
      classHelper(breakpoints, ({id}) => fifth === id,  ({id}) => `ax-grid__cell--fifth--${id}`),
      classHelper(breakpoints, ({id}) => sixth === id,  ({id}) => `ax-grid__cell--sixth--${id}`),
    );

    return (
      <div {...this.props} className={className}>
        {children}
      </div>
    );
  }
};
