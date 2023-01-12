/* istanbul ignore file */
/* tslint:disable */

export const $HoldingSecuritiesResponse = {
  properties: {
    holding: {
      type: 'array',
      contains: {
        type: 'SecurityHolding',
      },
      isReadOnly: true,
    },
  },
} as const
