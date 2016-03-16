import React, { PropTypes, Component } from 'react';
import classnames from 'classnames';
import Link from '../Typography/Link';

export default class Tabset extends Component {
  static propTypes = {
    children: PropTypes.any,
    activeTabIndex: PropTypes.number,
  };

  componentWillMount() {
    this.activateTab(this.props.activeTabIndex);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.children.length !== this.props.children.length) {
      this.setState({activeTabIndex: 0});
    }
  }

  activateTab(index = 0) {
    this.setState({
      activeTabIndex: index,
    });
  }

  render() {
    const { children } = this.props;
    const { activeTabIndex } = this.state;
    const isActive = (index) => index === activeTabIndex;
    const tabs = Array.isArray(children) ? children : [children];
    const tabTitles = tabs.map(({props: {title}}) => title);
    const activeTab = tabs.find((tab, index) => isActive(index));

    return (
      <div className="ax-tabs">
        <ul className="ax-tabs__nav">
          {tabTitles.map((title, index) => {
            const classes = classnames('ax-tabs__nav-item', {
              'ax-tabs__nav-item--active': isActive(index),
            });

            return (
              <li className={classes} key={index} onClick={() => this.activateTab(index)}>
                <Link className="ax-tabs__nav-link" supressStyle={true}>
                  {title}
                </Link>
              </li>
            );
          })}
        </ul>

        {activeTab}
      </div>
    );
  }
}
