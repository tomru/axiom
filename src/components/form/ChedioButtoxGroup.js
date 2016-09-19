import React, { Component } from 'react';
import classnames from 'classnames';
import { enhance, addPropTypes, addClassName } from '../_utils/components';

if (__INCLUDE_CSS__) {
  require('./ChedioButtoxGroup.scss');
}

export class ChedioButtoxGroup extends Component {
  static propTypes = {
    children: { node: true },
    inline: { bool: true },
  };

  render() {
    const { className, children, inline, ...rest } = this.props;
    const classes = classnames(className, 'ax-chedio-buttox__group', {
      'ax-chedio-buttox__group--inline': inline,
    });

    return (
      <div { ...rest } className={ classes }>
        { children }
      </div>
    );
  }
}

export default enhance(ChedioButtoxGroup)(
  addPropTypes('global'),
  addClassName('global'),
);
