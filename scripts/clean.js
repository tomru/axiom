/* eslint-disable no-console */
import del from 'del';
import * as config from '../config';

export default function clean() {
  console.log('WEBACK -> Cleaning: started...');

  return del([`${config.paths.output}/**`, `!${config.paths.output}`])
    .then(() => console.log('WEBACK -> Cleaning: complete'));
}
