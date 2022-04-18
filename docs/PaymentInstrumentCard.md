# SumUpRestApi.PaymentInstrumentCard

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**token** | **String** | Unique token identifying the saved payment card for a customer. | 
**active** | **Boolean** | Indicates whether the payment instrument is active and can be used for payments. To deactivate it, send a &#x60;DELETE&#x60; request to the resource endpoint. | [default to true]
**type** | **String** | Type of the payment instrument. | 
**card** | [**Card**](Card.md) |  | 

<a name="TypeEnum"></a>
## Enum: TypeEnum

* `card` (value: `"card"`)

