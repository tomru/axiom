import React, { Component, PropTypes } from 'react';
import { defaultPropTypes, mergeDefaultClassName } from '../../defaults';

export default class Table extends Component {
  static propTypes = {
    ...defaultPropTypes,
    children: PropTypes.node,
    sortable: PropTypes.bool,
    striped: PropTypes.bool,
    borders: PropTypes.oneOf([true, 'v', 'h']),
  };

  render() {
    const {
      children,
      sortable,
      striped,
      borders,
    } = this.props;

    const className = mergeDefaultClassName(this.props,
      'ax-table', {
        'ax-table--sortable': sortable === true,
        'ax-table--striped': striped === true,
        'ax-table--borders': borders === true,
        'ax-table--borders--v': borders === 'v',
        'ax-table--borders--h': borders === 'h',
      }
    );

    return (
      <table {...this.props} className={className}>
        {children}
      </table>
    );
  }
}
