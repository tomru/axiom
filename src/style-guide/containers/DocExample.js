import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { LayoutContent } from 'axiom/react/layouts/established';
import DocLayer from 'style-guide/components/DocRendering/DocLayer';

export class DocExample extends Component {
  static propTypes = {
    children: PropTypes.node,
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
    );
  }
}

function select(state) {
  return {};
}

export default connect(select)(DocExample);
