import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { Card, CardContent } from 'axiom/react';
import { Billboard } from 'axiom/react';
import { Heading } from 'axiom/react';
import { LayoutContent } from 'axiom/react/layouts/established';
import { getParentNames } from 'style-guide/utils/navigation';
import DocImports from 'style-guide/components/DocRendering/DocImports';

export class Doc extends Component {
  static propTypes = {
    children: PropTypes.node,
    navigationState: PropTypes.shape({
      activeVersion: PropTypes.string.isRequired,
      versions: PropTypes.object.isRequired,
    }).isRequired,
    route: PropTypes.shape({
      doc: PropTypes.object.isRequired,
      navItem: PropTypes.object.isRequired,
    }).isRequired,
  };

  render() {
    const {
      children,
      navigationState: {
        activeVersion,
        versions,
      },
      route: {
        doc,
        navItem,
      },
    } = this.props;

    return (
      <div>
        <Billboard color="blue-grey" image="/assets/axiom-bg.jpg" overlay={ true }>
          <LayoutContent>
            <Card transparent={ true }>
              <CardContent>
                <Heading level={ 4 }>{
                  getParentNames(versions[activeVersion], navItem)
                    .slice(-1)
                    .reverse()
                    .join(' / ')
                }</Heading>
                <Heading level={ 2 }>{ navItem.name }</Heading>
              </CardContent>
            </Card>

            <DocImports doc={ doc } />
          </LayoutContent>
        </Billboard>

        { children }
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
