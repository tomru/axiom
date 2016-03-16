import React, { Component } from 'react';
import CodeSnippet from 'documentation/components/CodeSnippet';
import CodeTabset from 'documentation/components/CodeTabset';
import { formatNumber } from 'axiom/common/format-utils';
import { Card, CardContent, CardTitle } from 'axiom/react';
import { Table, Thead, Tbody, Tr, Th, Td } from 'axiom/react';

export default class TableDocs extends Component {
  static imports = {
    sass: `@import 'axiom/sass/components/table';`,
    jsx: `import { Table, Thead, Tbody, Tr, Th, Td } from 'axiom/react';`,
  };

  static meta = {
    description: 'Tables, exactly what you think - they have rows, cells and headings and are used to show tabular data.'
  };

  render() {
    const randomNumber = () => ~~(Math.random() * 10 * 100000);
    const headers = [
      { name: 'Lorem', isNumber: false },
      { name: 'Ipsum', isNumber: true },
      { name: 'Dolar', isNumber: true, sorting: 1 },
      { name: 'Sit Amet', isNumber: true, sorting: -1 },
    ];
    const rows = [
      ['Consectetur adipiscing elit', randomNumber(), randomNumber(), randomNumber()],
      ['Fusce auctor dapibus', randomNumber(), randomNumber(), randomNumber()],
      ['Duis feugiat condimentum velit', randomNumber(), randomNumber(), randomNumber()],
      ['Velit campore', randomNumber(), randomNumber(), randomNumber()],
    ];

    const tableContent = () => {
      return [
        <Thead key="thead">
          <Tr>
            {headers.map(({name, isNumber, sorting}, index) => {
              return (
                <Th key={index} isNumber={isNumber} sorting={sorting}>
                  {name}
                </Th>
              );
            })}
          </Tr>
        </Thead>,
        <Tbody key="tbody">
          {rows.map((cells, rindex) => {
            return (
              <Tr key={rindex}>
                {cells.map((cell, cindex) => {
                  return (
                    <Td key={cindex} isNumber={headers[cindex].isNumber}>
                      {headers[cindex].isNumber ? formatNumber(cell) : cell}
                    </Td>
                  );
                })}
              </Tr>
            );
          })}
        </Tbody>
      ];
    }

    return (
      <div>
        <Card>
          <CardTitle title="Standard table" />
          <CardContent>
            <Table>
              {tableContent()}
            </Table>

            <CodeTabset>
              <CodeSnippet language="html">
                <Table>
                  <Thead>
                    <Tr>
                      <Th />
                    </Tr>
                  </Thead>
                  <Tbody>
                    <Tr>
                      <Td />
                    </Tr>
                  </Tbody>
                </Table>
              </CodeSnippet>
              <CodeSnippet language="jsx">{`
                <Table>
                  <Thead>
                    <Tr>
                      <Th />
                    </Tr>
                  </Thead>
                  <Tbody>
                    <Tr>
                      <Td />
                    </Tr>
                  </Tbody>
                </Table>
              `}</CodeSnippet>
            </CodeTabset>
          </CardContent>
        </Card>

         <Card>
          <CardTitle title="Stripey table" />
          <CardContent>
            <Table striped={true}>
              {tableContent()}
            </Table>

            <CodeTabset>
              <CodeSnippet language="html">
                <Table striped={true} />
              </CodeSnippet>
              <CodeSnippet language="jsx">{`
                <Table striped={true} />
              `}
              </CodeSnippet>
            </CodeTabset>
          </CardContent>
        </Card>

        <Card>
          <CardTitle title="Bordered tables" />
          <CardContent>
            <h5>Horizontal borders</h5>
            <Table borders="h" striped={true}>
              {tableContent()}
            </Table>

            <CodeTabset>
              <CodeSnippet language="html">
                <Table borders="h" />
              </CodeSnippet>
              <CodeSnippet language="jsx">{`
                <Table borders="h" />
              `}
              </CodeSnippet>
            </CodeTabset>

            <h5>Vertical borders</h5>
            <Table borders="v" striped={true}>
              {tableContent()}
            </Table>

            <CodeTabset>
              <CodeSnippet language="html">
                <Table borders="v" />
              </CodeSnippet>
              <CodeSnippet language="jsx">{`
                <Table borders="v" />
              `}
              </CodeSnippet>
            </CodeTabset>

            <h5>Vertical and Horizontal borders</h5>
            <Table borders={true} striped={true}>
              {tableContent()}
            </Table>

            <CodeTabset>
              <CodeSnippet language="html">
                <Table borders={true} />
              </CodeSnippet>
              <CodeSnippet language="jsx">{`
                <Table borders={true} />
              `}
              </CodeSnippet>
            </CodeTabset>
          </CardContent>
        </Card>

        <Card>
          <CardTitle title="Sortable table" />
          <CardContent>
            <Table sortable={true} borders={true} striped={true}>
              {tableContent()}
            </Table>

            <CodeTabset>
              <CodeSnippet language="html">
                <Table sortable={true}>
                  <Thead>
                    <Tr>
                      <Th sorting={1} />
                      <Th sorting={-1} />
                    </Tr>
                  </Thead>
                </Table>
              </CodeSnippet>
              <CodeSnippet language="jsx">{`
                <Table sortable={true}>
                  <Thead>
                    <Tr>
                      <Th sorting={1}/>
                      <Th sorting={-1}/>
                    </Tr>
                  </Thead>
                </Table>
              `}
              </CodeSnippet>
            </CodeTabset>
          </CardContent>
        </Card>
      </div>
    );
  }
}
