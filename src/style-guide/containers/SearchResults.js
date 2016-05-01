import React, { PropTypes, Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Card, CardTitle, CardContent } from 'axiom/react';
import { Icon } from 'axiom/react';
import { Heading } from 'axiom/react';
import { Indicator } from 'axiom/react';
import { LayoutContent, LayoutFullHeightContainer } from 'axiom/react/layouts/established';
import SearchResult from 'style-guide/components/DocSearch/SearchResult';

export class SearchResults extends Component {
  static propTypes = {
    searchState: PropTypes.shape({
      results: PropTypes.array.isRequired,
      isSearching: PropTypes.bool.isRequired,
    }).isRequired,
  };

  render() {
    const {searchState: {results, isSearching}} = this.props;

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
          {results.map((result, index) =>
            <SearchResult key={index} result={result} />
          )}
        </Card>
      </LayoutContent>
    );
  }
}

function select(state) {
  return {
    searchState: state.search,
  };
}

export default connect(select)(SearchResults);
