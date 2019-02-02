/**
 *
 * Asynchronously loads the component for Map
 *
 */

import loadable from 'loadable-components';

export default loadable(() => import('./index'));
