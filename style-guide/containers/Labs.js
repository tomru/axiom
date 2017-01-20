import React, { Component } from 'react';
import {
  ButtonGroup,
  Button,
  CardList,
  CardListItem,
  Card,
  CheckBoxGroup,
  CheckBox,
  Grid,
  GridCell,
  Italic,
  Label,
  LabelGroup,
  Link,
  Strong,
  Paragraph,
  TextInput,
  mediumDateWithTime,
  Login,
} from 'bw-axiom';

if (__INCLUDE_CSS__) {
  require('./Labs.scss');
}

const DATA = [
  {
    date: '2017-01-19T18:06:44.708Z',
    status: 'Success',
    project: 'bw‑dev‑cloud‑platform0',
    env: 'Production',
    username: 'Andy Hume',
    description: 'Updates remaining configs to new DNS/IP format',
    ref: '333f593',
  },
  {
    date: '2017-01-19T12:49:44.708Z',
    status: 'Failed',
    project: 'bw‑dev‑cloud‑analytics0',
    env: 'Stage',
    username: 'Chris Skilton',
    description: 'pipeline(s) triggered by deploy-hook (gclouder/prod-analytics0) [ZWFjYTRh]',
    ref: 'de6c67e',
  },
  {
    date: '2017-01-19T12:24:44.708Z',
    status: 'Success',
    project: 'bw‑prod-vizia0',
    env: 'Production',
    username: 'Andy Hume',
    description: 'Adds tokens. DNS/IP to stage Gemfile Gemfile.lock Guardfile README.md assets bin ci conf lib spec test0 Updates static_ips config format',
    ref: 'fd3a7c4',
  },
];

const APPLICATIONS = [
  'Audiences', 'Axiom', 'Analytics', 'Viza', 'GCP',
];

export default class Labs extends Component {
  render() {
    return (
      <div className="dm-labs">
        <div className="dm-labs__canvas" style={ { minHeight: 590, width: 800 } }>



        </div>
      </div>
    );
  }
}
