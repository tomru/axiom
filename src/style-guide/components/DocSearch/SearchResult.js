import React, { PropTypes, Component } from 'react';
import { CardListItem } from 'bw-axiom/react';
import { Heading, Italic, Link, Paragraph } from 'bw-axiom/react';

export default class SearchResult extends Component {
  static propTypes = {
    result: PropTypes.shape({
      to: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }).isRequired,
    text: PropTypes.string,
  };

  render() {
    const { text, result: { to, name } } = this.props;

    return (
      <CardListItem>
        <Heading level={ 5 } space={ false }>
          <Link to={ to }>
            { name } - <Italic textWeak={ true }>{ to }</Italic>
          </Link>
        </Heading>
        <Paragraph space={ false }>{ text }</Paragraph>
      </CardListItem>
    );
  }
}
