# SumUpRestApi.MerchantSettingsPayload

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**payoutPeriod** | **String** | Payout period. | [optional] 
**payoutType** | **String** | Payout type. | [optional] 
**payoutOnDemand** | **Boolean** | If true, the merchant will not receive automatic payouts. | [optional] 
**payoutOnDemandAvailable** | **String** | If true, the merchant will be able to manage  payout_on_demand settings | [optional] 
**expectedMaxTransactionAmount** | **Number** | Expected maximum amount of a single purchase | [optional] 
**printersEnabled** | **Boolean** | Printers enabled. | [optional] 
**grossSettlement** | **Boolean** | Gross settlemnt | [optional] 

<a name="PayoutPeriodEnum"></a>
## Enum: PayoutPeriodEnum

* `dayly` (value: `"dayly"`)
* `weekly` (value: `"weekly"`)
* `monthly` (value: `"monthly"`)


<a name="PayoutTypeEnum"></a>
## Enum: PayoutTypeEnum

* `SINGLE_PAYMENT` (value: `"SINGLE_PAYMENT"`)

