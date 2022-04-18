# SumUpRestApi.TransactionMixinBase

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | Unique ID of the transaction. | [optional] 
**transactionCode** | **String** | Transaction code returned by the acquirer/processing entity after processing the transaction. | [optional] 
**amount** | **Number** | Total amount of the transaction. | [optional] 
**currency** | [**Currency**](Currency.md) |  | [optional] 
**timestamp** | **Date** | Date and time of the creation of the transaction. Response format expressed according to &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/ISO_8601\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener\&quot;&gt;ISO8601&lt;/a&gt; code. | [optional] 
**status** | **String** | Current status of the transaction. | [optional] 
**paymentType** | **String** | Payment type used for the transaction. | [optional] 
**installmentsCount** | **Number** | Current number of the installment for deferred payments. | [optional] 

<a name="StatusEnum"></a>
## Enum: StatusEnum

* `SUCCESSFUL` (value: `"SUCCESSFUL"`)
* `CANCELLED` (value: `"CANCELLED"`)
* `FAILED` (value: `"FAILED"`)
* `PENDING` (value: `"PENDING"`)


<a name="PaymentTypeEnum"></a>
## Enum: PaymentTypeEnum

* `ECOM` (value: `"ECOM"`)
* `RECURRING` (value: `"RECURRING"`)

