# SumUpRestApi.ReceiptTransaction

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**transactionCode** | **String** | Transaction code. | [optional] 
**amount** | **String** | Transaction amount. | [optional] 
**vatAmount** | **String** | Transaction VAT amount. | [optional] 
**tipAmount** | **String** | Tip amount (included in transaction amount). | [optional] 
**feeAmount** | **Number** | Total transaction fee. | [optional] 
**currency** | **String** | Transaction currency. | [optional] 
**timestamp** | **Date** | Time created at. | [optional] 
**status** | **String** | Transaction processing status. | [optional] 
**paymentType** | **String** | Transaction type. | [optional] 
**entryMode** | **String** | Transaction entry mode. | [optional] 
**verificationMethod** | **String** | Cardholder verification method. | [optional] 
**card** | [**ReceiptCard**](ReceiptCard.md) |  | [optional] 
**installmentsCount** | **Number** | Number of installments. | [optional] 
**customerEmail** | **String** |  | [optional] 
**products** | [**[ReceiptTransactionProducts]**](ReceiptTransactionProducts.md) | Products | [optional] 
**vatRates** | [**[ReceiptTransactionVatRates]**](ReceiptTransactionVatRates.md) | Vat rates. | [optional] 
**location** | [**ReceiptTransactionLocation**](ReceiptTransactionLocation.md) |  | [optional] 
**events** | [**[ReceiptEvent]**](ReceiptEvent.md) | Events | [optional] 
**receiptNo** | **String** | Receipt number | [optional] 
