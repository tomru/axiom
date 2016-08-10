import { transitionTimeBase } from '../../design-patterns/animations/_vars';

module.exports = {
  dialogSizes: [
    { id: 'sm', width: '400px', default: true },
    { id: 'md', width: '600px' },
    { id: 'lg', width: '800px' },
  ],
  dialogAnimationDuration: transitionTimeBase,
  zIndexDialog: 900,
}
