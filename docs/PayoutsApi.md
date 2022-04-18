# SumUpRestApi.PayoutsApi

All URIs are relative to *https://api.sumup.com/{version}*

Method | HTTP request | Description
------------- | ------------- | -------------
[**meFinancialsPayoutsGet**](PayoutsApi.md#meFinancialsPayoutsGet) | **GET** /me/financials/payouts | List payouts
[**meFinancialsTransactionsGet**](PayoutsApi.md#meFinancialsTransactionsGet) | **GET** /me/financials/transactions | List transactions

<a name="meFinancialsPayoutsGet"></a>
# **meFinancialsPayoutsGet**
> FinancialPayouts meFinancialsPayoutsGet(startDate, endDate, opts)

List payouts

Lists ordered payouts for the merchant account.

### Example
```javascript
import {SumUpRestApi} from 'sum_up_rest_api';
let defaultClient = SumUpRestApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: accessToken
let accessToken = defaultClient.authentications['accessToken'];
accessToken.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new SumUpRestApi.PayoutsApi();
let startDate = new Date("2013-10-20"); // Date | Start date (in <a href=\"https://en.wikipedia.org/wiki/ISO_8601\" target=\"_blank\" rel=\"noopener\">ISO8601</a> format).
let endDate = new Date("2013-10-20"); // Date | End date (in <a href=\"https://en.wikipedia.org/wiki/ISO_8601\" target=\"_blank\" rel=\"noopener\">ISO8601</a> format).
let opts = { 
  'format': "format_example", // String | 
  'limit': 56, // Number | 
  'order': "order_example" // String | 
};
apiInstance.meFinancialsPayoutsGet(startDate, endDate, opts, (error, data, response) => {
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
 **startDate** | **Date**| Start date (in &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/ISO_8601\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener\&quot;&gt;ISO8601&lt;/a&gt; format). | 
 **endDate** | **Date**| End date (in &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/ISO_8601\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener\&quot;&gt;ISO8601&lt;/a&gt; format). | 
 **format** | **String**|  | [optional] 
 **limit** | **Number**|  | [optional] 
 **order** | **String**|  | [optional] 

### Return type

[**FinancialPayouts**](FinancialPayouts.md)

### Authorization

[accessToken](../README.md#accessToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="meFinancialsTransactionsGet"></a>
# **meFinancialsTransactionsGet**
> FinancialTransactions meFinancialsTransactionsGet(startDate, endDate, opts)

List transactions

Lists a less detailed history of all transactions associated with the merchant account.

### Example
```javascript
import {SumUpRestApi} from 'sum_up_rest_api';
let defaultClient = SumUpRestApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: accessToken
let accessToken = defaultClient.authentications['accessToken'];
accessToken.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new SumUpRestApi.PayoutsApi();
let startDate = new Date("2013-10-20"); // Date | Start date (in <a href=\"https://en.wikipedia.org/wiki/ISO_8601\" target=\"_blank\" rel=\"noopener\">ISO8601</a> format).
let endDate = new Date("2013-10-20"); // Date | End date (in <a href=\"https://en.wikipedia.org/wiki/ISO_8601\" target=\"_blank\" rel=\"noopener\">ISO8601</a> format).
let opts = { 
  'format': "format_example", // String | 
  'limit': 56, // Number | 
  'order': "order_example" // String | 
};
apiInstance.meFinancialsTransactionsGet(startDate, endDate, opts, (error, data, response) => {
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
 **startDate** | **Date**| Start date (in &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/ISO_8601\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener\&quot;&gt;ISO8601&lt;/a&gt; format). | 
 **endDate** | **Date**| End date (in &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/ISO_8601\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener\&quot;&gt;ISO8601&lt;/a&gt; format). | 
 **format** | **String**|  | [optional] 
 **limit** | **Number**|  | [optional] 
 **order** | **String**|  | [optional] 

### Return type

[**FinancialTransactions**](FinancialTransactions.md)

### Authorization

[accessToken](../README.md#accessToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

