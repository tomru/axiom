import React, { Component } from 'react';
import classnames from 'classnames';
import { enhance, addDisplayName, addPropTypes, addClassName } from '../../utils/components';

export class List extends Component {
  static propTypes = {
    children: { node: true },
    ordered: { bool: true },
    inline: { bool: true },
    aligned: { bool: true },
  };

  render() {
    const {
      className,
      children,
      ordered,
      inline,
      aligned = !inline,
    } = this.props;

    const classes = classnames(className,
      'ax-list', {
        'ax-list--aligned': aligned === true,
        'ax-list--inline': inline === true,
      }
    );

    if (ordered === true) {
      return (
        <ol {...this.props} className={classes}>
          {children}
        </ol>
      );
    }

    return (
      <ul {...this.props} className={classes}>
        {children}
      </ul>
    );
  }
}

export default enhance(
  List,
  addDisplayName('List'),
  addPropTypes('global', 'text'),
  addClassName('global', 'text'),
);
