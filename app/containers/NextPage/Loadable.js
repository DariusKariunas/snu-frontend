/**
 *
 * Asynchronously loads the component for NextPage
 *
 */

import loadable from 'loadable-components';

export default loadable(() => import('./index'));
