import React, { PropTypes, Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import classnames from 'classnames';
import { Card, CardContent } from 'axiom/react';
import { Jumbotron } from 'axiom/react';
import { LayoutContent, LayoutFooter } from 'axiom/react/layouts/established';
import { findByActive } from 'documentation/utils/navigation';
import ImportPanel from 'documentation/components/ImportPanel';

export class Docs extends Component {
  static propTypes = {
    children: PropTypes.any,
    navigationState: PropTypes.shape({
      visible: PropTypes.bool.isRequired,
      items: PropTypes.array.isRequired,
    }).isRequired,
  };

  render() {
    const { children, navigationState } = this.props;
    const activeNavItems = findByActive(navigationState.items);

    return (
      <div>
        <Jumbotron image="/assets/axiom-bg.jpg" color="blue-grey" overlay={true}>
          <LayoutContent>
            <Card transparent={true}>
              <CardContent>
                <h4>{activeNavItems[0].name}</h4>
                <h2>{activeNavItems[1].name}</h2>
              </CardContent>
            </Card>

            {do {
              if (children.type.imports) {
                <ImportPanel content={children.type.imports} />
              }
            }}
          </LayoutContent>
        </Jumbotron>

        <LayoutContent>
          { children }
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

export default connect(select)(Docs);
