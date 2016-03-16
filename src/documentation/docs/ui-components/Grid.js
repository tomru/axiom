import React, { Component } from 'react';
import CodeSnippet from 'documentation/components/CodeSnippet';
import CodeTabset from 'documentation/components/CodeTabset';
import DemoBox from 'documentation/components/DemoBox';
import { Card, CardContent, CardTitle } from 'axiom/react';
import { Grid, GridCell } from 'axiom/react';
import { Tabset, Tab } from 'axiom/react';
import { breakpoints, gridGutters } from 'sass-vars';

export default class GridDocs extends Component {
  static imports = {
    sass: `@import 'axiom/sass/components/grid';`,
    jsx: `import { Grid, GridCell } from 'axiom/react';`,
  };

  static meta = {
    description: 'A modern mobile first flexbox grid system for content structure and layout.'
  };

  render() {
    return (
      <div>
        <Card>
          <CardTitle title="Basic Grid" />
          <CardContent>
            <p>By default all grid cells will attempt to fill an equal amount of
               spacing, and when going past the small breakpoint they will then
               become full width. Majority of the time it's likely to be the desired
               behaviour.</p>

            <Grid>
              <GridCell>
                <DemoBox>Fit / Full</DemoBox>
              </GridCell>
              <GridCell>
                <DemoBox>Fit / Full</DemoBox>
              </GridCell>
            </Grid>

            <CodeTabset>
              <CodeSnippet language="html">
                <Grid>
                   <GridCell>...</GridCell>
                </Grid>
              </CodeSnippet>
              <CodeSnippet language="jsx">{`
                <Grid>
                 <GridCell>...</GridCell>
                </Grid>
              `}</CodeSnippet>
            </CodeTabset>
          </CardContent>
        </Card>

        <Card>
          <CardTitle title="Gutter appearance modifiers" />
          <CardContent>
            <p>No gutters ... anywhere</p>
            <Grid gutters={false}>
              <GridCell>
                <DemoBox>Fit / Full</DemoBox>
              </GridCell>
              <GridCell>
                <DemoBox>Fit / Full</DemoBox>
              </GridCell>
            </Grid>

            <p>No vertical gutters</p>
            <Grid vGutters={false}>
              <GridCell>
                <DemoBox>Fit / Full</DemoBox>
              </GridCell>
              <GridCell>
                <DemoBox>Fit / Full</DemoBox>
              </GridCell>
            </Grid>

            <p>No horizontal gutters</p>
            <Grid hGutters={false}>
              <GridCell>
                <DemoBox>Fit / Full</DemoBox>
              </GridCell>
              <GridCell>
                <DemoBox>Fit / Full</DemoBox>
              </GridCell>
            </Grid>

            <CodeTabset>
              <CodeSnippet language="html">
                <Grid gutters={false} />
                <Grid vGutters={false} />
                <Grid hGutters={false} />
              </CodeSnippet>
              <CodeSnippet language="jsx">{`
                <Grid gutters={false} />
                <Grid vGutters={false} />
                <Grid hGutters={false} />
              `}</CodeSnippet>
            </CodeTabset>
          </CardContent>
        </Card>

        <Card>
          <CardTitle title="Gutter sizing modifiers" />
          <CardContent>
            {gridGutters.map(({id}) => {
              return (
                <Grid gutters={id} key={id}>
                  <GridCell>
                    <DemoBox>
                      {id} Gutters
                    </DemoBox>
                  </GridCell>
                  <GridCell>
                    <DemoBox>
                      {id} Gutters
                    </DemoBox>
                  </GridCell>
                </Grid>
              );
            })}

            <CodeTabset>
              <CodeSnippet language="html">
                {gridGutters.map(({id}) => {
                  return (
                    <Grid gutters={id} key={id} />
                  );
                })}
              </CodeSnippet>
              <CodeSnippet language="jsx">
                {gridGutters.reduce((prev, {id}) => `${prev}<Grid gutters="${id}" />`
                , '')}
              </CodeSnippet>
            </CodeTabset>
          </CardContent>
        </Card>

        <Card>
          <CardTitle title="Responsive modifier" />
          <CardContent>
            <p>By default all grid cells will stretch to full width at the lowest
               breakpoint - to prevent this from happening use  the responsive
               supressor class.</p>
            <Grid responsive={false}>
              <GridCell>
                <DemoBox>Always fits</DemoBox>
              </GridCell>
              <GridCell>
                <DemoBox>Always fits</DemoBox>
              </GridCell>
            </Grid>

            <CodeTabset>
              <CodeSnippet language="html">
                <Grid responsive={false} />
              </CodeSnippet>
              <CodeSnippet language="jsx">{`
                <Grid responsive={false} />
              `}</CodeSnippet>
            </CodeTabset>
          </CardContent>
        </Card>

        <Card>
          <CardTitle title="Grid cell flex size modifiers" />
          <CardContent>
            <p>You can tell a cell to always be full (100% width)...</p>

            <Grid>
              <GridCell full={true}>
                <DemoBox attention={true}>Full</DemoBox>
              </GridCell>
              <GridCell>
                <DemoBox>Auto</DemoBox>
              </GridCell>
            </Grid>

            <CodeTabset>
              <CodeSnippet language="html">
                <Grid>
                  <GridCell full={true} />
                </Grid>
              </CodeSnippet>
              <CodeSnippet language="jsx">{`
                <Grid>
                  <GridCell full={true} />
                </Grid>
              `}</CodeSnippet>
            </CodeTabset>

            <p>... or you can always tell a cell to shrink to it's contents.</p>

            <Grid>
              <GridCell shrink={true}>
                <DemoBox attention={true}>Shrink</DemoBox>
              </GridCell>
              <GridCell>
                <DemoBox>Auto</DemoBox>
              </GridCell>
            </Grid>

            <CodeTabset>
              <CodeSnippet language="html">
                <Grid>
                  <GridCell shrink={true} />
                </Grid>
              </CodeSnippet>
              <CodeSnippet language="jsx">{`
                <Grid>
                  <GridCell shrink={true} />
                </Grid>
              `}</CodeSnippet>
            </CodeTabset>
          </CardContent>
        </Card>

        <Card>
          <CardTitle title="Grid cell percentage size modifiers" />
          <CardContent>
            <p>You can use the standard 12 grid classes, but with flex these
               should rarely be needed.</p>

            <Grid>
              <GridCell sixth={true}>
                <DemoBox attention={true}>1/6</DemoBox>
              </GridCell>
              <GridCell>
                <DemoBox>Auto</DemoBox>
              </GridCell>
            </Grid>

            <Grid>
              <GridCell fifth={true}>
                <DemoBox attention={true}>1/5</DemoBox>
              </GridCell>
              <GridCell>
                <DemoBox>Auto</DemoBox>
              </GridCell>
            </Grid>

            <Grid>
              <GridCell quarter={true}>
                <DemoBox attention={true}>1/4</DemoBox>
              </GridCell>
              <GridCell>
                <DemoBox>Auto</DemoBox>
              </GridCell>
            </Grid>

            <Grid>
              <GridCell third={true}>
                <DemoBox attention={true}>1/3</DemoBox>
              </GridCell>
              <GridCell>
                <DemoBox>Auto</DemoBox>
              </GridCell>
            </Grid>

            <Grid>
              <GridCell half={true}>
                <DemoBox attention={true}>1/2</DemoBox>
              </GridCell>
              <GridCell>
                <DemoBox>Auto</DemoBox>
              </GridCell>
            </Grid>

            <CodeTabset>
              <CodeSnippet language="html">
                <Grid>
                  <GridCell sixth={true} />
                  <GridCell fifth={true} />
                  <GridCell quarter={true} />
                  <GridCell third={true} />
                  <GridCell half={true} />
                </Grid>
              </CodeSnippet>
              <CodeSnippet language="jsx">{`
                <Grid>
                  <GridCell sixth={true} />
                  <GridCell fifth={true} />
                  <GridCell quarter={true} />
                  <GridCell third={true} />
                  <GridCell half={true} />
                </Grid>
              `}</CodeSnippet>
            </CodeTabset>
          </CardContent>
        </Card>

        <Card>
          <CardTitle title="Grid size modifiers" />
          <CardContent>
            <p>You can set it at the grid level to apply globally to it's
               children cells.</p>

            <Grid full={true}>
              <GridCell>
                <DemoBox>Full</DemoBox>
              </GridCell>
              <GridCell>
                <DemoBox>Full</DemoBox>
              </GridCell>
            </Grid>

            <Grid fit={true}>
              <GridCell>
                <DemoBox>Fit</DemoBox>
              </GridCell>
              <GridCell>
                <DemoBox>Fit</DemoBox>
              </GridCell>
            </Grid>

            <CodeTabset>
              <CodeSnippet language="html">
                <Grid full={true} />
                <Grid fit={true} />
              </CodeSnippet>
              <CodeSnippet language="jsx">{`
                <Grid full={true} />
                <Grid fit={true} />
              `}</CodeSnippet>
            </CodeTabset>
          </CardContent>
        </Card>

        <Card>
          <CardTitle title="Responsive modifiers (cell level)" />
          <CardContent>
            <p>These can be controller per breakpoint by appending the breakpoint id
               to the end.</p>

            <Tabset>
              {breakpoints.map(({id}) => {
                return (
                  <Tab title={`Greater than ${id}`} key={id}>
                    <Grid responsive={false}>
                      <GridCell full={id}>
                        <DemoBox attention={true}>Full (&gt; {id})</DemoBox>
                      </GridCell>
                      <GridCell>
                        <DemoBox>Auto</DemoBox>
                      </GridCell>
                    </Grid>

                    <Grid responsive={false}>
                      <GridCell shrink={id}>
                        <DemoBox attention={true}>Shrink (&gt; {id})</DemoBox>
                      </GridCell>
                      <GridCell>
                        <DemoBox>Auto</DemoBox>
                      </GridCell>
                    </Grid>

                    <Grid responsive={false}>
                      <GridCell sixth={id}>
                        <DemoBox attention={true}>1/6 (&gt; {id})</DemoBox>
                      </GridCell>
                      <GridCell>
                        <DemoBox>Auto</DemoBox>
                      </GridCell>
                    </Grid>

                    <Grid responsive={false}>
                      <GridCell fifth={id}>
                        <DemoBox attention={true}>1/5 (&gt; {id})</DemoBox>
                      </GridCell>
                      <GridCell>
                        <DemoBox>Auto</DemoBox>
                      </GridCell>
                    </Grid>

                    <Grid responsive={false}>
                      <GridCell quarter={id}>
                        <DemoBox attention={true}>1/4 (&gt; {id})</DemoBox>
                      </GridCell>
                      <GridCell>
                        <DemoBox>Auto</DemoBox>
                      </GridCell>
                    </Grid>

                    <Grid responsive={false}>
                      <GridCell third={id}>
                        <DemoBox attention={true}>1/3 (&gt; {id})</DemoBox>
                      </GridCell>
                      <GridCell>
                        <DemoBox>Auto</DemoBox>
                      </GridCell>
                    </Grid>

                    <Grid responsive={false}>
                      <GridCell half={id}>
                        <DemoBox attention={true}>1/2 (&gt; {id})</DemoBox>
                      </GridCell>
                      <GridCell>
                        <DemoBox>Auto</DemoBox>
                      </GridCell>
                    </Grid>

                    <CodeTabset key={id}>
                      <CodeSnippet language="html">
                        <Grid>
                          <GridCell full={id} />
                          <GridCell shrink={id} />
                          <GridCell sixth={id} />
                          <GridCell fifth={id} />
                          <GridCell quarter={id} />
                          <GridCell third={id} />
                          <GridCell half={id} />
                        </Grid>
                      </CodeSnippet>
                      <CodeSnippet language="jsx">{`
                        <Grid>
                          <GridCell full="${id}" />
                          <GridCell shrink="${id}" />
                          <GridCell sixth="${id}" />
                          <GridCell fifth="${id}" />
                          <GridCell quarter="${id}" />
                          <GridCell third="${id}" />
                          <GridCell half="${id}" />
                        </Grid>
                      `}</CodeSnippet>
                    </CodeTabset>
                  </Tab>
                );
              })}
            </Tabset>
          </CardContent>
        </Card>

        <Card>
          <CardTitle title="Responsive modifiers (grid level)" />
          <CardContent>
            <p>As well as setting at a per cell level the fit and full behaviour can
               be set at the grid level for each breakpoint</p>

            {breakpoints.map(({id}) => {
              return (
                <Grid responsive={false} full={id} key={id}>
                  <GridCell shrink={true}>
                    <DemoBox attention={true}>Full (&gt; {id})</DemoBox>
                  </GridCell>
                  <GridCell>
                    <DemoBox>Full (&gt; {id})</DemoBox>
                  </GridCell>
                </Grid>
              );
            })}

            {breakpoints.map(({id}) => {
              return (
                <Grid responsive={false} fit={id} key={id}>
                  <GridCell shrink={true}>
                    <DemoBox attention={true}>Fit (&gt; {id})</DemoBox>
                  </GridCell>
                  <GridCell>
                    <DemoBox>Fit (&gt; {id})</DemoBox>
                  </GridCell>
                </Grid>
              );
            })}

            <CodeTabset>
              <CodeSnippet language="html">
                {breakpoints.map(({id}) => {
                  return <Grid full={id} key={id} />;
                })}
                {breakpoints.map(({id}) => {
                  return <Grid full={id} key={id} />;
                })}
              </CodeSnippet>
              <CodeSnippet language="jsx">{`
                ${breakpoints.reduce((prev, {id}) => {
                  return `${prev}<Grid full="${id}" />`;
                }, '')}
                ${breakpoints.reduce((prev, {id}) => {
                  return `${prev}<Grid fit="${id}" />`;
                }, '')}
              `}</CodeSnippet>
            </CodeTabset>
          </CardContent>
        </Card>

        <Card>
          <CardTitle title="Vertical cell alignment modifiers (Grid level)" />
          <CardContent>
            <p>Vertical cell alignment can be applied to the whole row, by default
               cells will always stick to the stop.</p>

            <p>Top aligned</p>
            <Grid className="dm-demo-container" responsive={false} vAlign="top">
              <GridCell>
                <DemoBox>Top</DemoBox>
              </GridCell>
              <GridCell>
                <DemoBox>Top</DemoBox>
              </GridCell>
              <GridCell>
                <DemoBox>Top</DemoBox>
              </GridCell>
            </Grid>

            <p>Middle aligned</p>
            <Grid className="dm-demo-container" responsive={false} vAlign="middle">
              <GridCell>
                <DemoBox>Middle</DemoBox>
              </GridCell>
              <GridCell>
                <DemoBox>Middle</DemoBox>
              </GridCell>
              <GridCell>
                <DemoBox>Middle</DemoBox>
              </GridCell>
            </Grid>

            <p>Bottom aligned</p>
            <Grid className="dm-demo-container" responsive={false} vAlign="bottom">
              <GridCell>
                <DemoBox>Bottom</DemoBox>
              </GridCell>
              <GridCell>
                <DemoBox>Bottom</DemoBox>
              </GridCell>
              <GridCell>
                <DemoBox>Bottom</DemoBox>
              </GridCell>
            </Grid>

            <CodeTabset>
              <CodeSnippet language="html">
                <Grid vAlign="top" />
                <Grid vAlign="middle" />
                <Grid vAlign="bottom" />
              </CodeSnippet>
              <CodeSnippet language="jsx">{`
                <Grid vAlign="top" />
                <Grid vAlign="middle" />
                <Grid vAlign="bottom" />
              `}</CodeSnippet>
            </CodeTabset>
          </CardContent>
        </Card>

        <Card>
          <CardTitle title="Vertical cell alignment modifiers (Grid cell level)" />
          <CardContent>
            <p>Vertical alignment can also be applied at a cell level</p>
            <Grid className="dm-demo-container" responsive={false}>
              <GridCell vAlign="top">
                <DemoBox>Top</DemoBox>
              </GridCell>
              <GridCell vAlign="middle">
                <DemoBox>Middle</DemoBox>
              </GridCell>
              <GridCell vAlign="bottom">
                <DemoBox>Bottom</DemoBox>
              </GridCell>
            </Grid>

            <CodeTabset>
              <CodeSnippet language="html">
                <Grid>
                  <GridCell vAlign="top" />
                  <GridCell vAlign="middle" />
                  <GridCell vAlign="bottom" />
                </Grid>
              </CodeSnippet>
              <CodeSnippet language="jsx">{`
                <Grid>
                  <GridCell vAlign="top" />
                  <GridCell vAlign="middle" />
                  <GridCell vAlign="bottom" />
                </Grid>
              `}</CodeSnippet>
            </CodeTabset>
          </CardContent>
        </Card>

        <Card>
          <CardTitle title="Horizontal cell alignment modifiers" />
          <CardContent>
            <p>Align left</p>
            <Grid hAlign="left">
              <GridCell shrink={true}>
                <DemoBox>Left</DemoBox>
              </GridCell>
              <GridCell shrink={true}>
                <DemoBox>Left</DemoBox>
              </GridCell>
              <GridCell shrink={true}>
                <DemoBox>Left</DemoBox>
              </GridCell>
            </Grid>

            <p>Align center</p>
            <Grid hAlign="center">
              <GridCell shrink={true}>
                <DemoBox>Center</DemoBox>
              </GridCell>
              <GridCell shrink={true}>
                <DemoBox>Center</DemoBox>
              </GridCell>
              <GridCell shrink={true}>
                <DemoBox>Center</DemoBox>
              </GridCell>
            </Grid>

            <p>Align right</p>
            <Grid hAlign="right">
              <GridCell shrink={true}>
                <DemoBox>Right</DemoBox>
              </GridCell>
              <GridCell shrink={true}>
                <DemoBox>Right</DemoBox>
              </GridCell>
              <GridCell shrink={true}>
                <DemoBox>Right</DemoBox>
              </GridCell>
            </Grid>

            <p>Align around</p>
            <Grid hAlign="around">
              <GridCell shrink={true}>
                <DemoBox>Around</DemoBox>
              </GridCell>
              <GridCell shrink={true}>
                <DemoBox>Around</DemoBox>
              </GridCell>
              <GridCell shrink={true}>
                <DemoBox>Around</DemoBox>
              </GridCell>
            </Grid>

            <p>Align between</p>
            <Grid hAlign="between">
              <GridCell shrink={true}>
                <DemoBox>Between</DemoBox>
              </GridCell>
              <GridCell shrink={true}>
                <DemoBox>Between</DemoBox>
              </GridCell>
              <GridCell shrink={true}>
                <DemoBox>Between</DemoBox>
              </GridCell>
            </Grid>

            <CodeTabset>
              <CodeSnippet language="html">
                <Grid hAlign="left" />
                <Grid hAlign="center" />
                <Grid hAlign="right" />
                <Grid hAlign="around" />
                <Grid hAlign="between" />
              </CodeSnippet>
              <CodeSnippet language="jsx">{`
                <Grid hAlign="left" />
                <Grid hAlign="center" />
                <Grid hAlign="right" />
                <Grid hAlign="around" />
                <Grid hAlign="between" />
              `}</CodeSnippet>
            </CodeTabset>
          </CardContent>
        </Card>
      </div>
    );
  }
}
