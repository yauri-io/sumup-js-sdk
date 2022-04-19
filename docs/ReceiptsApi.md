# SumUpRestApi.ReceiptsApi

All URIs are relative to *https://api.sumup.com/{version}*

Method | HTTP request | Description
------------- | ------------- | -------------
[**receiptsIdGet**](ReceiptsApi.md#receiptsIdGet) | **GET** /receipts/{id} | Retrieve receipt details

<a name="receiptsIdGet"></a>
# **receiptsIdGet**
> Receipts receiptsIdGet(id, mid, opts)

Retrieve receipt details

Retrieves receipt specific data for a transaction.

### Example
```javascript
import {SumUpRestApi} from 'sumup-rest-api';
let defaultClient = SumUpRestApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: accessToken
let accessToken = defaultClient.authentications['accessToken'];
accessToken.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new SumUpRestApi.ReceiptsApi();
let id = "id_example"; // String | SumUp unique transaction ID or transaction code, e.g. TS7HDYLSKD.
let mid = "mid_example"; // String | Merchant code.
let opts = { 
  'txEventId': 56 // Number | The ID of the transaction event (refund).
};
apiInstance.receiptsIdGet(id, mid, opts, (error, data, response) => {
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
 **id** | **String**| SumUp unique transaction ID or transaction code, e.g. TS7HDYLSKD. | 
 **mid** | **String**| Merchant code. | 
 **txEventId** | **Number**| The ID of the transaction event (refund). | [optional] 

### Return type

[**Receipts**](Receipts.md)

### Authorization

[accessToken](../README.md#accessToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

