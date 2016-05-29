import React, { Component } from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import { Avatar } from 'axiom/react';
import { ButtonGroup, Button } from 'axiom/react';
import { Card, CardContent, CardList, CardListItem } from 'axiom/react';
import { Grid, GridCell } from 'axiom/react';
import { Heading, Paragraph, Strong } from 'axiom/react';
import { LabelGroup, Label } from 'axiom/react';
import { Icon } from 'axiom/react';
import { CheckBox, TextInput } from 'axiom/react';
import { Layout, LayoutHeader, LayoutNav, LayoutTitle, LayoutMain, LayoutContent, LayoutFooter } from 'axiom/react/layouts/emblem';
import { longNumber, shortNumber } from 'axiom/common/formatting-numbers';

export class EmblemLayout extends Component {
  render() {
    const authors = [
      {
        avatar: 'http://14415-presscdn-0-52-pagely.netdna-ssl.com/wp-content/uploads/2014/07/me.jpg',
        name: 'David Carson',
        handle: '@DCarson',
        bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus cursus, nunc quis hendrerit eleifend, leo tellus mattis quam.',
        followers: 7326234,
        influence: 95,
        accountType: 'individual',
        labels: ['Badass', 'Brandwatch', 'Vehicles'],
        source: 'twitter',
      }, {
        avatar: 'http://14415-presscdn-0-52-pagely.netdna-ssl.com/wp-content/uploads/2014/09/jenprofile.jpg',
        name: 'Jen Crosland',
        handle: '@JC',
        bio: 'Curabitur vel lectus diam. Nulla odio enim, accumsan id pulvinar commodo, euismod a nibh.',
        followers: 420483,
        influence: 93,
        accountType: 'organisational',
        labels: ['Badass', 'Religion', 'Brandwatch'],
        source: 'instagram',
      }, {
        avatar: 'http://14415-presscdn-0-52-pagely.netdna-ssl.com/wp-content/uploads/2014/08/Rewind.jpg',
        name: 'Marco Hof',
        handle: '@MoMoney',
        bio: 'Etiam massa augue, aliquet in iaculis et, placerat eget metus. Vestibulum a ante sed libero dapibus egestas sit amet nec risus. ',
        followers: 368756,
        influence: 91,
        accountType: 'individual',
        labels: ['Money', 'Brandwatch', 'Gold Digger', 'Wealth', 'Finance'],
        source: 'facebook',
      }, {
        avatar: 'http://14415-presscdn-0-52-pagely.netdna-ssl.com/wp-content/uploads/2012/10/christian.jpg',
        name: 'Christian Morris',
        handle: '@DidSomeoneSayDesign',
        bio: 'Suspendisse commodo tellus in leo tempus tempus. In at dui a mauris luctus convallis. Sed sit amet imperdiet nunc.',
        followers: 23876,
        influence: 82,
        accountType: 'organisational',
        labels: ['Design', 'Brandwatch', 'UX', 'Badass'],
        source: 'twitter',
      },
    ];

    const labelColorMap = {
      'Badass': 'deep-purple',
      'Brandwatch': 'deep-orange',
      'Vehicles': 'teal',
      'Religion': 'pink',
      'Money': 'light-green',
      'Gold Digger': 'yellow',
      'Wealth': 'green',
      'Finance': 'lime',
      'Design': 'blue',
      'UX': 'blue',
    };

    return (
      <Layout>
        <LayoutHeader>
          <LayoutNav>
            <Grid responsive={ false } vAlign="middle">
              <GridCell>

              </GridCell>

              <GridCell shrink={ true }>
                <ButtonGroup>
                  <Button color="blue-grey" size="sm">
                    Log in
                    <Icon name="sign-in" />
                  </Button>

                  <Button color="primary" size="sm">
                    Sign up
                    <Icon name="credit-card" />
                  </Button>
                </ButtonGroup>
              </GridCell>
            </Grid>
          </LayoutNav>

          <LayoutTitle>
            <Heading level={ 3 }>Emblem Layout</Heading>
          </LayoutTitle>

        </LayoutHeader>
        <LayoutMain>
          <LayoutContent>
            <Card>
              <CardContent>
                <TextInput placeholder="Search me!">
                  <Icon name="search" />
                  <Button>Search</Button>
                </TextInput>
              </CardContent>
            </Card>

            <Card>
              <CardList>
                {
                  authors.map(({ avatar, name, handle, followers, influence, labels, source }) =>
                    <CardListItem clickable={ true }>
                      <Grid gutters="lg" responsive={ false } vAlign="middle">
                        <GridCell shrink={ true }>
                          <CheckBox />
                        </GridCell>

                        <GridCell shrink={ true }>
                          <Avatar size="lg" src={ avatar } />
                        </GridCell>

                        <GridCell shrink={ true }>
                          <Heading level={ 4 } space={ false }>{ name }</Heading>
                          <Heading level={ 5 } space={ false }>
                            <Icon name={ source } title={ source } /> { handle }
                          </Heading>
                        </GridCell>

                        <GridCell fit="sm" full={ true }>
                          <LabelGroup textRight="sm">
                            {
                              labels
                                .sort()
                                .map((label) =>
                                  <Label color={ labelColorMap[label] } size="sm">
                                    { label }
                                  </Label>
                                )
                            }
                          </LabelGroup>
                        </GridCell>

                        <GridCell shrink={ true }>
                          <Paragraph space={ false } textRight="sm">
                            <Strong>Followers:</Strong> { shortNumber(followers, 2) }
                          </Paragraph>
                          <Paragraph space={ false } textRight="sm">
                            <Strong>Influence:</Strong> { longNumber(influence) }
                          </Paragraph>
                        </GridCell>
                      </Grid>
                    </CardListItem>
                  )
                }
              </CardList>
            </Card>

            <Card transparent={ true }>
              <CardContent textCenter={ true }>
                <ButtonGroup>
                  <Button onClick={ () => browserHistory.push(window.location.pathname.replace(/\/[^\/]+$/, '')) }>Back to the Style Guide</Button>
                </ButtonGroup>
              </CardContent>
            </Card>

          </LayoutContent>
        </LayoutMain>

        <LayoutFooter />
      </Layout>
    );
  }
}

function select() {
  return {};
}

export default connect(select)(EmblemLayout);
