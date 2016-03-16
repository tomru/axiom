import React, { PropTypes, Component } from 'react';
import classnames from 'classnames';

export default class LayoutFullHeightContainer extends Component {
  static propTypes = {};

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
