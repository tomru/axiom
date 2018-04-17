import PropTypes from 'prop-types';
import React, { Component, Fragment } from 'react';
import omit from 'lodash.omit';
import ContextMenuItem from '../Context/ContextMenuItem';

export default class DropdownMenuItem extends Component {
  static propTypes = {
    children: PropTypes.node,
    /**
    * Whether the menu should stay open after being clicked.
    */
    keepOpen: PropTypes.bool,
     /**
     * Whether the menu is part of a multi-selection menu. When true, this
     * will disable automatically closing the DropdownMenu when clicked.
     */
    multiSelect: PropTypes.bool,
    /** Click handler  */
    onClick: PropTypes.func,
    /**
     * When the parent is selected, this DropdownMenu is displayed as selected
     * and disabled.
     */
    parentSelected: PropTypes.bool,
    /**
     * If the DropdownMenuItem is selected. This is ignored if the parent is
     * selected.
     */
    selected: PropTypes.bool,
    /**
     * An array of DropdownMenuItem.
     */
    subMenuItems: PropTypes.arrayOf(PropTypes.instanceOf(this.constructor)),
  };

  static contextTypes = {
    closeDropdown: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    const { closeDropdown } = this.context;
    const { multiSelect, keepOpen, onClick, parentSelected } = this.props;

    if (closeDropdown && !multiSelect && !keepOpen) closeDropdown();

    if (!parentSelected && onClick) onClick(event);
  }

  render() {
    const { children, subMenuItems, selected, parentSelected, ...rest } = this.props;

    return (
      <Fragment>
        <ContextMenuItem
            disabled={ parentSelected }
            selected={ parentSelected || (!parentSelected && selected) }
            { ...omit(rest, ['keepOpen']) }
            onClick={ this.handleClick }
            tabIndex="0" >
          { children }
        </ContextMenuItem>
        { subMenuItems && (
          <div className="ax-context-submenu">
            {
              subMenuItems.map((subMenuItem, index) => React.cloneElement(subMenuItem, {
                key: index,
                parentSelected: selected || parentSelected,
              }))
            }
          </div>
        ) }
      </Fragment>
    );
  }
}
