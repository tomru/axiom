import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import { Base, Small, Strong } from 'bw-axiom';

export default class Tab extends Component {
  static propTypes = {
    active: PropTypes.bool,
    disabled: PropTypes.bool,
    size: PropTypes.oneOf(['small', 'large']).required,
    title: PropTypes.node,
  };

  render() {
    /* eslint-disable react/prop-types */
    const { active, disabled, onClick, size, title, ...rest } = this.props;
    /* eslint-enable react/prop-types */
    const classes = classnames('ax-tabset__list-item', {
      'ax-tabset__list-item--active': active,
      'ax-tabset__list-item--disabled': disabled,
      [`ax-tabset__list-item--${size}`]: size,
    });

    return (
      <Base { ...rest }
          Component="li"
          className={ classes }
          textCase="upper"
          title={ title }>
        <button { ...rest }
            className="ax-tabset__button"
            disabled={ disabled }
            onClick={ onClick }>
          <Strong><Small>{ title }</Small></Strong>
        </button>
      </Base>
    );
  }
}
