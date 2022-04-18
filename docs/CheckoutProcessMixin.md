# SumUpRestApi.CheckoutProcessMixin

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**paymentType** | **String** |  | 
**installments** | **Number** | Number of installments for deferred payments. Available only to merchant users in Brazil. | [optional] 
**mandate** | [**MandatePayload**](MandatePayload.md) |  | [optional] 
**card** | [**Card**](Card.md) |  | [optional] 
**token** | **String** | __Required when the payment type is &#x60;token&#x60;.__ Unique token identifying the saved payment card for a customer. | [optional] 
**customerId** | **String** | __Required when the payment type is &#x60;token&#x60;.__ Unique ID of the customer. | [optional] 

<a name="PaymentTypeEnum"></a>
## Enum: PaymentTypeEnum

* `card` (value: `"card"`)
* `token` (value: `"token"`)
* `boleto` (value: `"boleto"`)
* `ideal` (value: `"ideal"`)
* `sofort` (value: `"sofort"`)
* `bancontact` (value: `"bancontact"`)

