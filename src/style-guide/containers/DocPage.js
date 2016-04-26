import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { Card, CardContent } from 'axiom/react';
import { Jumbotron } from 'axiom/react';
import { Heading } from 'axiom/react';
import { LayoutContent } from 'axiom/react/layouts/established';
import { getImportDocs } from 'style-guide/utils/imports';
import { flattenParents } from 'style-guide/utils/navigation';
import DocLayer from 'style-guide/components/DocLayer';
import ImportPanel from 'style-guide/components/ImportPanel';
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
        docData: {
          id,
          name,
          structure,
          examples,
        },
      }
    } = this.props;

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
          {docs[id].examples(routeParams, queryParams).map((example, index) =>
            <DocLayer
              topLevel={true}
              layer={example}
              key={index} />
          )}
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
