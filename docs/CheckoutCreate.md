# SumUpRestApi.CheckoutCreate

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**checkoutReference** | **String** | Unique ID of the payment checkout specified by the client application when creating the checkout resource. | 
**amount** | **Number** | Amount of the payment. | 
**currency** | [**Currency**](Currency.md) |  | 
**payToEmail** | **String** | Email address of the registered user (merchant) to whom the payment is made. It is highly recommended to use &#x60;merchant_code&#x60; instead of &#x60;pay_to_email&#x60;. | [optional] 
**merchantCode** | **String** | Unique identifying code of the merchant profile. | 
**description** | **String** | Short description of the checkout visible in the SumUp dashboard. The description can contribute to reporting, allowing easier identification of a checkout. | [optional] 
**returnUrl** | **String** | URL to which the SumUp platform sends the processing status of the payment checkout. | [optional] 
**id** | **String** | Unique ID of the checkout resource. | 
**status** | **String** | Currrent status of the checkout. | 
**_date** | **Date** | Date and time of the creation of the payment checkout. Response format expressed according to &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/ISO_8601\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener\&quot;&gt;ISO8601&lt;/a&gt; code. | 
**validUntil** | **Date** | Date and time of the checkout expiration before which the client application needs to send a processing request. If no value is present, the checkout does not have an expiration time. | [optional] 
**transactions** | **[AllOfCheckoutCreateTransactionsItems]** | List of transactions related to the payment. | 
**redirectUrl** | **String** | Required for 3DS checkouts. Refers to a url where the end user is redirected once the payment processing completes. | [optional] 

<a name="StatusEnum"></a>
## Enum: StatusEnum

* `PENDING` (value: `"PENDING"`)
* `FAILED` (value: `"FAILED"`)
* `PAID` (value: `"PAID"`)

