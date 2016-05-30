import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { Card, CardTitle, CardContent, CardList } from 'bw-axiom/react';
import { Icon } from 'bw-axiom/react';
import { Heading } from 'bw-axiom/react';
import { Indicator } from 'bw-axiom/react';
import { LayoutContent, LayoutFullHeightContainer } from 'bw-axiom/react/layouts/established';
import SearchResult from 'style-guide/components/DocSearch/SearchResult';
import { findById } from 'style-guide/utils/navigation';

export class SearchResults extends Component {
  static propTypes = {
    navigationState: PropTypes.shape({
      versions: PropTypes.object.isRequired,
    }).isRequired,
    searchState: PropTypes.shape({
      isSearching: PropTypes.bool.isRequired,
      results: PropTypes.array.isRequired,
      version: PropTypes.string.isRequired,
    }).isRequired,
  };

  render() {
    const { isSearching, results, version } = this.props.searchState;
    const { versions } = this.props.navigationState;

    if (isSearching) {
      return (
        <LayoutFullHeightContainer hAlign="center" vAlign="middle">
          <LayoutContent>
            <Card transparent={ true }>
              <CardContent textCenter={ true }>
                <Indicator />
              </CardContent>
            </Card>
          </LayoutContent>
        </LayoutFullHeightContainer>
      );
    }

    if (results.length === 0) {
      return (
        <LayoutFullHeightContainer hAlign="center" vAlign="middle">
          <LayoutContent>
            <Card transparent={ true }>
              <CardContent textCenter={ true }>
                <Icon name="binoculars" size="5x" />
                <Heading level={ 4 }>There's no results, but don't give up keep looking.</Heading>
              </CardContent>
            </Card>
          </LayoutContent>
        </LayoutFullHeightContainer>
      );
    }

    return (
      <LayoutContent>
        <Card>
          <CardTitle title="Search Results" />
          <CardList>
            { results.map(({ path, text }, index) =>
              <SearchResult
                  key={ index }
                  result={ findById(versions[version], path) }
                  text={ text } />
            ) }
          </CardList>
        </Card>
      </LayoutContent>
    );
  }
}

function select(state) {
  return {
    searchState: state.search,
    navigationState: state.navigation,
  };
}

export default connect(select)(SearchResults);
