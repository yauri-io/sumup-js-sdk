# SumUpRestApi.CheckoutSuccessToken

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**checkoutReference** | **String** | Unique ID of the payment checkout specified by the client application when creating the checkout resource. | [optional] 
**amount** | **Number** | Amount of the payment. | [optional] 
**currency** | [**Currency**](Currency.md) |  | [optional] 
**payToEmail** | **String** | Email address of the registered user (merchant) to whom the payment is made. It is highly recommended to use &#x60;merchant_code&#x60; instead of &#x60;pay_to_email&#x60;. | [optional] 
**merchantCode** | **String** | Unique identifying code of the merchant profile. | [optional] 
**description** | **String** | Short description of the checkout visible in the SumUp dashboard. The description can contribute to reporting, allowing easier identification of a checkout. | [optional] 
**id** | **String** | Unique ID of the checkout resource. | [optional] 
**status** | **String** | Currrent status of the checkout. | [optional] 
**_date** | **Date** | Date and time of the creation of the payment checkout. Response format expressed according to &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/ISO_8601\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener\&quot;&gt;ISO8601&lt;/a&gt; code. | [optional] 
**transactionCode** | **String** | Transaction code of the successful transaction with which the payment for the checkout is completed. | [optional] 
**transactionId** | **String** | Transaction ID of the successful transaction with which the payment for the checkout is completed. | [optional] 
**merchantName** | **String** | Name of the merchant | [optional] 
**redirectUrl** | **String** | Refers to a url where the end user is redirected once the payment processing completes. | [optional] 
**customerId** | **String** | Unique identification of a customer. If specified, the checkout session and payment instrument are associated with the referrenced customer. | [optional] 
**paymentInstrument** | [**CheckoutSuccessPaymentInstrument**](CheckoutSuccessPaymentInstrument.md) |  | [optional] 
**transactions** | **[AllOfCheckoutSuccessTokenTransactionsItems]** | List of transactions related to the payment. | [optional] 

<a name="StatusEnum"></a>
## Enum: StatusEnum

* `PENDING` (value: `"PENDING"`)
* `FAILED` (value: `"FAILED"`)
* `PAID` (value: `"PAID"`)

