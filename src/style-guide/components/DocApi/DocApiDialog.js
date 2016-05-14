import React, { PropTypes, Component } from 'react';
import { ButtonGroup, Button } from 'axiom/react';
import { CardContent } from 'axiom/react';
import { Dialog, DialogBody, DialogFooter, DialogTitle } from 'axiom/react';
import { Heading } from 'axiom/react';
import DocApiList from 'style-guide/components/DocApi/DocApiList';

export default class DocApiDialog extends Component {
  static propTypes = {
    apiDocs: PropTypes.array.isRequired,
    isOpen: PropTypes.bool.isRequired,
    title: PropTypes.string.isRequired,
    onRequestClose: PropTypes.func.isRequired,
  };

  render() {
    const { apiDocs, isOpen, onRequestClose, title } = this.props;

    return (
      <Dialog isOpen={ isOpen } onRequestClose={ onRequestClose }>
        <DialogTitle onRequestClose={ onRequestClose }>
          { `API Docs - ${title}` }
        </DialogTitle>
        <DialogBody>
          {
            apiDocs
              .filter(({ propTypes }) => Object.keys(propTypes).length)
              .map(({ name, propTypes }) => [
                <CardContent key="heading">
                  <Heading level={ 4 }>{ name }</Heading>
                </CardContent>,
                <DocApiList key="propTypeList" propTypes={ propTypes } />,
              ])
          }
        </DialogBody>
        <DialogFooter>
          <ButtonGroup>
            <Button onClick={ onRequestClose }>Close</Button>
          </ButtonGroup>
        </DialogFooter>
      </Dialog>
    );
  }
}
