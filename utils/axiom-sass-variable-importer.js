import createSassVariableImporter from './sass-variable-importer';
import { AXIOM_SASS_VARIABLE_FORMAT } from './_config';

export default (aliases) => createSassVariableImporter(AXIOM_SASS_VARIABLE_FORMAT, aliases);
