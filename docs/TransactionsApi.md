# SumUpRestApi.TransactionsApi

All URIs are relative to *https://api.sumup.com/{version}*

Method | HTTP request | Description
------------- | ------------- | -------------
[**meTransactionsGet**](TransactionsApi.md#meTransactionsGet) | **GET** /me/transactions | Retrieve a transaction
[**meTransactionsHistoryGet**](TransactionsApi.md#meTransactionsHistoryGet) | **GET** /me/transactions/history | List transactions

<a name="meTransactionsGet"></a>
# **meTransactionsGet**
> TransactionFull meTransactionsGet(opts)

Retrieve a transaction

Retrieves the full details of an identified transaction. The transaction resource is identified by a query parameter and *one* of following parameters is required:  *  &#x60;id&#x60;  *  &#x60;internal_id&#x60;  *  &#x60;transaction_code&#x60;  *  &#x60;foreign_transaction_id&#x60;  *  &#x60;client_transaction_id&#x60; 

### Example
```javascript
import {SumUpRestApi} from 'sumup-rest-api';
let defaultClient = SumUpRestApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: accessToken
let accessToken = defaultClient.authentications['accessToken'];
accessToken.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new SumUpRestApi.TransactionsApi();
let opts = { 
  'id': "id_example", // String | Retrieves the transaction resource with the specified transaction ID (the `id` parameter in the transaction resource).
  'internalId': "internalId_example", // String | Retrieves the transaction resource with the specified internal transaction ID (the `internal_id` parameter in the transaction resource).
  'transactionCode': "transactionCode_example" // String | Retrieves the transaction resource with the specified transaction code.
};
apiInstance.meTransactionsGet(opts, (error, data, response) => {
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
 **id** | **String**| Retrieves the transaction resource with the specified transaction ID (the &#x60;id&#x60; parameter in the transaction resource). | [optional] 
 **internalId** | **String**| Retrieves the transaction resource with the specified internal transaction ID (the &#x60;internal_id&#x60; parameter in the transaction resource). | [optional] 
 **transactionCode** | **String**| Retrieves the transaction resource with the specified transaction code. | [optional] 

### Return type

[**TransactionFull**](TransactionFull.md)

### Authorization

[accessToken](../README.md#accessToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="meTransactionsHistoryGet"></a>
# **meTransactionsHistoryGet**
> InlineResponse2002 meTransactionsHistoryGet(opts)

List transactions

Lists detailed history of all transactions associated with the merchant account.

### Example
```javascript
import {SumUpRestApi} from 'sumup-rest-api';
let defaultClient = SumUpRestApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: accessToken
let accessToken = defaultClient.authentications['accessToken'];
accessToken.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new SumUpRestApi.TransactionsApi();
let opts = { 
  'transactionCode': "transactionCode_example", // String | Retrieves the transaction resource with the specified transaction code.
  'order': "order_example", // String | Specifies the order in which the returned results are displayed.
  'limit': 56, // Number | Specifies the maximum number of results per page. Value must be a positive integer and if not specified, will return 10 results.
  'users': ["users_example"], // [String] | Filters the returned results by user email.
  'statuses': ["statuses_example"], // [String] | Filters the returned results by the specified list of final statuses of the transactions.
  'paymentTypes': ["paymentTypes_example"], // [String] | Filters the returned results by the specified list of payment types used for the transactions.
  'types': ["types_example"], // [String] | Filters the returned results by the specified list of transaction types.
  'changesSince': new Date("2013-10-20T19:20:30+01:00"), // Date | Filters the results by the latest modification time of resources and returns only transactions that are modified *at or after* the specified timestamp (in <a href=\"https://en.wikipedia.org/wiki/ISO_8601\" target=\"_blank\" rel=\"noopener\">ISO8601</a> format).
  'newestTime': new Date("2013-10-20T19:20:30+01:00"), // Date | Filters the results by the creation time of resources and returns only transactions that are created *before* the specified timestamp (in <a href=\"https://en.wikipedia.org/wiki/ISO_8601\" target=\"_blank\" rel=\"noopener\">ISO8601</a> format).
  'newestRef': "newestRef_example", // String | Filters the results by the reference ID of transaciton events and returns only transactions with events whose IDs are *smaller* than the specified value. This parameters supersedes the `newest_time` parameter (if both are provided in the request).
  'oldestTime': new Date("2013-10-20T19:20:30+01:00"), // Date | Filters the results by the creation time of resources and returns only transactions that are created *at or after* the specified timestamp (in <a href=\"https://en.wikipedia.org/wiki/ISO_8601\" target=\"_blank\" rel=\"noopener\">ISO8601</a> format).
  'oldestRef': "oldestRef_example" // String | Filters the results by the reference ID of transaciton events and returns only transactions with events whose IDs are *greater* than the specified value. This parameters supersedes the `oldest_time` parameter (if both are provided in the request).
};
apiInstance.meTransactionsHistoryGet(opts, (error, data, response) => {
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
 **transactionCode** | **String**| Retrieves the transaction resource with the specified transaction code. | [optional] 
 **order** | **String**| Specifies the order in which the returned results are displayed. | [optional] 
 **limit** | **Number**| Specifies the maximum number of results per page. Value must be a positive integer and if not specified, will return 10 results. | [optional] 
 **users** | [**[String]**](String.md)| Filters the returned results by user email. | [optional] 
 **statuses** | [**[String]**](String.md)| Filters the returned results by the specified list of final statuses of the transactions. | [optional] 
 **paymentTypes** | [**[String]**](String.md)| Filters the returned results by the specified list of payment types used for the transactions. | [optional] 
 **types** | [**[String]**](String.md)| Filters the returned results by the specified list of transaction types. | [optional] 
 **changesSince** | **Date**| Filters the results by the latest modification time of resources and returns only transactions that are modified *at or after* the specified timestamp (in &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/ISO_8601\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener\&quot;&gt;ISO8601&lt;/a&gt; format). | [optional] 
 **newestTime** | **Date**| Filters the results by the creation time of resources and returns only transactions that are created *before* the specified timestamp (in &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/ISO_8601\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener\&quot;&gt;ISO8601&lt;/a&gt; format). | [optional] 
 **newestRef** | **String**| Filters the results by the reference ID of transaciton events and returns only transactions with events whose IDs are *smaller* than the specified value. This parameters supersedes the &#x60;newest_time&#x60; parameter (if both are provided in the request). | [optional] 
 **oldestTime** | **Date**| Filters the results by the creation time of resources and returns only transactions that are created *at or after* the specified timestamp (in &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/ISO_8601\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener\&quot;&gt;ISO8601&lt;/a&gt; format). | [optional] 
 **oldestRef** | **String**| Filters the results by the reference ID of transaciton events and returns only transactions with events whose IDs are *greater* than the specified value. This parameters supersedes the &#x60;oldest_time&#x60; parameter (if both are provided in the request). | [optional] 

### Return type

[**InlineResponse2002**](InlineResponse2002.md)

### Authorization

[accessToken](../README.md#accessToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

