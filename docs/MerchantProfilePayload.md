# SumUpRestApi.MerchantProfilePayload

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**legalTypeId** | **Number** | Id of the legal type of the merchant | 
**merchantCategoryCode** | **String** | Merchant category code | 
**companyName** | **String** | Company name | 
**companyRegistrationNumber** | **String** | Company registration number | 
**vatId** | **String** | Vat ID | [optional] 
**permanentCertificateAccessCode** | **String** | Payment certificate access code | [optional] 
**website** | **String** | Company website | [optional] 
**natureAndPurpose** | **String** | Nature and purpose of the business. Required for the following merchant category codes: 5999, 7392, 8999, 5694, 5969, 7299, 7399 | [optional] 
**mobilePhone** | **String** | Mobile number | [optional] 
**address** | [**AddressPayload**](AddressPayload.md) |  | 
**doingBusinessAs** | [**MerchantProfilePayloadDoingBusinessAs**](MerchantProfilePayloadDoingBusinessAs.md) |  | [optional] 
**businessOwners** | [**BusinessOwners**](BusinessOwners.md) |  | [optional] 
**isTestAccount** | **Boolean** | Defines if the account nature is for testing | [optional] 
