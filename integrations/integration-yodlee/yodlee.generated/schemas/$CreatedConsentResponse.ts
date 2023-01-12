/* istanbul ignore file */
/* tslint:disable */

export const $CreatedConsentResponse = {
  properties: {
    consent: {
      type: 'array',
      contains: {
        type: 'CreateConsent',
      },
      isReadOnly: true,
    },
  },
} as const
