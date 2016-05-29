import React, { Component, PropTypes } from 'react';
import { Button, ButtonGroup } from 'axiom/react';
import { CardContent } from 'axiom/react';
import { Dialog, DialogBody, DialogFooter, DialogTitle } from 'axiom/react';

export default class DialogExample extends Component {
  static propTypes = {
    withFooter: PropTypes.bool,
    withTitle: PropTypes.bool,
    onRequestClose: PropTypes.func,
  };

  render() {
    const { onRequestClose, withFooter, withTitle } = this.props;


    return (
      <Dialog {...this.props}>
        {
          do {
            if (withTitle) {
              <DialogTitle onRequestClose={ onRequestClose }>
                Dialog Title
              </DialogTitle>
            }
          }
        }

        <DialogBody>
          <CardContent>
            Hello :)
          </CardContent>
        </DialogBody>

        {
          do {
            if (withFooter) {
              <DialogFooter>
                <ButtonGroup>
                  <Button onClick={ onRequestClose }>Done</Button>
                </ButtonGroup>
              </DialogFooter>
            }
          }
        }
      </Dialog>
    );
  }
}
