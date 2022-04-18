# SumUpRestApi.TransactionHistory

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**productSummary** | **String** | Short description of the payment. The value is taken from the &#x60;description&#x60; property of the related checkout resource. | [optional] 
**payoutsTotal** | **Number** | Total number of payouts to the registered user specified in the &#x60;user&#x60; property. | [optional] 
**payoutsReceived** | **Number** | Number of payouts that are made to the registered user specified in the &#x60;user&#x60; property. | [optional] 
**payoutPlan** | **String** | Payout plan of the registered user at the time when the transaction was made. | [optional] 
**transactionId** | [**TransactionID**](TransactionID.md) |  | [optional] 
**user** | [**User**](User.md) |  | [optional] 
**type** | **String** | Type of the transaction for the registered user specified in the &#x60;user&#x60; property. | [optional] 
**cardType** | **String** | Issuing card network of the payment card used for the transaction. | [optional] 

<a name="PayoutPlanEnum"></a>
## Enum: PayoutPlanEnum

* `SINGLE_PAYMENT` (value: `"SINGLE_PAYMENT"`)
* `TRUE_INSTALLMENT` (value: `"TRUE_INSTALLMENT"`)
* `ACCELERATED_INSTALLMENT` (value: `"ACCELERATED_INSTALLMENT"`)


<a name="TypeEnum"></a>
## Enum: TypeEnum

* `PAYMENT` (value: `"PAYMENT"`)
* `REFUND` (value: `"REFUND"`)
* `CHARGE_BACK` (value: `"CHARGE_BACK"`)


<a name="CardTypeEnum"></a>
## Enum: CardTypeEnum

* `VISA` (value: `"VISA"`)
* `AMEX` (value: `"AMEX"`)
* `CUP` (value: `"CUP"`)
* `DINERS` (value: `"DINERS"`)
* `DISCOVER` (value: `"DISCOVER"`)
* `ELO` (value: `"ELO"`)
* `ELV` (value: `"ELV"`)
* `HIPERCARD` (value: `"HIPERCARD"`)
* `JCB` (value: `"JCB"`)
* `MAESTRO` (value: `"MAESTRO"`)
* `MASTERCARD` (value: `"MASTERCARD"`)
* `VISA_ELECTRON` (value: `"VISA_ELECTRON"`)
* `VISA_VPAY` (value: `"VISA_VPAY"`)
* `UNKNOWN` (value: `"UNKNOWN"`)

