import React, { PropTypes, Component } from 'react';
import { ButtonGroup, Button } from 'axiom/react';
import DocApiDialog from 'style-guide/components/DocApi/DocApiDialog';

export default class DocApiDialogTrigger extends Component {
  static propTypes = {
    apiDocs: PropTypes.array.isRequired,
    title: PropTypes.string.isRequired,
  };

  componentWillMount() {
    this.closeDialog();
  }

  openDialog() {
    this.setState({ isOpen: true });
  }

  closeDialog() {
    this.setState({ isOpen: false });
  }

  render() {
    const { apiDocs, title } = this.props;
    const { isOpen } = this.state;

    return (
      <ButtonGroup>
        <Button onClick={ ::this.openDialog } size="lg">
          View API Docs
          <DocApiDialog
              apiDocs={ apiDocs }
              isOpen={ isOpen }
              onRequestClose={ ::this.closeDialog }
              title={ title } />
        </Button>
      </ButtonGroup>
    );
  }
}
