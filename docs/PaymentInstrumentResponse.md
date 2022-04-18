# SumUpRestApi.PaymentInstrumentResponse

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**token** | **String** | Unique token identifying the saved payment card for a customer. | [optional] 
**active** | **Boolean** | Indicates whether the payment instrument is active and can be used for payments. To deactivate it, send a &#x60;DELETE&#x60; request to the resource endpoint. | [optional] [default to true]
**type** | **String** | Type of the payment instrument. | [optional] 
**card** | [**PaymentInstrumentResponseCard**](PaymentInstrumentResponseCard.md) |  | [optional] 
**mandate** | [**MandateResponse**](MandateResponse.md) |  | [optional] 
**createdAt** | **Date** | Creation date of payment instrument. Response format expressed according to &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/ISO_8601\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener\&quot;&gt;ISO8601&lt;/a&gt; code. | [optional] 

<a name="TypeEnum"></a>
## Enum: TypeEnum

* `card` (value: `"card"`)

