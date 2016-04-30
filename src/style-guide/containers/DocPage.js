import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { Card, CardContent } from 'axiom/react';
import { Jumbotron } from 'axiom/react';
import { Heading } from 'axiom/react';
import { LayoutContent } from 'axiom/react/layouts/established';
import { getApiDocs } from 'style-guide/utils/docs-api';
import { getImportDocs } from 'style-guide/utils/docs-imports';
import { flattenParents } from 'style-guide/utils/navigation';
import DocLayer from 'style-guide/components/DocRendering/DocLayer';
import ImportPanel from 'style-guide/components/DocRendering/ImportPanel';
import * as docs from '../../docs/current';

export class DocPage extends Component {
  static propTypes = {
    children: PropTypes.node,
  };

  render() {
    const {
      routeParams,
      navigationState: {
        items: navStructure
      },
      location: {
        query: queryParams,
      },
      route: {
        docData: navItem,
        docData: {id, name},
      }
    } = this.props;

    getApiDocs(docs[id].components);

    const Example = docs[id].example;
    const examples = docs[id].examples;

    return (
      <div>
        <Jumbotron image="/assets/axiom-bg.jpg" color="blue-grey" overlay={true}>
          <LayoutContent>
            <Card transparent={true}>
              <CardContent>
                <Heading level={4}>{
                  flattenParents(navStructure, navItem)
                    .slice(-1)
                    .reverse()
                    .map(({name}) => name)
                    .join(' / ')}</Heading>
                <Heading level={2}>{name}</Heading>
              </CardContent>
            </Card>

            <ImportPanel content={getImportDocs(docs[id])} />
          </LayoutContent>
        </Jumbotron>

        <LayoutContent>
          {do {
            if (Example) {
              <Example />
            } else {
              {examples(routeParams, queryParams).map((example, index) =>
                <DocLayer
                  topLevel={true}
                  layer={example}
                  key={index} />
              )}
            }
          }}
        </LayoutContent>
      </div>
    );
  }
}

function select(state) {
  return {
    navigationState: state.navigation,
  };
}

export default connect(select)(DocPage);
