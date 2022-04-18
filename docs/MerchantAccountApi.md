# SumUpRestApi.MerchantAccountApi

All URIs are relative to *https://api.sumup.com/{version}*

Method | HTTP request | Description
------------- | ------------- | -------------
[**meMerchantProfileBankAccountsGet**](MerchantAccountApi.md#meMerchantProfileBankAccountsGet) | **GET** /me/merchant-profile/bank-accounts | List bank accounts
[**meMerchantProfileDoingBusinessAsGet**](MerchantAccountApi.md#meMerchantProfileDoingBusinessAsGet) | **GET** /me/merchant-profile/doing-business-as | Retrieve DBA
[**meMerchantProfileGet**](MerchantAccountApi.md#meMerchantProfileGet) | **GET** /me/merchant-profile | Retrieve a profile
[**meMerchantProfileSettingsGet**](MerchantAccountApi.md#meMerchantProfileSettingsGet) | **GET** /me/merchant-profile/settings | List settings

<a name="meMerchantProfileBankAccountsGet"></a>
# **meMerchantProfileBankAccountsGet**
> [BankAccount] meMerchantProfileBankAccountsGet(opts)

List bank accounts

Retrives bank accounts of the merchant.

### Example
```javascript
import {SumUpRestApi} from 'sum_up_rest_api';
let defaultClient = SumUpRestApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: accessToken
let accessToken = defaultClient.authentications['accessToken'];
accessToken.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new SumUpRestApi.MerchantAccountApi();
let opts = { 
  'primary': true // Boolean | The true value will return only the primary bank account (the one used for settlements).
};
apiInstance.meMerchantProfileBankAccountsGet(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **primary** | **Boolean**| The true value will return only the primary bank account (the one used for settlements). | [optional] 

### Return type

[**[BankAccount]**](BankAccount.md)

### Authorization

[accessToken](../README.md#accessToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="meMerchantProfileDoingBusinessAsGet"></a>
# **meMerchantProfileDoingBusinessAsGet**
> DoingBusinessAs meMerchantProfileDoingBusinessAsGet()

Retrieve DBA

Retrieves Doing Business As profile.

### Example
```javascript
import {SumUpRestApi} from 'sum_up_rest_api';
let defaultClient = SumUpRestApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: accessToken
let accessToken = defaultClient.authentications['accessToken'];
accessToken.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new SumUpRestApi.MerchantAccountApi();
apiInstance.meMerchantProfileDoingBusinessAsGet((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**DoingBusinessAs**](DoingBusinessAs.md)

### Authorization

[accessToken](../README.md#accessToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="meMerchantProfileGet"></a>
# **meMerchantProfileGet**
> MerchantProfile meMerchantProfileGet()

Retrieve a profile

Retrieves merchant profile data.

### Example
```javascript
import {SumUpRestApi} from 'sum_up_rest_api';
let defaultClient = SumUpRestApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: accessToken
let accessToken = defaultClient.authentications['accessToken'];
accessToken.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new SumUpRestApi.MerchantAccountApi();
apiInstance.meMerchantProfileGet((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**MerchantProfile**](MerchantProfile.md)

### Authorization

[accessToken](../README.md#accessToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="meMerchantProfileSettingsGet"></a>
# **meMerchantProfileSettingsGet**
> MerchantSettings meMerchantProfileSettingsGet()

List settings

Retrieves merchant settings.

### Example
```javascript
import {SumUpRestApi} from 'sum_up_rest_api';
let defaultClient = SumUpRestApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: accessToken
let accessToken = defaultClient.authentications['accessToken'];
accessToken.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new SumUpRestApi.MerchantAccountApi();
apiInstance.meMerchantProfileSettingsGet((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**MerchantSettings**](MerchantSettings.md)

### Authorization

[accessToken](../README.md#accessToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

