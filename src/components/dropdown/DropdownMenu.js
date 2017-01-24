import { Component, PropTypes, cloneElement } from 'react';

export default class DropdownMenu extends Component {
  static propTypes = {
    children: PropTypes.node,
    onClick: PropTypes.func,
  };

  static contextTypes = {
    closeDropdown: PropTypes.func.isRequired,
  };

  handleClick(...args) {
    const { children } = this.props;
    const { closeDropdown } = this.context;
    const { onClick = () => {} } = children.props;

    closeDropdown();
    onClick(...args);
  }

  render() {
    const { children, ...rest } = this.props;

    return cloneElement(children, {
      ...rest,
      onClick: ::this.handleClick,
    });
  }
}
