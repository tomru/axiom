import React, { Component } from 'react';
import { Example, Snippet } from 'style-guide';
import {
  ContextMenu,
  ContextMenuItem,
  Dropdown,
  DropdownButton,
  DropdownMenu,
  IconButton,
} from 'bw-axiom';

export default class DropdownExample extends Component {
  render() {
    return (
      <Example name="Dropdown with IconButton">
        <Snippet>
          <Dropdown position="right">
            <DropdownButton>
              <IconButton name="ellipsis" />
            </DropdownButton>

            <DropdownMenu>
              <ContextMenu>
                <ContextMenuItem>Option 1</ContextMenuItem>
                <ContextMenuItem>Option 2</ContextMenuItem>
                <ContextMenuItem>Option 3</ContextMenuItem>
              </ContextMenu>
            </DropdownMenu>
          </Dropdown>
        </Snippet>
      </Example>
    );
  }
}
