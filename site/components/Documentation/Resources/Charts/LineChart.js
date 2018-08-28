import React, { Component } from 'react';
import { LineChart } from '@brandwatch/axiom-charts';
import {
  DocumentationApi,
  DocumentationContent,
  DocumentationShowCase,
} from '@brandwatch/axiom-documentation-viewer';
import DropdownContext from './DropdownContext';
import TooltipContext from './TooltipContext';
import { lineChartData, lineChartKey } from './chartData';

export default class Documentation extends Component {
  constructor(props) {
    super(props);
    this.state = { lineChartData };
  }

  rotateData() {
    const { lineChartData } = this.state;
    if (lineChartData && lineChartData.length) {
      this.setState({ lineChartData: [lineChartData[2], lineChartData[0], lineChartData[1] ] });
    }
  }

  render() {
    const { lineChartData } = this.state;

    return (
      <DocumentationContent>
        <DocumentationShowCase>
          <div onClick={ () => this.rotateData() }>
            <LineChart
                chartKey={ lineChartKey }
                data={ lineChartData }
                height="12rem"
                lower={ 0 }
                upper={ 30 }
                xAxisLabels={ () => [
                  'Dec 1',
                  'Dec 3',
                  'Dec 5',
                  'Dec 7',
                  'Dec 9',
                  'Dec 11',
                  'Dec 13',
                  'Dec 15',
                  'Dec 17',
                  'Dec 19',
                  'Dec 21',
                  'Dec 23',
                  'Dec 25',
                ] }
                xAxisTitle="Previous 30 days"
                yAxisLabels={ [
                  { label: '0M', value: 0 },
                  { label: '10M', value: 10 },
                  { label: '20M', value: 20 },
                  { label: '30M', value: 30 },
                ] }
                yAxisTitle="Volume of Total Mentions Daily" />
          </div>
        </DocumentationShowCase>

        <DocumentationApi components={ [
          require('!!axiom-documentation-loader!@brandwatch/axiom-charts/src/LineChart/LineChart'),
        ] } />
      </DocumentationContent>
    );
  }
}
