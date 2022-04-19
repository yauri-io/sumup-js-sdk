# SumUpRestApi.SubaccountsApi

All URIs are relative to *https://api.sumup.com/{version}*

Method | HTTP request | Description
------------- | ------------- | -------------
[**meAccountsGet**](SubaccountsApi.md#meAccountsGet) | **GET** /me/accounts | List subaccounts
[**meAccountsOperatorCodeDelete**](SubaccountsApi.md#meAccountsOperatorCodeDelete) | **DELETE** /me/accounts/{operator_code} | Deactivate a subaccount
[**meAccountsOperatorCodePut**](SubaccountsApi.md#meAccountsOperatorCodePut) | **PUT** /me/accounts/{operator_code} | Update a subaccount
[**meAccountsPost**](SubaccountsApi.md#meAccountsPost) | **POST** /me/accounts | Create a subaccount

<a name="meAccountsGet"></a>
# **meAccountsGet**
> SubaccountsDetails meAccountsGet(opts)

List subaccounts

### Example
```javascript
import {SumUpRestApi} from 'sumup-rest-api';
let defaultClient = SumUpRestApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: accessToken
let accessToken = defaultClient.authentications['accessToken'];
accessToken.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new SumUpRestApi.SubaccountsApi();
let opts = { 
  'include': ["include_example"] // [String] | A list of additional information you want to receive for subaccounts.
};
apiInstance.meAccountsGet(opts, (error, data, response) => {
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
 **include** | [**[String]**](String.md)| A list of additional information you want to receive for subaccounts. | [optional] 

### Return type

[**SubaccountsDetails**](SubaccountsDetails.md)

### Authorization

[accessToken](../README.md#accessToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="meAccountsOperatorCodeDelete"></a>
# **meAccountsOperatorCodeDelete**
> meAccountsOperatorCodeDelete(operatorCode)

Deactivate a subaccount

### Example
```javascript
import {SumUpRestApi} from 'sumup-rest-api';
let defaultClient = SumUpRestApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: accessToken
let accessToken = defaultClient.authentications['accessToken'];
accessToken.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new SumUpRestApi.SubaccountsApi();
let operatorCode = "operatorCode_example"; // String | Operator code

apiInstance.meAccountsOperatorCodeDelete(operatorCode, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **operatorCode** | **String**| Operator code | 

### Return type

null (empty response body)

### Authorization

[accessToken](../README.md#accessToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="meAccountsOperatorCodePut"></a>
# **meAccountsOperatorCodePut**
> meAccountsOperatorCodePut(operatorCode, opts)

Update a subaccount

### Example
```javascript
import {SumUpRestApi} from 'sumup-rest-api';
let defaultClient = SumUpRestApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: accessToken
let accessToken = defaultClient.authentications['accessToken'];
accessToken.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new SumUpRestApi.SubaccountsApi();
let operatorCode = "operatorCode_example"; // String | Operator code
let opts = { 
  'body': new SumUpRestApi.SubaccountPayload() // SubaccountPayload | 
};
apiInstance.meAccountsOperatorCodePut(operatorCode, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **operatorCode** | **String**| Operator code | 
 **body** | [**SubaccountPayload**](SubaccountPayload.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

[accessToken](../README.md#accessToken)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="meAccountsPost"></a>
# **meAccountsPost**
> Subaccount meAccountsPost(opts)

Create a subaccount

### Example
```javascript
import {SumUpRestApi} from 'sumup-rest-api';
let defaultClient = SumUpRestApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: accessToken
let accessToken = defaultClient.authentications['accessToken'];
accessToken.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new SumUpRestApi.SubaccountsApi();
let opts = { 
  'body': new SumUpRestApi.SubaccountPayload() // SubaccountPayload | 
};
apiInstance.meAccountsPost(opts, (error, data, response) => {
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
 **body** | [**SubaccountPayload**](SubaccountPayload.md)|  | [optional] 

### Return type

[**Subaccount**](Subaccount.md)

### Authorization

[accessToken](../README.md#accessToken)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

