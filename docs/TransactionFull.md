# SumUpRestApi.TransactionFull

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**merchantCode** | **String** | Unique code of the registered merchant to whom the payment is made. | [optional] 
**vatAmount** | **Number** | Amount of the applicable VAT (out of the total transaction amount). | [optional] 
**tipAmount** | **Number** | Amount of the tip (out of the total transaction amount). | [optional] 
**entryMode** | **String** | Entry mode of the payment details. | [optional] 
**authCode** | **String** | Authorization code for the transaction sent by the payment card issuer or bank. Applicable only to card payments. | [optional] 
**internalId** | **Number** | Internal unique ID of the transaction on the SumUp platform. | [optional] 
**productSummary** | **String** | Short description of the payment. The value is taken from the &#x60;description&#x60; property of the related checkout resource. | [optional] 
**payoutsTotal** | **Number** | Total number of payouts to the registered user specified in the &#x60;user&#x60; property. | [optional] 
**payoutsReceived** | **Number** | Number of payouts that are made to the registered user specified in the &#x60;user&#x60; property. | [optional] 
**payoutPlan** | **String** | Payout plan of the registered user at the time when the transaction was made. | [optional] 
**username** | [**User**](User.md) |  | [optional] 
**lat** | [**Lat**](Lat.md) |  | [optional] 
**lon** | [**Lon**](Lon.md) |  | [optional] 
**horizontalAccuracy** | [**HorizontalAccuracy**](HorizontalAccuracy.md) |  | [optional] 
**simplePaymentType** | **String** | Simple name of the payment type. | [optional] 
**verificationMethod** | **String** | Verification method used for the transaction. | [optional] 
**card** | [**CardResponse**](CardResponse.md) |  | [optional] 
**localTime** | **Date** | Local date and time of the creation of the transaction. | [optional] 
**payoutType** | **String** | Payout type for the transaction. | [optional] 
**products** | [**[Product]**](Product.md) | List of products from the merchant&#x27;s catalog for which the transaction serves as a payment. | [optional] 
**vatRates** | **[Object]** | List of VAT rates applicable to the transaction. | [optional] 
**transactionEvents** | [**[TransactionEvent]**](TransactionEvent.md) | List of transaction events related to the transaction. | [optional] 
**simpleStatus** | **String** | Status generated from the processing status and the latest transaction state. | [optional] 
**links** | **[Object]** | List of hyperlinks for accessing related resources. | [optional] 
**events** | [**[Event]**](Event.md) | List of events related to the transaction. | [optional] 
**location** | [**ReceiptTransactionLocation**](ReceiptTransactionLocation.md) |  | [optional] 
**taxEnabled** | **Boolean** | Indicates whether tax deduction is enabled for the transaction. | [optional] 

<a name="EntryModeEnum"></a>
## Enum: EntryModeEnum

* `CUSTOMER_ENTRY` (value: `"CUSTOMER_ENTRY"`)


<a name="PayoutPlanEnum"></a>
## Enum: PayoutPlanEnum

* `SINGLE_PAYMENT` (value: `"SINGLE_PAYMENT"`)
* `TRUE_INSTALLMENT` (value: `"TRUE_INSTALLMENT"`)
* `ACCELERATED_INSTALLMENT` (value: `"ACCELERATED_INSTALLMENT"`)


<a name="SimplePaymentTypeEnum"></a>
## Enum: SimplePaymentTypeEnum

* `MOTO` (value: `"MOTO"`)
* `CASH` (value: `"CASH"`)
* `CC_SIGNATURE` (value: `"CC_SIGNATURE"`)
* `ELV` (value: `"ELV"`)
* `CC_CUSTOMER_ENTERED` (value: `"CC_CUSTOMER_ENTERED"`)
* `MANUAL_ENTRY` (value: `"MANUAL_ENTRY"`)
* `EMV` (value: `"EMV"`)


<a name="VerificationMethodEnum"></a>
## Enum: VerificationMethodEnum

* `none` (value: `"none"`)
* `signature` (value: `"signature"`)
* `offlinePin` (value: `"offline pin"`)
* `onlinePin` (value: `"online pin"`)
* `offlinePinSignature` (value: `"offline pin + signature"`)
* `confirmationCodeVerified` (value: `"confirmation code verified"`)


<a name="PayoutTypeEnum"></a>
## Enum: PayoutTypeEnum

* `BANK_ACCOUNT` (value: `"BANK_ACCOUNT"`)
* `BALANCE` (value: `"BALANCE"`)
* `PREPAID_CARD` (value: `"PREPAID_CARD"`)


<a name="SimpleStatusEnum"></a>
## Enum: SimpleStatusEnum

* `SUCCESSFUL` (value: `"SUCCESSFUL"`)
* `PAID_OUT` (value: `"PAID_OUT"`)
* `CANCEL_FAILED` (value: `"CANCEL_FAILED"`)
* `CANCELLED` (value: `"CANCELLED"`)
* `CHARGEBACK` (value: `"CHARGEBACK"`)
* `FAILED` (value: `"FAILED"`)
* `REFUND_FAILED` (value: `"REFUND_FAILED"`)
* `REFUNDED` (value: `"REFUNDED"`)
* `NON_COLLECTION` (value: `"NON_COLLECTION"`)

