# SumUpRestApi.RefundsApi

All URIs are relative to *https://api.sumup.com/{version}*

Method | HTTP request | Description
------------- | ------------- | -------------
[**meRefundTxnIdPost**](RefundsApi.md#meRefundTxnIdPost) | **POST** /me/refund/{txn_id} | Refund a transaction

<a name="meRefundTxnIdPost"></a>
# **meRefundTxnIdPost**
> meRefundTxnIdPost(txnId, opts)

Refund a transaction

Refunds an identified transaction either in full or partially.

### Example
```javascript
import {SumUpRestApi} from 'sumup-rest-api';
let defaultClient = SumUpRestApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: accessToken
let accessToken = defaultClient.authentications['accessToken'];
accessToken.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new SumUpRestApi.RefundsApi();
let txnId = "txnId_example"; // String | Unique ID of the transaction.
let opts = { 
  'body': null // Object | 
};
apiInstance.meRefundTxnIdPost(txnId, opts, (error, data, response) => {
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
 **txnId** | **String**| Unique ID of the transaction. | 
 **body** | [**Object**](Object.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

[accessToken](../README.md#accessToken)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

