import React, { PropTypes, Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import classnames from 'classnames';
import * as navigationActions from 'style-guide/actions/navigation';
import * as searchActions from 'style-guide/actions/search';
import SearchInput from 'style-guide/components/DocSearch/SearchInput';
import {
  Layout,
  LayoutHeader,
  LayoutSidebar,
  LayoutSidebarHeader,
  LayoutSidebarContent,
  LayoutSidebarFooter,
  LayoutMain,
  LayoutNav,
  LayoutFooter,
} from 'axiom/react/layouts/established';

export class Docs extends Component {
  static propTypes = {
    children: PropTypes.any,
    location: PropTypes.object.isRequired,
    navigationState: PropTypes.shape({
      activeVersion: PropTypes.string.isRequired,
      versions: PropTypes.object.isRequired,
    }).isRequired,
    schemesState: PropTypes.shape({
      active: PropTypes.string.isRequired,
    }).isRequired,
    searchState: PropTypes.object.isRequired,
  };

  componentWillMount() {
    const {dispatch} = this.props;
    this.boundNavigationActions = bindActionCreators(navigationActions, dispatch);
    this.boundSearchActions = bindActionCreators(searchActions, dispatch);
  }

  render() {
    const {children, navigationState, schemesState, searchState, location} = this.props;
    const {navigationItemClick} = this.boundNavigationActions;
    const {activeVersion, versions} = navigationState;
    const {active: activeScheme} = schemesState;

    return (
      <Layout className={activeScheme}>
        <LayoutHeader>
          Axiom
        </LayoutHeader>

        <LayoutSidebar>
          <LayoutSidebarHeader>
            <SearchInput
              locationState={location}
              searchState={searchState}
              searchActions={this.boundSearchActions} />
          </LayoutSidebarHeader>

          <LayoutSidebarContent>
            <LayoutNav items={versions[activeVersion]} onItemClick={navigationItemClick} />
          </LayoutSidebarContent>
        </LayoutSidebar>

        <LayoutMain>
          { children }
        </LayoutMain>
        <LayoutFooter />
      </Layout>
    );
  }
}

function select(state) {
  return {
    navigationState: state.navigation,
    schemesState: state.schemes,
    searchState: state.search,
  };
}

export default connect(select)(Docs);
