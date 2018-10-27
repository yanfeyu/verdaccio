/**
 * @prettier
 * @flow
 */

import { defineMessages } from 'react-intl';

const messages = defineMessages({
  title: {
    id: 'components.help.title',
    defaultMessage: 'No Package Published Yet',
  },
  subTitle: {
    id: 'components.help.subTitle',
    defaultMessage: 'To publish your first package just:',
  },
  firstStep: {
    id: 'components.help.firstStep',
    defaultMessage: '1. Login',
  },
  secondStep: {
    id: 'components.help.secondStep',
    defaultMessage: '2. Publish',
  },
  thirdStep: {
    id: 'components.help.thirdStep',
    defaultMessage: '3. Refresh this page!',
  },
  npmRegistry: {
    id: 'components.help.npmRegisrtry',
    defaultMessage: 'npm publish --registry {registryURL}',
  },
});

export default messages;
