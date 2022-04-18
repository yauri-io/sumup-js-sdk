# SumUpRestApi.InlineResponse2001

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**checkoutReference** | **String** | Unique ID of the payment checkout specified by the client application when creating the checkout resource. | [optional] 
**id** | **String** | Unique ID of the checkout resource. | [optional] 
**amount** | **Number** | Amount of the payment. | [optional] 
**currency** | [**Currency**](Currency.md) |  | [optional] 
**payToEmail** | **String** | Email address of the registered user (merchant) to whom the payment is made. It is highly recommended to use &#x60;merchant_code&#x60; instead of &#x60;pay_to_email&#x60;. | [optional] 
**merchantCode** | **String** | Unique identifying code of the merchant profile. | [optional] 
**description** | **String** | Short description of the checkout visible in the SumUp dashboard. The description can contribute to reporting, allowing easier identification of a checkout. | [optional] 
**purpose** | **String** | Purpose of the checkout creation initially | [optional] 
**status** | **String** | Currrent status of the checkout. | [optional] 
**_date** | **Date** | Date and time of the creation of the payment checkout. Response format expressed according to &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/ISO_8601\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener\&quot;&gt;ISO8601&lt;/a&gt; code. | [optional] 
**validUntil** | **Date** | Date and time of the checkout expiration before which the client application needs to send a processing request. If no value is present, the checkout does not have an expiration time. | [optional] 
**merchantName** | **String** | Merchant name | [optional] 
**transactions** | **[AllOfinlineResponse2001TransactionsItems]** | List of transactions related to the payment. | [optional] 

<a name="PurposeEnum"></a>
## Enum: PurposeEnum

* `SETUP_RECURRING_PAYMENT` (value: `"SETUP_RECURRING_PAYMENT"`)
* `CHECKOUT` (value: `"CHECKOUT"`)


<a name="StatusEnum"></a>
## Enum: StatusEnum

* `EXPIRED` (value: `"EXPIRED"`)

