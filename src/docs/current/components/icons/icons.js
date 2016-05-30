import { Icon } from 'bw-axiom/react';
import IconExample from './IconExample';

export default {
  id: 'icons',
  path: 'icons',
  group: 'components',
  components: [{
    Component: Icon,
  }],
  imports: {
    sass: ['components/icon'],
  },
  Example: IconExample,
};
