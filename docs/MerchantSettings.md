# SumUpRestApi.MerchantSettings

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**taxEnabled** | **Boolean** | Whether to show tax in receipts &amp;#40;saved per transaction&amp;#41; | [optional] 
**payoutType** | **String** | Payout type | [optional] 
**payoutPeriod** | **String** | Payout frequency | [optional] 
**payoutOnDemandAvailable** | **Boolean** | Whether merchant can edit payouts on demand | [optional] 
**payoutOnDemand** | **Boolean** | Whether merchant will receive payouts on demand | [optional] 
**printersEnabled** | **Boolean** | Whether to show printers in mobile app | [optional] 
**payoutInstrument** | **String** | Payout Instrument | [optional] 
**motoPayment** | **String** | Whether merchant can make MOTO payments | [optional] 
**stoneMerchantCode** | **String** | Stone merchant code | [optional] 
**adyenMerchantCode** | **String** | Adyen merchant code | [optional] 
**adyenUser** | **String** | Adyen username | [optional] 
**adyenPassword** | **String** | Adyen password | [optional] 
**adyenCompany** | **String** | Adyen company | [optional] 
**dailyPayoutEmail** | **Boolean** | Whether merchant will receive daily payout emails | [optional] 
**monthlyPayoutEmail** | **Boolean** | Whether merchant will receive monthly payout emails | [optional] 
**grossSettlement** | **Boolean** | Whether merchant has gross settlement enabled | [optional] 

<a name="MotoPaymentEnum"></a>
## Enum: MotoPaymentEnum

* `UNAVAILABLE` (value: `"UNAVAILABLE"`)
* `ENFORCED` (value: `"ENFORCED"`)
* `ON` (value: `"ON"`)
* `OFF` (value: `"OFF"`)

