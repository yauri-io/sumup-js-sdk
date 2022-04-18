# SumUpRestApi.TransactionMixinCheckout

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**merchantCode** | **String** | Unique code of the registered merchant to whom the payment is made. | [optional] 
**vatAmount** | **Number** | Amount of the applicable VAT (out of the total transaction amount). | [optional] 
**tipAmount** | **Number** | Amount of the tip (out of the total transaction amount). | [optional] 
**entryMode** | **String** | Entry mode of the payment details. | [optional] 
**authCode** | **String** | Authorization code for the transaction sent by the payment card issuer or bank. Applicable only to card payments. | [optional] 
**internalId** | **Number** | Internal unique ID of the transaction on the SumUp platform. | [optional] 

<a name="EntryModeEnum"></a>
## Enum: EntryModeEnum

* `CUSTOMER_ENTRY` (value: `"CUSTOMER_ENTRY"`)

