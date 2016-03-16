import React, { Component } from 'react';
import classnames from 'classnames';

export default class Table extends Component {
  render() {
    const {
      children,
      sortable,
      striped,
      borders,
    } = this.props;

    const classes = classnames('ax-table', {
      'ax-table--sortable': sortable,
      'ax-table--striped': striped,
      'ax-table--borders': borders === true,
      'ax-table--borders--v': borders === 'v',
      'ax-table--borders--h': borders === 'h',
    });

    return (
      <table className={classes}>
        {children}
      </table>
    );
  }
}
