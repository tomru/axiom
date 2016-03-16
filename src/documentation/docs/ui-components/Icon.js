import React, { Component } from 'react';
import { connect } from 'react-redux';
import Fuse from 'fuse.js';
import { Card, CardContent, CardTitle } from 'axiom/react';
import { Grid, GridCell } from 'axiom/react';
import { Icon } from 'axiom/react';
import { TextInput } from 'axiom/react';
import { iconList } from 'documentation/utils/icons';
import CodeSnippet from 'documentation/components/CodeSnippet';
import CodeTabset from 'documentation/components/CodeTabset';
import IconGrid from 'documentation/components/IconGrid';

export default class IconDocs extends Component {
  static imports = {
    sass: `@import 'axiom/sass/components/icon';`,
    jsx: `import { Icon } from 'axiom/react';`,
  };

  static meta = {
    description: ''
  };

  render() {
    const {routeParams: {iconId}} = this.props;
    const icon = iconList.find(({id}) => id === iconId);

    return (
      <div>
        <Card>
          <CardTitle title={`Icon - ${icon.name}`} />
          <CardContent>
            <p><Icon name={icon.id} size="5x" /></p>

            <CodeTabset>
              <CodeSnippet language="html">
                <Icon name={icon.id} />
              </CodeSnippet>

              <CodeSnippet language="jsx">{`
                <Icon name="${icon.id}" />
              `}</CodeSnippet>

              <CodeSnippet language="sass">{`
                ::before,
                ::after {
                  @include icon($fa-var-${icon.id});
                }
              `}</CodeSnippet>
            </CodeTabset>
          </CardContent>
        </Card>

        <Card>
          <CardTitle title="Icon sizes" />
          <CardContent>
            <Grid vAlign="middle">
              <GridCell shrink={true}><Icon name={icon.id} size="5x" /></GridCell>
              <GridCell shrink={true}><Icon name={icon.id} size="4x" /></GridCell>
              <GridCell shrink={true}><Icon name={icon.id} size="3x" /></GridCell>
              <GridCell shrink={true}><Icon name={icon.id} size="2x" /></GridCell>
              <GridCell shrink={true}><Icon name={icon.id} size="lg" /></GridCell>
            </Grid>

            <CodeTabset>
              <CodeSnippet language="html">
                <Icon name={icon.id} size="5x" />
                <Icon name={icon.id} size="4x" />
                <Icon name={icon.id} size="3x" />
                <Icon name={icon.id} size="2x" />
                <Icon name={icon.id} size="lg" />
              </CodeSnippet>

              <CodeSnippet language="jsx">{`
                <Icon name="${icon.id}" size="5x" />
                <Icon name="${icon.id}" size="4x" />
                <Icon name="${icon.id}" size="3x" />
                <Icon name="${icon.id}" size="2x" />
                <Icon name="${icon.id}" size="lg" />
              `}</CodeSnippet>
            </CodeTabset>
          </CardContent>
        </Card>
      </div>
    );
  }
}
