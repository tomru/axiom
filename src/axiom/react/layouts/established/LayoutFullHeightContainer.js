import React, { Component } from 'react';
import classnames from 'classnames';
import { enhance, addDisplayName, addPropTypes, addClassName } from '../../utils/components';

export class LayoutFullHeightContainer extends Component {
  static propTypes = {
    vAlign: { oneOf: ['top', 'middle', 'bottom'] },
    hAlign: { oneOf: ['left', 'center', 'right'] },
  };

  render() {
    const { children, className, vAlign, hAlign } = this.props;
    const classes = classnames(className,
      'ax-layout__full-height', {
        'ax-layout__full-height--top': vAlign === 'top',
        'ax-layout__full-height--middle': vAlign === 'middle',
        'ax-layout__full-height--bottom': vAlign === 'bottom',
        'ax-layout__full-height--left': hAlign === 'left',
        'ax-layout__full-height--center': hAlign === 'center',
        'ax-layout__full-height--right': hAlign === 'right',
      }
    );

    return (
      <div className={classes}>
        {children}
      </div>
    );
  }
}

export default enhance(LayoutFullHeightContainer)(
  addDisplayName('LayoutFullHeightContainer'),
  addPropTypes('global'),
  addClassName('global'),
);
