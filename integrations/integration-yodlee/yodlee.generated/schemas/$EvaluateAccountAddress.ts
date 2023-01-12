/* istanbul ignore file */
/* tslint:disable */

export const $EvaluateAccountAddress = {
  properties: {
    zip: {
      type: 'string',
    },
    country: {
      type: 'string',
    },
    address3: {
      type: 'string',
    },
    address2: {
      type: 'string',
    },
    city: {
      type: 'string',
    },
    sourceType: {
      type: 'string',
    },
    address1: {
      type: 'string',
    },
    street: {
      type: 'string',
      isRequired: true,
    },
    state: {
      type: 'string',
    },
    type: {
      type: 'Enum',
    },
  },
} as const
