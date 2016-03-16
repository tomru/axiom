import ColorPalette from 'documentation/docs/core-design/ColorPalette';
import UiColors from 'documentation/docs/core-design/UiColors';
import DataFormats from 'documentation/docs/core-design/DataFormats';
import Avatar from 'documentation/docs/ui-components/Avatar';
import Button from 'documentation/docs/ui-components/Button';
import Card from 'documentation/docs/ui-components/Card';
import Form from 'documentation/docs/ui-components/Form';
import Grid from 'documentation/docs/ui-components/Grid';
import IconList from 'documentation/docs/ui-components/IconList';
import Icon from 'documentation/docs/ui-components/Icon';
import Label from 'documentation/docs/ui-components/Label';
import Table from 'documentation/docs/ui-components/Table';
import Tabset from 'documentation/docs/ui-components/Tabset';
import Typography from 'documentation/docs/ui-components/Typography';
import Emblem from 'documentation/docs/layouts/Emblem';
import Established from 'documentation/docs/layouts/Established';

export const componentMap = {
  '/docs/core-design/color-palette': ColorPalette,
  '/docs/core-design/ui-colors': UiColors,
  '/docs/core-design/data-formats': DataFormats,
  '/docs/ui-components/avatar': Avatar,
  '/docs/ui-components/button': Button,
  '/docs/ui-components/card': Card,
  '/docs/ui-components/form': Form,
  '/docs/ui-components/grid': Grid,
  '/docs/ui-components/icons/list': IconList,
  '/docs/ui-components/icons/:iconId': Icon,
  '/docs/ui-components/label': Label,
  '/docs/ui-components/table': Table,
  '/docs/ui-components/tabset': Tabset,
  '/docs/ui-components/typography': Typography,
  '/docs/layouts/emblem': Emblem,
  '/docs/layouts/established': Established,
};

export default [{
  name: 'Core Design',
  path: 'core-design',
  children: [{
    name: 'Color Palette',
    path: 'color-palette',
    to: '/docs/core-design/color-palette',
    component: '/docs/core-design/color-palette',
  }, {
    name: 'UI Colors',
    path: 'ui-colors',
    to: '/docs/core-design/ui-colors',
    component: '/docs/core-design/ui-colors',
  }, {
    name: 'Data Formats',
    path: 'data-formats',
    to: '/docs/core-design/data-formats',
    component: '/docs/core-design/data-formats',
  }]
}, {
  name: 'UI Components',
  path: 'ui-components',
  children: [{
    name: 'Avatar',
    path: 'avatar',
    to: '/docs/ui-components/avatar',
    component: '/docs/ui-components/avatar',
  }, {
    name: 'Button',
    path: 'button',
    to: '/docs/ui-components/button',
    component: '/docs/ui-components/button',
  }, {
    name: 'Card',
    path: 'card',
    to: '/docs/ui-components/card',
    component: '/docs/ui-components/card',
  }, {
    name: 'Form',
    path: 'form',
    to: '/docs/ui-components/form',
    component: '/docs/ui-components/form',
  }, {
    name: 'Grid',
    path: 'grid',
    to: '/docs/ui-components/grid',
    component: '/docs/ui-components/grid',
  }, {
    name: 'Icons',
    path: 'icons',
    to: '/docs/ui-components/icons',
    children: [{
      name: 'Icons',
      hidden: true,
      to: '/docs/ui-components/icons',
      component: '/docs/ui-components/icons/list',
    }, {
      hidden: true,
      searchable: false,
      path: ':iconId',
      to: '/docs/ui-components/icons/:iconId',
      component: '/docs/ui-components/icons/:iconId',
    }]
  }, {
    name: 'Label',
    path: 'label',
    to: '/docs/ui-components/label',
    component: '/docs/ui-components/label',
  }, {
    name: 'Table',
    path: 'table',
    to: '/docs/ui-components/table',
    component: '/docs/ui-components/table',
  }, {
    name: 'Tabset',
    path: 'tabset',
    to: '/docs/ui-components/tabset',
    component: '/docs/ui-components/tabset',
  }, {
    name: 'Typography',
    path: 'typography',
    to: '/docs/ui-components/typography',
    component: '/docs/ui-components/typography',
  }],
}, {
  name: 'Layouts',
  path: 'layouts',
  children: [{
    name: 'Emblem',
    path: 'emblem',
    to: '/docs/layouts/emblem',
    component: '/docs/layouts/emblem',
  }, {
    name: 'Established',
    path: 'established',
    to: '/docs/layouts/established',
    component: '/docs/layouts/established',
  }]
}];
