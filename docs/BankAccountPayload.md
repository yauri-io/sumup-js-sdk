# SumUpRestApi.BankAccountPayload

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bankCode** | **String** | Bank code | [optional] 
**branchCode** | **String** | Branch code | [optional] 
**accountNumber** | **String** | Account number | [optional] 
**iban** | **String** | IBAN | 
**swift** | **String** | SWIFT code | 
**accountType** | **String** | Type of the account. | [optional] 
**accountHolderName** | **String** | Account holder name | 
**checkDigit** | **String** | Check digit | [optional] 
**primary** | **Boolean** | Determines if this bank account will be primary. Default is false | [optional] 
**status** | **String** | Determines the bank account status. | [optional] 
**accountCategory** | **String** | Determines if this bank account is business or personal. | [optional] 

<a name="AccountTypeEnum"></a>
## Enum: AccountTypeEnum

* `CURRENT` (value: `"CURRENT"`)
* `SAVINGS` (value: `"SAVINGS"`)


<a name="StatusEnum"></a>
## Enum: StatusEnum

* `OPEN` (value: `"OPEN"`)


<a name="AccountCategoryEnum"></a>
## Enum: AccountCategoryEnum

* `PERSONAL` (value: `"PERSONAL"`)
* `BUSINESS` (value: `"BUSINESS"`)

