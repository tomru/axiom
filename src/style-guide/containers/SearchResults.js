import React, { PropTypes, Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Card, CardTitle, CardContent } from 'axiom/react';
import { Icon } from 'axiom/react';
import { Heading } from 'axiom/react';
import { Indicator } from 'axiom/react';
import { LayoutContent, LayoutFullHeightContainer } from 'axiom/react/layouts/established';
import SearchResult from 'style-guide/components/DocSearch/SearchResult';
import { findById } from 'style-guide/utils/navigation';

export class SearchResults extends Component {
  static propTypes = {
    searchState: PropTypes.shape({
      isSearching: PropTypes.bool.isRequired,
      results: PropTypes.array.isRequired,
      version: PropTypes.string.isRequired,
    }).isRequired,
    navigationState: PropTypes.shape({
      versions: PropTypes.object.isRequired,
    }).isRequired,
  };

  render() {
    const {isSearching, results, version} = this.props.searchState;
    const {versions} = this.props.navigationState;

    console.log(version);

    if (isSearching) {
      return (
        <LayoutFullHeightContainer vAlign="middle" hAlign="center">
          <LayoutContent>
            <Card transparent={true}>
              <CardContent textCenter={true}>
                <Indicator />
              </CardContent>
            </Card>
          </LayoutContent>
        </LayoutFullHeightContainer>
      );
    }

    if (results.length === 0) {
      return (
        <LayoutFullHeightContainer vAlign="middle" hAlign="center">
          <LayoutContent>
            <Card transparent={true}>
              <CardContent textCenter={true}>
                <Icon name="binoculars" size="5x" />
                <Heading level={4}>There's no results, but don't give up keep looking.</Heading>
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
          {results.map(({path, text}, index) =>
            <SearchResult
                key={index}
                result={findById(versions[version], path)}
                text={text} />
          )}
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
