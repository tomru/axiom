import React, { PropTypes, Component } from 'react';
import Layout from 'style-guide/components/Layout/Layout';
import LayoutHeader from 'style-guide/components/Layout/LayoutHeader';
import LayoutSidebar from 'style-guide/components/Layout/LayoutSidebar';
import LayoutMain from 'style-guide/components/Layout/LayoutMain';
import Nav from 'style-guide/components/Navigation/Nav';
import { buildNavigationItem, buildNavigationItems, normalisePathname } from 'style-guide/utils/navigation';

export default class App extends Component {
  static propTypes = {
    children: PropTypes.any,
    location: PropTypes.shape({
      pathname: PropTypes.string.isRequired,
    }).isRequired,
  };

  componentWillMount() {
    const { location } = this.props;
    const { pathname } = location;

    this.updateActiveRouteState(normalisePathname(pathname));
  }

  componentWillUpdate(nextProps) {
    const { location } = this.props;
    const { pathname } = location;
    const { location: nextLocation } = nextProps;
    const { pathname: nextPathname } = nextLocation;

    if (nextPathname !== pathname) {
      this.updateActiveRouteState(normalisePathname(nextPathname));
    }
  }

  onItemClick({ path, children }) {
    this.setState({ openPath: path });

    if (!children) {
      this.setState({ activePath: path });
    }
  }

  updateActiveRouteState(pathname) {
    this.setState({
      activePath: pathname,
      openPath: pathname,
    });
  }

  render() {
    const { children } = this.props;
    const { activePath, openPath } = this.state;
    const navigationItems = buildNavigationItems(activePath, openPath);

    [{ id: 'labs', path: '/labs' }]
      .forEach((item) => navigationItems.push(buildNavigationItem(activePath, openPath, item)));

    return (
      <Layout>
        <LayoutHeader>
          Axiom
        </LayoutHeader>

        <LayoutSidebar>
          <Nav
              items={ navigationItems }
              onItemClick={ ::this.onItemClick } />
        </LayoutSidebar>

        <LayoutMain>
          { children }
        </LayoutMain>
      </Layout>
    );
  }
}
