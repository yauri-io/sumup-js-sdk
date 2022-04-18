# SumUpRestApi.Card

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** | Name of the cardholder as it appears on the payment card. | 
**_number** | **String** | Number of the payment card (without spaces). | 
**expiryYear** | **String** | Year from the expiration time of the payment card. Accepted formats are &#x60;YY&#x60; and &#x60;YYYY&#x60;. | 
**expiryMonth** | **String** | Month from the expiration time of the payment card. Accepted format is &#x60;MM&#x60;. | 
**cvv** | **String** | Three or four-digit card verification value (security code) of the payment card. | 
**zipCode** | **String** | Required five-digit ZIP code. Applicable only to merchant users in the USA. | [optional] 
**last4Digits** | **String** | Last 4 digits of the payment card number. | 
**type** | **String** | Issuing card network of the payment card. | 

<a name="ExpiryMonthEnum"></a>
## Enum: ExpiryMonthEnum

* `_01` (value: `"01"`)
* `_02` (value: `"02"`)
* `_03` (value: `"03"`)
* `_04` (value: `"04"`)
* `_05` (value: `"05"`)
* `_06` (value: `"06"`)
* `_07` (value: `"07"`)
* `_08` (value: `"08"`)
* `_09` (value: `"09"`)
* `_10` (value: `"10"`)
* `_11` (value: `"11"`)
* `_12` (value: `"12"`)


<a name="TypeEnum"></a>
## Enum: TypeEnum

* `AMEX` (value: `"AMEX"`)
* `CUP` (value: `"CUP"`)
* `DINERS` (value: `"DINERS"`)
* `DISCOVER` (value: `"DISCOVER"`)
* `ELO` (value: `"ELO"`)
* `ELV` (value: `"ELV"`)
* `HIPERCARD` (value: `"HIPERCARD"`)
* `JCB` (value: `"JCB"`)
* `MAESTRO` (value: `"MAESTRO"`)
* `MASTERCARD` (value: `"MASTERCARD"`)
* `VISA` (value: `"VISA"`)
* `VISA_ELECTRON` (value: `"VISA_ELECTRON"`)
* `VISA_VPAY` (value: `"VISA_VPAY"`)
* `UNKNOWN` (value: `"UNKNOWN"`)

