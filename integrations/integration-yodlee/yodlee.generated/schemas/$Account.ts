/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $Account = {
  properties: {
    availableCash: {
      type: 'Money',
      description: `The amount that is available for an ATM withdrawal, i.e., the cash available after deducting the amount that is already withdrawn from the total cash limit. (totalCashLimit-cashAdvance= availableCash)<br><b>Additional Details:</b> The available cash amount at the account-level can differ from the available cash at the statement-level, as the information in the aggregated card account data provides more up-to-date information.<br><b>Aggregated / Manual</b>: Aggregated<br><b>Applicable containers</b>: creditCard<br><b>Endpoints</b>:<br><ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul>`,
      isReadOnly: true,
    },
    includeInNetWorth: {
      type: 'boolean',
      description: `Used to determine  whether an account to be considered in the networth calculation.<br><br><b>Aggregated / Manual</b>: Aggregated<br><b>Applicable containers</b>: bank,creditCard,loan,investment,insurance,realEstate,otherAssets,otherLiabilities<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul>`,
      isReadOnly: true,
    },
    moneyMarketBalance: {
      type: 'Money',
      description: `The amount in the money market fund or its equivalent such as bank deposit programs.<br><b>Note:</b> The money market balance field is only applicable to brokerage related accounts.<br><br><b>Aggregated / Manual</b>: Aggregated<br><b>Applicable containers</b>: investment<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul>`,
      isReadOnly: true,
    },
    enrollmentDate: {
      type: 'string',
      description: `Date on which the user is enrolled on the rewards program.<br><br><b>Aggregated / Manual</b>: Aggregated<br><b>Applicable containers</b>: reward<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul>`,
      isReadOnly: true,
    },
    estimatedDate: {
      type: 'string',
      description: `The date on which the home value was estimated.<br><br><b>Aggregated / Manual</b>: Manual<br><b>Applicable containers</b>: realEstate<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul>`,
      isReadOnly: true,
    },
    memo: {
      type: 'string',
      description: `The additional description or notes given by the user.<br><br><b>Aggregated / Manual</b>: Both <br><b>Applicable containers</b>: All containers<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul>`,
      isReadOnly: true,
    },
    guarantor: {
      type: 'string',
      description: `A nonprofit or state organization that works with lender, servicer, school, and the Department of Education to help successfully repay Federal Family Education Loan Program (FFELP) loans. If FFELP student loans default, the guarantor takes ownership of them.<br><br><b>Aggregated / Manual</b>: Aggregated<br><b>Applicable containers</b>: loan<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul>`,
      isReadOnly: true,
    },
    interestPaidLastYear: {
      type: 'Money',
      description: `Interest paid in last calendar year.<br><b>Applicable containers</b>: loan<br><b>Aggregated / Manual</b>: Aggregated<br><b>Endpoints</b>:<br><ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul>`,
      isReadOnly: true,
    },
    lastUpdated: {
      type: 'string',
      description: `The date time the account information was last retrieved from the provider site and updated in the Yodlee system.<br><br><b>Aggregated / Manual</b>: Both <br><b>Applicable containers</b>: All containers<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul>`,
      isReadOnly: true,
    },
    balance: {
      type: 'Money',
      description: `The total account value. <br><b>Additional Details:</b><br><b>Bank:</b> available balance or current balance.<br><b>Credit Card:</b> running Balance.<br><b>Investment:</b> The total balance of all the investment account, as it appears on the FI site.<br><b>Insurance:</b> CashValue or amountDue<br><b>Loan:</b> principalBalance<br><b>Applicable containers</b>: bank, creditCard, investment, insurance, loan, otherAssets, otherLiabilities, realEstate<br><b>Aggregated / Manual</b>: Both <br><b>Endpoints</b>:<br><ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul>`,
      isReadOnly: true,
    },
    homeInsuranceType: {
      type: 'Enum',
      isReadOnly: true,
    },
    id: {
      type: 'number',
      description: `The primary key of the account resource and the unique identifier for the account.<br><br><b>Aggregated / Manual</b>: Both <br><b>Applicable containers</b>: All containers<br><b>Endpoints</b>:<ul><li>GET accounts </li><li>GET accounts/{accountId}</li><li>GET investmentOptions</li><li>GET accounts/historicalBalances</li><li>POST accounts</li><li>GET dataExtracts/userData</li></ul>`,
      isReadOnly: true,
      format: 'int64',
    },
    cash: {
      type: 'Money',
      description: `The amount that is available for immediate withdrawal or the total amount available to purchase securities in a brokerage or investment account.<br><b>Note:</b> The cash balance field is only applicable to brokerage related accounts.<br><br><b>Aggregated / Manual</b>: Aggregated<br><b>Applicable containers</b>: investment<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul>`,
      isReadOnly: true,
    },
    totalCreditLine: {
      type: 'Money',
      description: `Total credit line is the amount of money that can be charged to a credit card. If credit limit of $5,000 is issued on a credit card, the total charges on the card cannot exceed this amount.<br><br><b>Aggregated / Manual</b>: Aggregated<br><b>Applicable containers</b>: creditCard<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul>`,
      isReadOnly: true,
    },
    providerName: {
      type: 'string',
      description: `Service provider or institution name where the account originates. This belongs to the provider resource.<br><br><b>Aggregated / Manual</b>: Both <br><b>Applicable containers</b>: All containers<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul>`,
      isReadOnly: true,
    },
    valuationType: {
      type: 'Enum',
      isReadOnly: true,
    },
    marginBalance: {
      type: 'Money',
      description: `The amount of borrowed funds used to purchase securities.<br><b>Note</b>: Margin balance is displayed only if the brokerage account is approved for margin. The margin balance field is only applicable to brokerage related accounts.<br><br><b>Aggregated / Manual</b>: Aggregated<br><b>Applicable containers</b>: investment<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul>`,
      isReadOnly: true,
    },
    apr: {
      type: 'number',
      description: `The annual percentage rate (APR) is the yearly rate of interest on the credit card account.<br><b>Additional Details:</b> The yearly percentage rate charged when a balance is held on a credit card. This rate of interest is applied every month on the outstanding credit card balance.<br><b>Aggregated / Manual</b>: Aggregated<br><b>Applicable containers</b>: creditCard<br><b>Endpoints</b>:<br><ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul>`,
      isReadOnly: true,
      format: 'double',
    },
    availableCredit: {
      type: 'Money',
      description: `<br><b>Credit Card:</b> Amount that is available to spend on the credit card. It is usually the Total credit line- Running balance- pending charges. <br><b>Loan:</b> The unused portion of  line of credit, on a revolving loan (such as a home-equity line of credit).<br><b>Additional Details:</b><br><b>Note:</b> The available credit amount at the account-level can differ from the available credit field at the statement-level, as the information in the aggregated card account data provides more up-to-date information.<br><br><b>Aggregated / Manual</b>: Aggregated<br><b>Applicable containers</b>: creditCard, loan<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul>`,
      isReadOnly: true,
    },
    currentBalance: {
      type: 'Money',
      description: `The balance in the account that is available at the beginning of the business day; it is equal to the ledger balance of the account.<br><br><b>Aggregated / Manual</b>: Aggregated<br><b>Applicable containers</b>: bank<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul>`,
      isReadOnly: true,
    },
    isManual: {
      type: 'boolean',
      description: `Indicates if an account is aggregated from a site or it is a manual account i.e. account information manually provided by the user.<br><b>Aggregated / Manual</b>: Both <br><b>Applicable containers</b>: All containers<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul>`,
      isReadOnly: true,
    },
    profile: {
      type: 'AccountProfile',
      description: `Profile information of the account.<br><br><b>Aggregated / Manual</b>: Aggregated<br><b>Applicable containers</b>: bank<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li></ul>`,
      isReadOnly: true,
    },
    escrowBalance: {
      type: 'Money',
      description: `The amount a mortgage company holds to pay a consumer's non-mortgage related expenses like insurance and property taxes. <br><b>Additional Details:</b><br><b>Note:</b> The escrow balance field is only applicable to the mortgage account type.<br><br><b>Aggregated / Manual</b>: Aggregated<br><b>Applicable containers</b>: loan<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul>`,
      isReadOnly: true,
    },
    nextLevel: {
      type: 'string',
      description: `The eligible next level of the rewards program.<br><br><b>Aggregated / Manual</b>: Aggregated<br><b>Applicable containers</b>: reward<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul>`,
      isReadOnly: true,
    },
    classification: {
      type: 'Enum',
      isReadOnly: true,
    },
    loanPayoffAmount: {
      type: 'Money',
      description: `The amount to be paid to close the loan account, i.e., the total amount required to meet a borrower's obligation on a loan.<br><br><b>Aggregated / Manual</b>: Aggregated<br><b>Applicable containers</b>: loan<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul>`,
      isReadOnly: true,
    },
    interestRateType: {
      type: 'Enum',
      isReadOnly: true,
    },
    loanPayByDate: {
      type: 'string',
      description: `The date by which the payoff amount should be paid.<br><br><b>Aggregated / Manual</b>: Aggregated<br><b>Applicable containers</b>: loan<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul>`,
      isReadOnly: true,
    },
    faceAmount: {
      type: 'Money',
      description: `The amount stated on the face of a consumer's policy that will be paid in the event of his or her death or any other event as stated in the insurance policy. The face amount is also referred to as the sum insured or maturity value in India.<br><b>Note:</b> The face amount field is applicable only to life insurance.<br><br><b>Aggregated / Manual</b>: Aggregated<br><b>Applicable containers</b>: insurance<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul>`,
      isReadOnly: true,
    },
    policyFromDate: {
      type: 'string',
      description: `The date the insurance policy began.<br><b>Aggregated / Manual</b>: Aggregated<br><b>Applicable containers</b>: insurance<br><b>Endpoints</b>:<br><ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul>`,
      isReadOnly: true,
    },
    premiumPaymentTerm: {
      type: 'string',
      description: `The number of years for which premium payments have to be made in a policy.<br><br><b>Aggregated / Manual</b>: Aggregated<br><b>Applicable containers</b>: insurance<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul>`,
      isReadOnly: true,
    },
    policyTerm: {
      type: 'string',
      description: `The duration for which the policy is valid or in effect. For example, one year, five years, etc.<br><b>Aggregated / Manual</b>: Aggregated<br><b>Applicable containers</b>: insurance<br><b>Endpoints</b>:<br><ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul>`,
      isReadOnly: true,
    },
    repaymentPlanType: {
      type: 'Enum',
      isReadOnly: true,
    },
    aggregatedAccountType: {
      type: 'string',
      description: `The type of account that is aggregated.`,
      isReadOnly: true,
    },
    availableBalance: {
      type: 'Money',
      description: `The balance in the account that is available for spending. For checking accounts with overdraft, available balance may include overdraft amount, if end site adds overdraft balance to available balance.<br><b>Applicable containers</b>: bank, investment<br><b>Aggregated / Manual</b>: Aggregated<br><b>Endpoints</b>:<br><ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul>`,
      isReadOnly: true,
    },
    accountStatus: {
      type: 'Enum',
      isReadOnly: true,
    },
    lifeInsuranceType: {
      type: 'Enum',
      isReadOnly: true,
    },
    fullAccountNumber: {
      type: 'string',
      description: `Full account number of the account that is included only when include = fullAccountNumber is provided in the request. For student loan account the account number that will be used for ACH or fund transfer<br><br><b>Aggregated / Manual</b>: Both <br><b>Applicable containers</b>: bank, creditCard, investment, insurance, loan, reward, otherAssets, otherLiabilities <br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><b> Note : </b> fullAccountNumber is deprecated and is replaced with fullAccountNumberList in include parameter and response.</ul>`,
      isReadOnly: true,
    },
    premium: {
      type: 'Money',
      description: `The financial cost that the policyholder pays to the insurance company to obtain an insurance cover.The premium is paid as a lump sum or in installments during the duration of the policy.<br><b>Applicable containers</b>: insurance<br><b>Aggregated / Manual</b>: Aggregated<br><b>Endpoints</b>:<br><ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul>`,
      isReadOnly: true,
    },
    aggregationSource: {
      type: 'Enum',
      isReadOnly: true,
    },
    overDraftLimit: {
      type: 'Money',
      description: `The overdraft limit for the account.<br><b>Note:</b> The overdraft limit is provided only for AUS, INDIA, UK, NZ locales.<br><br><b>Aggregated / Manual</b>: Aggregated<br><b>Applicable containers</b>: bank<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul>`,
      isReadOnly: true,
    },
    nickname: {
      type: 'string',
      description: `The nickname of the account as provided by the consumer to identify an account. The account nickname can be used instead of the account name.<br><br><b>Aggregated / Manual</b>: Both <br><b>Applicable containers</b>: All containers<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul>`,
      isReadOnly: true,
    },
    term: {
      type: 'string',
      description: `The tenure for which the CD account is valid  or in case of loan, the number of years/months over which the loan amount  has to be repaid. <br><b>Additional Details:</b><br>  Bank: The Term field is only applicable for the account type CD.Loan: The period for which the loan agreement is in force. The period, before or at the end of which, the loan should either be repaid or renegotiated for another term.<br><br><b>Aggregated / Manual</b>: Aggregated<br><b>Applicable containers</b>: bank, loan<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul>`,
      isReadOnly: true,
    },
    interestRate: {
      type: 'number',
      description: `<br><b>Bank:</b> The interest rate offered by a FI to its depositors on a bank account.<br><b>Loan:</b> Interest rate applied on the loan.<br><b>Additional Details:</b><br><b>Note:</b> The Interest Rate field is only applicable for the following account types: savings, checking, money market, and certificate of deposit.<br><br><b>Aggregated / Manual</b>: Aggregated<br><b>Applicable containers</b>: bank, loan<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul>`,
      isReadOnly: true,
      format: 'double',
    },
    deathBenefit: {
      type: 'Money',
      description: `The death benefit amount on a life insurance policy and annuity. It is usually equal to the face amount of the policy, but sometimes can vary for a whole life and universal life insurance policies.<br><b>Note:</b> The death benefit amount field is applicable only to annuities and life insurance.<br><b>Aggregated / Manual</b>: Aggregated<br><b>Applicable containers</b>: insurance<br><b>Endpoints</b>:<br><ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul>`,
      isReadOnly: true,
    },
    address: {
      type: 'AccountAddress',
      description: `The home address of the real estate account. The address entity for home address consists of state, zip and city only<br><br><b>Aggregated / Manual</b>: Manual<br><b>Applicable containers</b>: realEstate<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul>`,
      isReadOnly: true,
    },
    cashValue: {
      type: 'Money',
      description: `The amount of cash value available in the consumer's life insurance policy account - except for term insurance policy - for withdrawals, loans, etc. This field is also used to capture the cash value on the home insurance policy.It is the standard that the insurance company generally prefer to reimburse the policyholder for his or her loss, i.e., the cash value is equal to the replacement cost minus depreciation. The cash value is also referred to as surrender value in India for life insurance policies.<br><b>Note:</b> The cash value field is applicable to all types of life insurance (except for term life) and home insurance.<br><br><b>Aggregated / Manual</b>: Aggregated<br><b>Applicable containers</b>: insurance<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul>`,
      isReadOnly: true,
    },
    holder: {
      type: 'array',
      contains: {
        type: 'AccountHolder',
      },
      isReadOnly: true,
    },
    '401kLoan': {
      type: 'Money',
      description: `The amount borrowed from the 401k account.<br><b>Note</b>: The 401k loan field is only applicable to the 401k account type.<br><b>Applicable containers</b>: investment<br><b>Aggregated / Manual</b>: Aggregated<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul>`,
      isReadOnly: true,
    },
    homeValue: {
      type: 'Money',
      description: `The home value of the real estate account.<br><br><b>Aggregated / Manual</b>: Manual<br><b>Applicable containers</b>: realEstate<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul>`,
      isReadOnly: true,
    },
    accountNumber: {
      type: 'string',
      description: `The account number as it appears on the site. (The POST accounts service response return this field as number)<br><b>Additional Details</b>:<b> Bank/ Loan/ Insurance/ Investment</b>:<br> The account number for the bank account as it appears at the site.<br><b>Credit Card</b>: The account number of the card account as it appears at the site,<br>i.e., the card number.The account number can be full or partial based on how it is displayed in the account summary page of the site.In most cases, the site does not display the full account number in the account summary page and additional navigation is required to aggregate it.<br><b>Applicable containers</b>: All Containers<br><b>Aggregated / Manual</b>: Both <br><b>Endpoints</b>:<br><ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>POST accounts</li><li>GET dataExtracts/userData</li></ul>`,
      isReadOnly: true,
    },
    createdDate: {
      type: 'string',
      description: `The date on which the account is created in the Yodlee system.<br><b>Additional Details:</b> It is the date when the user links or aggregates the account(s) that are held with the provider to the Yodlee system.<br><br><b>Aggregated / Manual</b>: Both <br><b>Applicable containers</b>: All containers<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul>`,
      isReadOnly: true,
    },
    interestPaidYTD: {
      type: 'Money',
      description: `Interest paid from the start of the year to date.<br><b>Applicable containers</b>: loan<br><b>Aggregated / Manual</b>: Aggregated<br><b>Endpoints</b>:<br><ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul>`,
      isReadOnly: true,
    },
    providerAccountId: {
      type: 'number',
      description: `The primary key of the provider account resource.<br><br><b>Aggregated / Manual</b>: Both <br><b>Applicable containers</b>: All containers<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul>`,
      isReadOnly: true,
      format: 'int64',
    },
    collateral: {
      type: 'string',
      description: `Property or possession offered to support a loan that can be seized on a default.<br><b>Applicable containers</b>: loan<br><b>Aggregated / Manual</b>: Aggregated<br><b>Endpoints</b>:<br><ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul>`,
      isReadOnly: true,
    },
    dataset: {
      type: 'array',
      contains: {
        type: 'AccountDataset',
      },
      isReadOnly: true,
    },
    runningBalance: {
      type: 'Money',
      description: `The amount that is currently owed on the credit card account.<br><br><b>Aggregated / Manual</b>: Aggregated<br><b>Applicable containers</b>: creditCard<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul>`,
      isReadOnly: true,
    },
    sourceId: {
      type: 'string',
      description: `A unique ID that the provider site has assigned to the account. The source ID is only available for the HELD accounts.<br><br><b>Applicable containers</b>: bank, creditCard, investment, insurance, loan, reward<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul>`,
      isReadOnly: true,
    },
    dueDate: {
      type: 'string',
      description: `The date on which the due amount has to be paid. <br><b>Additional Details:</b><br><b>Credit Card:</b> The monthly date by when the minimum payment is due to be paid on the credit card account. <br><b>Loan:</b> The date on or before which the due amount should be paid.<br><b>Note:</b> The due date at the account-level can differ from the due date field at the statement-level, as the information in the aggregated card account data provides an up-to-date information to the consumer.<br><br><b>Aggregated / Manual</b>: Aggregated<br><b>Applicable containers</b>: creditCard, loan, insurance<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul>`,
      isReadOnly: true,
    },
    frequency: {
      type: 'Enum',
      isReadOnly: true,
    },
    maturityAmount: {
      type: 'Money',
      description: `The maturity amount on the CD is the amount(principal and interest) paid on or after the maturity date.<br><b>Additional Details:</b> The Maturity Amount field is only applicable for the account type CD(Fixed Deposits).<br><br><b>Aggregated / Manual</b>: Aggregated<br><b>Applicable containers</b>: bank<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul>`,
      isReadOnly: true,
    },
    associatedProviderAccountId: {
      type: 'array',
      contains: {
        type: 'number',
        format: 'int64',
      },
      isReadOnly: true,
    },
    isAsset: {
      type: 'boolean',
      description: `The account to be considered as an asset or liability.<br><b>Applicable containers</b>: All Containers<br><b>Aggregated / Manual</b>: Both <br><b>Endpoints</b>:<br><ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul>`,
      isReadOnly: true,
    },
    principalBalance: {
      type: 'Money',
      description: `The principal or loan balance is the outstanding balance on a loan account, excluding the interest and fees. The principal balance is the original borrowed amount plus any applicable loan fees, minus any principal payments.<br><br><b>Aggregated / Manual</b>: Aggregated<br><b>Applicable containers</b>: loan<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul>`,
      isReadOnly: true,
    },
    totalCashLimit: {
      type: 'Money',
      description: `The maximum amount that can be withdrawn from an ATM using the credit card. Credit cards issuer allow cardholders to withdraw cash using their cards - the cash limit is a percent of the overall credit limit.<br><br><b>Aggregated / Manual</b>: Aggregated<br><b>Applicable containers</b>: creditCard<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul>`,
      isReadOnly: true,
    },
    maturityDate: {
      type: 'string',
      description: `The date when a certificate of deposit (CD/FD) matures or the final payment date of a loan at which point the principal amount (including pending interest) is due to be paid.<br><b>Additional Details:</b> The date when a certificate of deposit (CD) matures, i.e., the money in the CD can be withdrawn without paying an early withdrawal penalty.The final payment date of a loan, i.e., the principal amount (including pending interest) is due to be paid.<br><br><b>Aggregated / Manual</b>: Aggregated<br><b>Applicable containers</b>: bank, loan<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul>`,
      isReadOnly: true,
    },
    minimumAmountDue: {
      type: 'Money',
      description: `The minimum amount due is the lowest amount of money that a consumer is required to pay each month.<br><br><b>Aggregated / Manual</b>: Aggregated<br><b>Applicable containers</b>: creditCard, insurance, loan<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul>`,
      isReadOnly: true,
    },
    annualPercentageYield: {
      type: 'number',
      description: `Annual percentage yield (APY) is a normalized representation of an interest rate, based on a compounding period of one year. APY generally refers to the rate paid to a depositor by a financial institution on an account.<br><b>Applicable containers</b>: bank<br><b>Aggregated / Manual</b>: Aggregated<br><b>Endpoints</b>:<br><ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul>`,
      isReadOnly: true,
      format: 'double',
    },
    accountType: {
      type: 'string',
      description: `The type of account that is aggregated, i.e., savings, checking, credit card, charge, HELOC, etc. The account type is derived based on the attributes of the account. <br><b>Valid Values:</b><br><b>Aggregated Account Type</b><br><b>bank</b><ul><li>CHECKING</li><li>SAVINGS</li><li>CD</li><li>PPF</li><li>RECURRING_DEPOSIT</li><li>FSA</li><li>MONEY_MARKET</li><li>IRA</li><li>PREPAID</li></ul><b>creditCard</b><ul><li>OTHER</li><li>CREDIT</li><li>STORE</li><li>CHARGE</li><li>OTHER</li></ul><b>investment (SN 1.0)</b><ul><li>BROKERAGE_MARGIN</li><li>HSA</li><li>IRA</li><li>BROKERAGE_CASH</li><li>401K</li><li>403B</li><li>TRUST</li><li>ANNUITY</li><li>SIMPLE</li><li>CUSTODIAL</li><li>BROKERAGE_CASH_OPTION</li><li>BROKERAGE_MARGIN_OPTION</li><li>INDIVIDUAL</li><li>CORPORATE</li><li>JTTIC</li><li>JTWROS</li><li>COMMUNITY_PROPERTY</li><li>JOINT_BY_ENTIRETY</li><li>CONSERVATORSHIP</li><li>ROTH</li><li>ROTH_CONVERSION</li><li>ROLLOVER</li><li>EDUCATIONAL</li><li>529_PLAN</li><li>457_DEFERRED_COMPENSATION</li><li>401A</li><li>PSP</li><li>MPP</li><li>STOCK_BASKET</li><li>LIVING_TRUST</li><li>REVOCABLE_TRUST</li><li>IRREVOCABLE_TRUST</li><li>CHARITABLE_REMAINDER</li><li>CHARITABLE_LEAD</li><li>CHARITABLE_GIFT_ACCOUNT</li><li>SEP</li><li>UTMA</li><li>UGMA</li><li>ESOPP</li><li>ADMINISTRATOR</li><li>EXECUTOR</li><li>PARTNERSHIP</li><li>SOLE_PROPRIETORSHIP</li><li>CHURCH</li><li>INVESTMENT_CLUB</li><li>RESTRICTED_STOCK_AWARD</li><li>CMA</li><li>EMPLOYEE_STOCK_PURCHASE_PLAN</li><li>PERFORMANCE_PLAN</li><li>BROKERAGE_LINK_ACCOUNT</li><li>MONEY_MARKET</li><li>SUPER_ANNUATION</li><li>REGISTERED_RETIREMENT_SAVINGS_PLAN</li><li>SPOUSAL_RETIREMENT_SAVINGS_PLAN</li><li>DEFERRED_PROFIT_SHARING_PLAN</li><li>NON_REGISTERED_SAVINGS_PLAN</li><li>REGISTERED_EDUCATION_SAVINGS_PLAN</li><li>GROUP_RETIREMENT_SAVINGS_PLAN</li><li>LOCKED_IN_RETIREMENT_SAVINGS_PLAN</li><li>RESTRICTED_LOCKED_IN_SAVINGS_PLAN</li><li>LOCKED_IN_RETIREMENT_ACCOUNT</li><li>REGISTERED_PENSION_PLAN</li><li>TAX_FREE_SAVINGS_ACCOUNT</li><li>LIFE_INCOME_FUND</li><li>REGISTERED_RETIREMENT_INCOME_FUND</li><li>SPOUSAL_RETIREMENT_INCOME_FUND</li><li>LOCKED_IN_REGISTERED_INVESTMENT_FUND</li><li>PRESCRIBED_REGISTERED_RETIREMENT_INCOME_FUND</li><li>GUARANTEED_INVESTMENT_CERTIFICATES</li><li>REGISTERED_DISABILITY_SAVINGS_PLAN</li><li>DIGITAL_WALLET</li><li>OTHER</li></ul><b>investment (SN 2.0)</b><ul><li>BROKERAGE_CASH</li><li>BROKERAGE_MARGIN</li><li>INDIVIDUAL_RETIREMENT_ACCOUNT_IRA</li><li>EMPLOYEE_RETIREMENT_ACCOUNT_401K</li><li>EMPLOYEE_RETIREMENT_SAVINGS_PLAN_403B</li><li>TRUST</li><li>ANNUITY</li><li>SIMPLE_IRA</li><li>CUSTODIAL_ACCOUNT</li><li>BROKERAGE_CASH_OPTION</li><li>BROKERAGE_MARGIN_OPTION</li><li>INDIVIDUAL</li><li>CORPORATE_INVESTMENT_ACCOUNT</li><li>JOINT_TENANTS_TENANCY_IN_COMMON_JTIC</li><li>JOINT_TENANTS_WITH_RIGHTS_OF_SURVIVORSHIP_JTWROS</li><li>JOINT_TENANTS_COMMUNITY_PROPERTY</li><li>JOINT_TENANTS_TENANTS_BY_ENTIRETY</li><li>CONSERVATOR</li><li>ROTH_IRA</li><li>ROTH_CONVERSION</li><li>ROLLOVER_IRA</li><li>EDUCATIONAL</li><li>EDUCATIONAL_SAVINGS_PLAN_529</li><li>DEFERRED_COMPENSATION_PLAN_457</li><li>MONEY_PURCHASE_RETIREMENT_PLAN_401A</li><li>PROFIT_SHARING_PLAN</li><li>MONEY_PURCHASE_PLAN</li><li>STOCK_BASKET_ACCOUNT</li><li>LIVING_TRUST</li><li>REVOCABLE_TRUST</li><li>IRREVOCABLE_TRUST</li><li>CHARITABLE_REMAINDER_TRUST</li><li>CHARITABLE_LEAD_TRUST</li><li>CHARITABLE_GIFT_ACCOUNT</li><li>SEP_IRA</li><li>UNIFORM_TRANSFER_TO_MINORS_ACT_UTMA</li><li>UNIFORM_GIFT_TO_MINORS_ACT_UGMA</li><li>EMPLOYEE_STOCK_OWNERSHIP_PLAN_ESOP</li><li>ADMINISTRATOR</li><li>EXECUTOR</li><li>PARTNERSHIP</li><li>PROPRIETORSHIP</li><li>CHURCH_ACCOUNT</li><li>INVESTMENT_CLUB</li><li>RESTRICTED_STOCK_AWARD</li><li>CASH_MANAGEMENT_ACCOUNT</li><li>EMPLOYEE_STOCK_PURCHASE_PLAN_ESPP</li><li>PERFORMANCE_PLAN</li><li>BROKERAGE_LINK_ACCOUNT</li><li>MONEY_MARKET_ACCOUNT</li><li>SUPERANNUATION</li><li>REGISTERED_RETIREMENT_SAVINGS_PLAN_RRSP</li><li>SPOUSAL_RETIREMENT_SAVINGS_PLAN_SRSP</li><li>DEFERRED_PROFIT_SHARING_PLAN_DPSP</li><li>NON_REGISTERED_SAVINGS_PLAN_NRSP</li><li>REGISTERED_EDUCATION_SAVINGS_PLAN_RESP</li><li>GROUP_RETIREMENT_SAVINGS_PLAN_GRSP</li><li>LOCKED_IN_RETIREMENT_SAVINGS_PLAN_LRSP</li><li>RESTRICTED_LOCKED_IN_SAVINGS_PLAN_RLSP</li><li>LOCKED_IN_RETIREMENT_ACCOUNT_LIRA</li><li>REGISTERED_PENSION_PLAN_RPP</li><li>TAX_FREE_SAVINGS_ACCOUNT_TFSA</li><li>LIFE_INCOME_FUND_LIF</li><li>REGISTERED_RETIREMENT_INCOME_FUND_RIF</li><li>SPOUSAL_RETIREMENT_INCOME_FUND_SRIF</li><li>LOCKED_IN_REGISTERED_INVESTMENT_FUND_LRIF</li><li>PRESCRIBED_REGISTERED_RETIREMENT_INCOME_FUND_PRIF</li><li>GUARANTEED_INVESTMENT_CERTIFICATES_GIC</li><li>REGISTERED_DISABILITY_SAVINGS_PLAN_RDSP</li><li>DEFINED_CONTRIBUTION_PLAN</li><li>DEFINED_BENEFIT_PLAN</li><li>EMPLOYEE_STOCK_OPTION_PLAN</li><li>NONQUALIFIED_DEFERRED_COMPENSATION_PLAN_409A</li><li>KEOGH_PLAN</li><li>EMPLOYEE_RETIREMENT_ACCOUNT_ROTH_401K</li><li>DEFERRED_CONTINGENT_CAPITAL_PLAN_DCCP</li><li>EMPLOYEE_BENEFIT_PLAN</li><li>EMPLOYEE_SAVINGS_PLAN</li><li>HEALTH_SAVINGS_ACCOUNT_HSA</li><li>COVERDELL_EDUCATION_SAVINGS_ACCOUNT_ESA</li><li>TESTAMENTARY_TRUST</li><li>ESTATE</li><li>GRANTOR_RETAINED_ANNUITY_TRUST_GRAT</li><li>ADVISORY_ACCOUNT</li><li>NON_PROFIT_ORGANIZATION_501C</li><li>HEALTH_REIMBURSEMENT_ARRANGEMENT_HRA</li><li>INDIVIDUAL_SAVINGS_ACCOUNT_ISA</li><li>CASH_ISA</li><li>STOCKS_AND_SHARES_ISA</li><li>INNOVATIVE_FINANCE_ISA</li><li>JUNIOR_ISA</li><li>EMPLOYEES_PROVIDENT_FUND_ORGANIZATION_EPFO</li><li>PUBLIC_PROVIDENT_FUND_PPF</li><li>EMPLOYEES_PENSION_SCHEME_EPS</li><li>NATIONAL_PENSION_SYSTEM_NPS</li><li>INDEXED_ANNUITY</li><li>ANNUITIZED_ANNUITY</li><li>VARIABLE_ANNUITY</li><li>ROTH_403B</li><li>SPOUSAL_IRA</li><li>SPOUSAL_ROTH_IRA</li><li>SARSEP_IRA</li><li>SUBSTANTIALLY_EQUAL_PERIODIC_PAYMENTS_SEPP</li><li>OFFSHORE_TRUST</li><li>IRREVOCABLE_LIFE_INSURANCE_TRUST</li><li>INTERNATIONAL_TRUST</li><li>LIFE_INTEREST_TRUST</li><li>EMPLOYEE_BENEFIT_TRUST</li><li>PRECIOUS_METAL_ACCOUNT</li><li>INVESTMENT_LOAN_ACCOUNT</li><li>GRANTOR_RETAINED_INCOME_TRUST</li><li>PENSION_PLAN</li><li>DIGITAL_WALLET</li><li>OTHER</li></ul><b>loan</b><ul><li>MORTGAGE</li><li>INSTALLMENT_LOAN</li><li>PERSONAL_LOAN</li><li>HOME_EQUITY_LINE_OF_CREDIT</li><li>LINE_OF_CREDIT</li><li>AUTO_LOAN</li><li>STUDENT_LOAN</li><li>HOME_LOAN</li></ul><b>insurance</b><ul><li>AUTO_INSURANCE</li><li>HEALTH_INSURANCE</li><li>HOME_INSURANCE</li><li>LIFE_INSURANCE</li><li>ANNUITY</li><li>TRAVEL_INSURANCE</li><li>INSURANCE</li></ul><b>realEstate</b><ul> <li>REAL_ESTATE</li></ul><b>reward</b><ul><li>REWARD_POINTS</li></ul><b>Manual Account Type</b><br><b>bank</b><ul><li>CHECKING</li><li>SAVINGS</li><li>CD</li><li>PREPAID</li></ul><b>credit</b><ul>  <li>CREDIT</li></ul><b>loan</b><ul>  <li>PERSONAL_LOAN</li><li>HOME_LOAN</li></ul><b>insurance</b><ul><li>INSURANCE</li><li>ANNUITY</li></ul><b>investment</b><ul><li>BROKERAGE_CASH</li></ul><br><br><b>Aggregated / Manual</b>: Both <br><b>Applicable containers</b>: All containers<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul>`,
      isReadOnly: true,
    },
    originationDate: {
      type: 'string',
      description: `The date on which the loan is disbursed.<br><br><b>Aggregated / Manual</b>: Both <br><b>Applicable containers</b>: loan<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul>`,
      isReadOnly: true,
    },
    totalVestedBalance: {
      type: 'Money',
      description: `The total vested balance that appears in an investment account. Such as the 401k account or the equity award account that includes employer provided funding. <br><b>Note:</b> The amount an employee can claim after he or she leaves the organization. The total vested balance field is only applicable to the retirement related accounts such as 401k, equity awards, etc.<br><br><b>Aggregated / Manual</b>: Aggregated<br><b>Applicable containers</b>: investment<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul>`,
      isReadOnly: true,
    },
    rewardBalance: {
      type: 'array',
      contains: {
        type: 'RewardBalance',
      },
      isReadOnly: true,
    },
    sourceAccountStatus: {
      type: 'Enum',
      isReadOnly: true,
    },
    linkedAccountIds: {
      type: 'array',
      contains: {
        type: 'number',
        format: 'int64',
      },
      isReadOnly: true,
    },
    derivedApr: {
      type: 'number',
      description: `Derived APR will be an estimated purchase APR based on consumers credit card transactions and credit card purchase.<br><b>Aggregated / Manual / Derived</b>: Derived<br><b>Applicable containers</b>: creditCard<br><b>Endpoints</b>:<br><ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul>`,
      isReadOnly: true,
      format: 'double',
    },
    policyEffectiveDate: {
      type: 'string',
      description: `The date on which the insurance policy coverage commences.<br><b>Applicable containers</b>: insurance<br><b>Aggregated / Manual</b>: Aggregated<br><b>Endpoints</b>:<br><ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul>`,
      isReadOnly: true,
    },
    totalUnvestedBalance: {
      type: 'Money',
      description: `The total unvested balance that appears in an investment account.Such as the 401k account or the equity award account that includes employer provided funding. <br><b>Note:</b> The amount the employer contributes is generally subject to vesting and remain unvested for a specific period of time or until fulfillment of certain conditions. The total unvested balance field is only applicable to the retirement related accounts such as 401k, equity awards, etc.<br><br><b>Aggregated / Manual</b>: Aggregated<br><b>Applicable containers</b>: investment<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul>`,
      isReadOnly: true,
    },
    annuityBalance: {
      type: 'Money',
      description: `Indicates the contract value of the annuity.<br><b>Note:</b> The annuity balance field is applicable only to annuities.<br><b>Applicable containers</b>: insurance, investment<br><b>Aggregated / Manual</b>: Both <br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul>`,
      isReadOnly: true,
    },
    accountName: {
      type: 'string',
      description: `The account name as it appears at the site.<br>(The POST accounts service response return this field as name)<br><b>Applicable containers</b>: All Containers<br><b>Aggregated / Manual</b>: Both <br><b>Endpoints</b>:<br><ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul>`,
      isReadOnly: true,
    },
    totalCreditLimit: {
      type: 'Money',
      description: `The maximum amount of credit a financial institution extends to a consumer through a line of credit or a revolving loan like HELOC. <br><b>Additional Details:</b><br><b>Note:</b> The credit limit field is applicable only to LOC and HELOC account types.<br><br><b>Aggregated / Manual</b>: Aggregated<br><b>Applicable containers</b>: loan<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul>`,
      isReadOnly: true,
    },
    policyStatus: {
      type: 'Enum',
      isReadOnly: true,
    },
    shortBalance: {
      type: 'Money',
      description: `The sum of the current market values of short positions held in a brokerage account.<br><b>Note:</b> The short balance balance field is only applicable to brokerage related accounts.<br><br><b>Aggregated / Manual</b>: Aggregated<br><b>Applicable containers</b>: investment<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul>`,
      isReadOnly: true,
    },
    lender: {
      type: 'string',
      description: `The financial institution that provides the loan.<br><br><b>Aggregated / Manual</b>: Aggregated<br><b>Applicable containers</b>: loan<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul>`,
      isReadOnly: true,
    },
    lastEmployeeContributionAmount: {
      type: 'Money',
      description: `Indicates the last amount contributed by the employee to the 401k account.<br><b>Note:</b> The last employee contribution amount field is derived from the transaction data and not aggregated from the FI site. The field is only applicable to the 401k account type.<br><br><b>Aggregated / Manual</b>: Aggregated<br><b>Applicable containers</b>: investment<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul>`,
      isReadOnly: true,
    },
    providerId: {
      type: 'string',
      description: `Identifier of the provider site. The primary key of provider resource. <br><br><b>Aggregated / Manual</b>: Both <br><b>Applicable containers</b>: All containers<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul>`,
      isReadOnly: true,
    },
    lastPaymentDate: {
      type: 'string',
      description: `The date on which the payment for the previous or current billing cycle is done.<br><b>Additional Details:</b> If the payment is already done for the current billing cycle, then the field indicates the payment date of the current billing cycle. If payment is yet to be done for the current billing cycle, then the field indicates the date on which the payment was made for any of the previous billing cycles. The last payment date at the account-level can differ from the last payment date at the statement-level, as the information in the aggregated card account data provides an up-to-date information to the consumer.<br><br><b>Aggregated / Manual</b>: Aggregated<br><b>Applicable containers</b>: creditCard, loan, insurance<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul>`,
      isReadOnly: true,
    },
    primaryRewardUnit: {
      type: 'string',
      description: `Primary reward unit for this reward program. E.g. miles, points, etc.<br><br><b>Aggregated / Manual</b>: Aggregated<br><b>Applicable containers</b>: reward<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul>`,
      isReadOnly: true,
    },
    lastPaymentAmount: {
      type: 'Money',
      description: `Last/Previous payment amount on the account.  Portion of the principal and interest paid on previous month or period to satisfy a loan.<br><b>Additional Details:</b> If the payment is already done for the current billing cycle, then the field indicates the payment of the current billing cycle. If payment is yet to be done for the current billing cycle, then the field indicates the payment that was made for any of the previous billing cycles.<br><br><b>Aggregated / Manual</b>: Aggregated<br><b>Applicable containers</b>: creditCard, loan, insurance<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul>`,
      isReadOnly: true,
    },
    remainingBalance: {
      type: 'Money',
      description: `The sum of the future payments due to be paid to the insurance company during a policy year. It is the policy rate minus the payments made till date.<br><b>Note:</b> The remaining balance field is applicable only to auto insurance and home insurance.<br><b>Applicable containers</b>: insurance<br><b>Aggregated / Manual</b>: Aggregated<br><b>Endpoints</b>:<br><ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul>`,
      isReadOnly: true,
    },
    userClassification: {
      type: 'Enum',
      isReadOnly: true,
    },
    bankTransferCode: {
      type: 'array',
      contains: {
        type: 'BankTransferCode',
      },
      isReadOnly: true,
    },
    expirationDate: {
      type: 'string',
      description: `The date on which the insurance policy expires or matures.<br><b>Additional Details:</b> The due date at the account-level can differ from the due date field at the statement-level, as the information in the aggregated card account data provides an up-to-date information to the consumer.<br><br><b>Aggregated / Manual</b>: Aggregated<br><b>Applicable containers</b>: insurance<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul>`,
      isReadOnly: true,
    },
    coverage: {
      type: 'array',
      contains: {
        type: 'Coverage',
      },
      isReadOnly: true,
    },
    cashApr: {
      type: 'number',
      description: `Annual percentage rate applied to cash withdrawals on the card.<br><br><b>Account Type</b>: Aggregated<br><b>Applicable containers</b>: creditCard<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul>`,
      format: 'double',
    },
    autoRefresh: {
      type: 'AutoRefresh',
      description: `Auto refresh account-related information.<br><br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li></ul>`,
      isReadOnly: true,
    },
    oauthMigrationStatus: {
      type: 'Enum',
      isReadOnly: true,
    },
    displayedName: {
      type: 'string',
      description: `The name or identification of the account owner, as it appears at the FI site. <br><b>Note:</b> The account holder name can be full or partial based on how it is displayed in the account summary page of the FI site. In most cases, the FI site does not display the full account holder name in the account summary page.<br><br><b>Aggregated / Manual</b>: Aggregated<br><b>Applicable containers</b>: bank, creditCard, investment, insurance, loan, reward<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul>`,
      isReadOnly: true,
    },
    fullAccountNumberList: {
      type: 'FullAccountNumberList',
      description: `Full account number List of the account that is included only when include = fullAccountNumberList is provided in the request. <br><br><b>Aggregated / Manual</b>: Both <br><b>Applicable containers</b>: bank, creditCard, investment, insurance, loan, reward, otherAssets, otherLiabilities <br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li></ul>`,
      isReadOnly: true,
    },
    amountDue: {
      type: 'Money',
      description: `The amount due to be paid for the account.<br><b>Additional Details:</b><b>Credit Card:</b> The total amount due for the purchase of goods or services that must be paid by the due date.<br><b>Loan:</b> The amount due to be paid on the due date.<br><b>Note:</b> The amount due at the account-level can differ from the amount due at the statement-level, as the information in the aggregated card account data provides more up-to-date information.<br><b>Applicable containers</b>: creditCard, loan, insurance<br><b>Aggregated / Manual</b>: Both <br><b>Endpoints</b>:<br><ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul>`,
      isReadOnly: true,
    },
    currentLevel: {
      type: 'string',
      description: `Current level of the reward program the user is associated with. E.g. Silver, Jade etc.<br><br><b>Aggregated / Manual</b>: Aggregated<br><b>Applicable containers</b>: reward<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul>`,
      isReadOnly: true,
    },
    originalLoanAmount: {
      type: 'Money',
      description: `The amount of loan that the lender has provided.<br><br><b>Aggregated / Manual</b>: Aggregated<br><b>Applicable containers</b>: loan<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul>`,
      isReadOnly: true,
    },
    policyToDate: {
      type: 'string',
      description: `The date to which the policy exists.<br><b>Aggregated / Manual</b>: Aggregated<br><b>Applicable containers</b>: insurance<br><b>Endpoints</b>:<br><ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul>`,
      isReadOnly: true,
    },
    loanPayoffDetails: {
      type: 'LoanPayoffDetails',
      description: `The loan payoff details such as date by which the payoff amount should be paid, loan payoff amount, and the outstanding balance on the loan account.<br><br><b>Aggregated / Manual</b>: Aggregated<br><b>Applicable containers</b>: loan<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul>`,
      isReadOnly: true,
    },
    paymentProfile: {
      type: 'PaymentProfile',
      description: `The payment profile attribute contains information such as payment address, payment identifier, etc., that are required to set up a payment. <br><br><b>Aggregated / Manual</b>: Aggregated<br><b>Applicable containers</b>: loan<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li></ul>`,
      isReadOnly: true,
    },
    CONTAINER: {
      type: 'Enum',
      isReadOnly: true,
    },
    lastEmployeeContributionDate: {
      type: 'string',
      description: `The date on which the last employee contribution was made to the 401k account.<br><b>Note:</b> The last employee contribution date field is derived from the transaction data and not aggregated from the FI site. The field is only applicable to the 401k account type.<br><br><b>Aggregated / Manual</b>: Aggregated<br><b>Applicable containers</b>: investment<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul>`,
      isReadOnly: true,
    },
    lastPayment: {
      type: 'Money',
      description: `The last payment made for the account.<br><b>Aggregated / Manual</b>: Aggregated<br><b>Applicable containers</b>: bill<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul>`,
      isReadOnly: true,
    },
    recurringPayment: {
      type: 'Money',
      description: `The monthly or periodic payment on a loan that is recurring in nature. The recurring payment amount is usually same as the amount due, unless late fees or other charges are added eventually changing the amount due for a particular month.<br><br><b>Aggregated / Manual</b>: Aggregated<br><b>Applicable containers</b>: loan<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul>`,
      isReadOnly: true,
    },
  },
} as const
