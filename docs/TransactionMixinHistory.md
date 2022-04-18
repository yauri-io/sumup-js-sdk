# SumUpRestApi.TransactionMixinHistory

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**productSummary** | **String** | Short description of the payment. The value is taken from the &#x60;description&#x60; property of the related checkout resource. | [optional] 
**payoutsTotal** | **Number** | Total number of payouts to the registered user specified in the &#x60;user&#x60; property. | [optional] 
**payoutsReceived** | **Number** | Number of payouts that are made to the registered user specified in the &#x60;user&#x60; property. | [optional] 
**payoutPlan** | **String** | Payout plan of the registered user at the time when the transaction was made. | [optional] 

<a name="PayoutPlanEnum"></a>
## Enum: PayoutPlanEnum

* `SINGLE_PAYMENT` (value: `"SINGLE_PAYMENT"`)
* `TRUE_INSTALLMENT` (value: `"TRUE_INSTALLMENT"`)
* `ACCELERATED_INSTALLMENT` (value: `"ACCELERATED_INSTALLMENT"`)

