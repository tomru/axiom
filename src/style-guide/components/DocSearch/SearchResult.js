import React, { PropTypes, Component } from 'react';
import classnames from 'classnames';
import { Card, CardTitle, CardContent } from 'axiom/react';
import { Heading, Italic, Link, Paragraph } from 'axiom/react';

export default class SearchResult extends Component {
  render() {
    const {
      result: {to, name, text},
    } = this.props;

    return (
      <CardContent>
        <Heading level={5} space={false}>
          <Link to={to}>
            {name} - <Italic textWeak={true}>{to}</Italic>
          </Link>
        </Heading>
        <Paragraph space={false}>{text}</Paragraph>
      </CardContent>
    );
  }
};
