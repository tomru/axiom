import React, { PropTypes, Component } from 'react';
import Fuse from 'fuse.js';
import { Card, CardTitle, CardContent } from 'axiom/react';
import { TextInput } from 'axiom/react';
import { Icon } from 'axiom/react';
import { Link, Paragraph } from 'axiom/react';
import { debounce } from 'style-guide/utils/function';
import { iconList, iconCategories } from 'style-guide/utils/icons';
import IconGrid from 'style-guide/components/Icons/IconGrid';

export default class IconExample extends Component {
  componentWillMount() {
    this.setState({search: ''});
    this.setSearchValueDebounced = debounce(::this.setSearchValue, 250);
  }

  searchIconList(text) {
    const fuse = new Fuse(iconList, {
      keys: ['name', 'filter'],
      threshold: 0.1,
    });

    return fuse.search(text);
  }

  setSearchValue(value) {
    this.setState({search: value});
  }

  onChangeHandler(event) {
    const {target: {value}} = event;
    event.persist();
    this.setSearchValueDebounced(value);
  }

  render() {
    const {search} = this.state;
    const foundIcons = this.searchIconList(search);

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
                {do {
                  if (foundIcons.length) {
                    <IconGrid icons={foundIcons} />
                  } else {
                    <Paragraph textCenter={true}>
                      Sorry no icons found matching "{search}"
                    </Paragraph>
                  }
                }}
              </CardContent>

              <CardContent>
                <Paragraph textCenter={true}>
                  <Link onClick={() => this.setSearchValue('')}>
                    View all icons
                  </Link>
                </Paragraph>
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
};
