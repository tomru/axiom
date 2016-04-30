import React, { Component } from 'react';
import classnames from 'classnames';
import { enhance, addDisplayName, addPropTypes, addClassName } from '../../utils/components';
import { blacklist } from '../../utils/props';
import { addDynamicClass } from '../../utils/class-name';
import { breakpoints } from '../../../sass';

export class GridCell extends Component {
  static propTypes = {
    children: { any: true },
    full: { oneOf: [true, ...breakpoints.map(({id}) => id)] },
    fit: { oneOf: [true, ...breakpoints.map(({id}) => id)] },
    shrink: { oneOf: [true, ...breakpoints.map(({id}) => id)] },
    half: { oneOf: [true, ...breakpoints.map(({id}) => id)] },
    third: { oneOf: [true, ...breakpoints.map(({id}) => id)] },
    quarter: { oneOf: [true, ...breakpoints.map(({id}) => id)] },
    fifth: { oneOf: [true, ...breakpoints.map(({id}) => id)] },
    sixth: { oneOf: [true, ...breakpoints.map(({id}) => id)] },
    vAlign: { oneOf: ['top', 'middle', 'bottom'] },
  };

  render() {
    const {
      className,
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

    const classes = classnames(className,
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
      addDynamicClass(breakpoints, ({id}) => full === id,  ({id}) => `ax-grid__cell--full--${id}`),
      addDynamicClass(breakpoints, ({id}) => fit === id,  ({id}) => `ax-grid__cell--fit--${id}`),
      addDynamicClass(breakpoints, ({id}) => shrink === id,  ({id}) => `ax-grid__cell--shrink--${id}`),
      addDynamicClass(breakpoints, ({id}) => half === id,  ({id}) => `ax-grid__cell--half--${id}`),
      addDynamicClass(breakpoints, ({id}) => third === id,  ({id}) => `ax-grid__cell--third--${id}`),
      addDynamicClass(breakpoints, ({id}) => quarter === id,  ({id}) => `ax-grid__cell--quarter--${id}`),
      addDynamicClass(breakpoints, ({id}) => fifth === id,  ({id}) => `ax-grid__cell--fifth--${id}`),
      addDynamicClass(breakpoints, ({id}) => sixth === id,  ({id}) => `ax-grid__cell--sixth--${id}`),
    );

    return (
      <div {...this.props} className={classes}>
        {children}
      </div>
    );
  }
};

export default enhance(GridCell)(
  addDisplayName('GridCell'),
  addPropTypes('global', 'text'),
  addClassName('global', 'text'),
);
