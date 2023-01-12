import type {Amount, AmountMap} from '@usevenice/util'
import {AM} from '@usevenice/util'

export function computeTrialBalance(
  postings: Array<{amount?: Amount | null; date: ISODateTime | ISODate}>,
) {
  const balanceByDate: Record<ISODate | ISODateTime, AmountMap> = {}
  const balance = AM({})
  for (const posting of postings) {
    if (!posting.amount) {
      continue
    }
    AM.incrInPlace(balance, posting.amount)
    balanceByDate[posting.date] = AM.incrInPlace(
      balanceByDate[posting.date] ?? {},
      posting.amount,
    )
  }
  return {balanceByDate, balance}
}
