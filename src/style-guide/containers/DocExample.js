import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { LayoutContent } from 'axiom/react/layouts/established';
import DocLayer from 'style-guide/components/DocRendering/DocLayer';

export class DocExample extends Component {
  static propTypes = {
    children: PropTypes.node,
    location: PropTypes.shape({
      query: PropTypes.object.isRequired,
    }).isRequired,
    route: PropTypes.shape({
      doc: PropTypes.shape({
        examples: PropTypes.func,
        Example: PropTypes.func,
      }).isRequired,
    }).isRequired,
    routeParams: PropTypes.object.isRequired,
  };

  render() {
    const {
      routeParams,
      location: {
        query: queryParams,
      },
      route: {
        doc: {
          Example,
          examples,
        },
      },
    } = this.props;

    return (
      <LayoutContent>
        { do {
          if (Example) {
            <Example />
          } else {
            {examples(routeParams, queryParams).map((example, index) =>
              <DocLayer
                  key={ index }
                  layer={ example }
                  topLevel={ true } />
            )}
          }
        } }
      </LayoutContent>
    );
  }
}

function select() {
  return {};
}

export default connect(select)(DocExample);
