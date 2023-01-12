/* istanbul ignore file */
/* tslint:disable */

export const $ConsentResponse = {
  properties: {
    consent: {
      type: 'array',
      contains: {
        type: 'Consent',
      },
      isReadOnly: true,
    },
  },
} as const
