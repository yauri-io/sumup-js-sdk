# SumUpRestApi.AccountDetailsApi

All URIs are relative to *https://api.sumup.com/{version}*

Method | HTTP request | Description
------------- | ------------- | -------------
[**meGet**](AccountDetailsApi.md#meGet) | **GET** /me | Retrieve an account

<a name="meGet"></a>
# **meGet**
> MerchantAccount meGet(opts)

Retrieve an account

Returns user account information.

### Example
```javascript
import {SumUpRestApi} from 'sum_up_rest_api';
let defaultClient = SumUpRestApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: accessToken
let accessToken = defaultClient.authentications['accessToken'];
accessToken.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new SumUpRestApi.AccountDetailsApi();
let opts = { 
  'include': ["include_example"] // [String] | A list of additional information you want to receive for the user. By default only personal and merchant profile information will be returned.
};
apiInstance.meGet(opts, (error, data, response) => {
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
 **include** | [**[String]**](String.md)| A list of additional information you want to receive for the user. By default only personal and merchant profile information will be returned. | [optional] 

### Return type

[**MerchantAccount**](MerchantAccount.md)

### Authorization

[accessToken](../README.md#accessToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

