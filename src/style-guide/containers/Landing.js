import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, ButtonGroup } from 'bw-axiom/react';
import { Card, CardTitle, CardContent } from 'bw-axiom/react';
import { Billboard } from 'bw-axiom/react';
import { Layout, LayoutMain, LayoutContent, LayoutFooter } from 'bw-axiom/react/layouts/established';
import { Heading, Strong } from 'bw-axiom/react';
import { goToDocs } from 'style-guide/actions/routing';
import CodeSnippet from 'style-guide/components/CodeSnippet/CodeSnippet';

export class Landing extends Component {
  static propTypes = {};

  render() {
    return (
      <Layout>
        <LayoutMain>
          <Billboard color="blue-grey" image="/assets/axiom-bg.jpg" overlay={ true } size="lg" textCenter={ true }>
            <LayoutContent>
              <Heading level={ 1 }><Strong>Brandwatch</Strong> Axiom</Heading>
              <ButtonGroup>
                <Button color="primary" onClick={ () => goToDocs() }>
                  Read the docs
                </Button>
              </ButtonGroup>
            </LayoutContent>
          </Billboard>

          <LayoutContent>
            <Card>
              <CardTitle title="Install" />
              <CardContent>
                <CodeSnippet language="bash">
                  npm install bw-axiom --save
                </CodeSnippet>
              </CardContent>
            </Card>
          </LayoutContent>
        </LayoutMain>

        <LayoutFooter />
      </Layout>
    );
  }
}

function select() {
  return {};
}

export default connect(select)(Landing);
