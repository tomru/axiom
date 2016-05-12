import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { Card, CardContent } from 'axiom/react';
import { Billboard } from 'axiom/react';
import { Heading } from 'axiom/react';
import { LayoutContent } from 'axiom/react/layouts/established';
import { getParentNames } from 'style-guide/utils/navigation';
import DocImports from 'style-guide/components/DocRendering/DocImports';

export class Doc extends Component {
  render() {
    const {
      children,
      navigationState: {
        activeVersion,
        versions
      },
      route: {
        doc,
        navItem,
      }
    } = this.props;

    return (
      <div>
        <Billboard image="/assets/axiom-bg.jpg" color="blue-grey" overlay={true}>
          <LayoutContent>
            <Card transparent={true}>
              <CardContent>
                <Heading level={4}>{
                  getParentNames(versions[activeVersion], navItem)
                    .slice(-1)
                    .reverse()
                    .join(' / ')
                }</Heading>
                <Heading level={2}>{navItem.name}</Heading>
              </CardContent>
            </Card>

            <DocImports doc={doc} />
          </LayoutContent>
        </Billboard>

        {children}
      </div>
    );
  }
}


function select(state) {
  return {
    navigationState: state.navigation,
  };
}

export default connect(select)(Doc);
