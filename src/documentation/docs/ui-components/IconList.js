import React, { Component } from 'react';
import { connect } from 'react-redux';
import Fuse from 'fuse.js';
import { Card, CardContent, CardTitle } from 'axiom/react';
import { Grid, GridCell } from 'axiom/react';
import { Icon } from 'axiom/react';
import { TextInput } from 'axiom/react';
import { iconList, iconCategories } from 'documentation/utils/icons';
import CodeSnippet from 'documentation/components/CodeSnippet';
import CodeTabset from 'documentation/components/CodeTabset';
import IconGrid from 'documentation/components/IconGrid';

export default class IconListDocs extends Component {
  static imports = {
    sass: `@import 'axiom/sass/components/icon';`,
    jsx: `import { Icon } from 'axiom/react';`,
  };

  static meta = {
    description: ''
  };

  componentWillMount() {
    this.setState({search: ''});
  }

  searchIconList(text) {
    const fuse = new Fuse(iconList, {
      keys: ['name', 'filter'],
      threshold: 0.1,
    });

    return fuse.search(text);
  }

  onChangeHandler(event) {
    const {target: {value}} = event;
    this.setState({search: value});
  }

  render() {
    const {search} = this.state;

    return (
      <div>
        <Card>
          <CardContent>
            <TextInput
              placeholder="Got a specific icon in mind?"
              icon="search"
              onChange={::this.onChangeHandler} />
          </CardContent>
        </Card>

        {do {
          if (search) {
            <Card>
              <CardTitle title={`Search for "${search}"`} />
              <CardContent>
                <IconGrid icons={this.searchIconList(search)} />
              </CardContent>
            </Card>
          } else {
            {Object.keys(iconCategories).map((category, index) =>
              <Card key={index}>
                <CardTitle title={category} />
                <CardContent>
                  <IconGrid icons={iconCategories[category]} />
                </CardContent>
              </Card>
            )}
          }
        }}
      </div>
    );
  }
}
