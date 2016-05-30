import React, { Component } from 'react';
import { Button, ButtonGroup } from 'bw-axiom/react';
import DialogExample from './DialogExample';
import CodeTabset from 'style-guide/components/CodeSnippet/CodeTabset';
import CodeSnippet from 'style-guide/components/CodeSnippet/CodeSnippet';

export default class DialogFullscreen extends Component {
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
    return (
      <div>
        <ButtonGroup>
          <Button onClick={ ::this.openDialog }>
            Open Fullscreen Dialog
            <DialogExample
                fullscreen={ true }
                isOpen={ this.state.isOpen }
                onRequestClose={ ::this.closeDialog }
                withFooter={ true }
                withTitle={ true } />
          </Button>
        </ButtonGroup>

        <CodeTabset>
          <CodeSnippet language="jsx">{ `
            <Dialog fullScreen={ true }>
              <DialogTitle onRequestClose={ Function }>...</DialogTitle>
              <DialogBody>...</DialogBody>
              <DialogFooter>...</DialogFooter>
            </Dialog>
          ` }</CodeSnippet>
        </CodeTabset>
      </div>
    );
  }
}
