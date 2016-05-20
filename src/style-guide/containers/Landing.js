import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import { Button, ButtonGroup } from 'axiom/react';
import { Card, CardTitle, CardContent } from 'axiom/react';
import { Billboard } from 'axiom/react';
import { Layout, LayoutMain, LayoutContent, LayoutFooter } from 'axiom/react/layouts/established';
import { Heading, Strong } from 'axiom/react';
import CodeSnippet from 'style-guide/components/CodeSnippet/CodeSnippet';

export class Landing extends Component {
  static propTypes = {
    schemesState: PropTypes.shape({
      active: PropTypes.string.isRequired,
    }).isRequired,
  };

  render() {
    const { schemesState } = this.props;
    const { active: activeScheme } = schemesState;

    return (
      <Layout className={ activeScheme }>
        <LayoutMain>
          <Billboard color="blue-grey" image="/assets/axiom-bg.jpg" overlay={ true } size="lg" textCenter={ true }>
            <LayoutContent>
              <Heading level={ 1 }><Strong>Brandwatch</Strong> Axiom</Heading>
              <ButtonGroup>
                <Button color="primary" onClick={ () => browserHistory.push('/docs') }>
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

function select(state) {
  return {
    schemesState: state.schemes,
  };
}

export default connect(select)(Landing);
