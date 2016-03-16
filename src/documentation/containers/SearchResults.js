import React, { PropTypes, Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Card, CardTitle, CardContent } from 'axiom/react';
import { Icon } from 'axiom/react';
import { Link } from 'axiom/react';
import { Indicator } from 'axiom/react';
import { formatNumber } from 'axiom/common/format-utils';
import { LayoutContent, LayoutFullHeightContainer } from 'axiom/react/layouts/established';

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
              <CardContent  className="ax-text--center">
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
              <CardContent  className="ax-text--center">
                <Icon name="binoculars" size="5x" />
                <h4>There's no results, but don't give up keep looking.</h4>
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
          {results.map(({name, text, to, meta}, index) =>
            <CardContent key={index}>
              <h5 className="ax-text--no-space">
                <Link to={to}>{name} - <em className="ax-text--weak">{to}</em></Link>
              </h5>
              <p className="ax-text--no-space">{meta.description}</p>
            </CardContent>
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
