import React, { Component } from 'react';
import { Button, ButtonGroup } from 'bw-axiom/react';
import { Dialog } from 'bw-axiom/react';
import { Link, Paragraph } from 'bw-axiom/react';
import DialogExample from './DialogExample';
import CodeTabset from 'style-guide/components/CodeSnippet/CodeTabset';
import CodeSnippet from 'style-guide/components/CodeSnippet/CodeSnippet';

export default class DialogSizes extends Component {
  static propTypes = {};

  componentWillMount() {
    Dialog.__ax_propTypes.size.oneOf.forEach((size) => {
      this.closeDialog(size)();
    });
  }

  openDialog(size) {
    return () => {
      this.setState({ [size]: true });
    };
  }

  closeDialog(size) {
    return () => {
      this.setState({ [size]: false });
    };
  }

  render() {
    return (
      <div>
        <Paragraph>
          The Dialog component is an interface to
          the <Link href="https://github.com/reactjs/react-modal" target="_blank">react-modal</Link> component.
          All properties you pass to Dialog will forward to the Modal component
        </Paragraph>

        <ButtonGroup>
          {
            Dialog.__ax_propTypes.size.oneOf.map((size) => {
              return (
                <Button key={ size } onClick={ ::this.openDialog(size) }>
                  Open { size.toUpperCase() } Dialog
                  <DialogExample
                      isOpen={ this.state[size] }
                      onRequestClose={ ::this.closeDialog(size) }
                      size={ size }
                      withFooter={ true }
                      withTitle={ true } />
                </Button>
              );
            })
          }
        </ButtonGroup>

        <CodeTabset>
          <CodeSnippet language="jsx">{ `
            <Dialog size="[${Dialog.__ax_propTypes.size.oneOf.join('|')}]">
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
