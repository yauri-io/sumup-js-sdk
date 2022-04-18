# SumUpRestApi.FinancialPayoutsInner

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amount** | **Number** |  | [optional] 
**currency** | **String** |  | [optional] 
**_date** | **Date** |  | [optional] 
**fee** | **Number** |  | [optional] 
**id** | **Number** |  | [optional] 
**reference** | **String** |  | [optional] 
**status** | **String** |  | [optional] 
**transactionCode** | **String** |  | [optional] 
**type** | **String** |  | [optional] 

<a name="StatusEnum"></a>
## Enum: StatusEnum

* `SUCCESSFUL` (value: `"SUCCESSFUL"`)
* `FAILED` (value: `"FAILED"`)


<a name="TypeEnum"></a>
## Enum: TypeEnum

* `PAYOUT` (value: `"PAYOUT"`)
* `CHARGE_BACK_DEDUCTION` (value: `"CHARGE_BACK_DEDUCTION"`)
* `REFUND_DEDUCTION` (value: `"REFUND_DEDUCTION"`)
* `DD_RETURN_DEDUCTION` (value: `"DD_RETURN_DEDUCTION"`)
* `BALANCE_DEDUCTION` (value: `"BALANCE_DEDUCTION"`)

