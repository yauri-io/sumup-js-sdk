# SumUpRestApi.CustomersApi

All URIs are relative to *https://api.sumup.com/{version}*

Method | HTTP request | Description
------------- | ------------- | -------------
[**customersCustomerIdGet**](CustomersApi.md#customersCustomerIdGet) | **GET** /customers/{customer_id} | Retrieve a customer
[**customersCustomerIdPaymentInstrumentsGet**](CustomersApi.md#customersCustomerIdPaymentInstrumentsGet) | **GET** /customers/{customer_id}/payment-instruments | List payment instruments
[**customersCustomerIdPaymentInstrumentsPost**](CustomersApi.md#customersCustomerIdPaymentInstrumentsPost) | **POST** /customers/{customer_id}/payment-instruments | Create a payment instrument
[**customersCustomerIdPaymentInstrumentsTokenDelete**](CustomersApi.md#customersCustomerIdPaymentInstrumentsTokenDelete) | **DELETE** /customers/{customer_id}/payment-instruments/{token} | Deactivate a payment instrument
[**customersCustomerIdPut**](CustomersApi.md#customersCustomerIdPut) | **PUT** /customers/{customer_id} | Update a customer
[**customersPost**](CustomersApi.md#customersPost) | **POST** /customers | Create a customer

<a name="customersCustomerIdGet"></a>
# **customersCustomerIdGet**
> CustomerResponse customersCustomerIdGet(customerId)

Retrieve a customer

Retrieves an identified saved customer resource through the unique &#x60;customer_id&#x60; parameter, generated upon customer creation.

### Example
```javascript
import {SumUpRestApi} from 'sum_up_rest_api';
let defaultClient = SumUpRestApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: accessToken
let accessToken = defaultClient.authentications['accessToken'];
accessToken.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new SumUpRestApi.CustomersApi();
let customerId = "customerId_example"; // String | Unique ID of the saved customer resource.

apiInstance.customersCustomerIdGet(customerId, (error, data, response) => {
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
 **customerId** | **String**| Unique ID of the saved customer resource. | 

### Return type

[**CustomerResponse**](CustomerResponse.md)

### Authorization

[accessToken](../README.md#accessToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="customersCustomerIdPaymentInstrumentsGet"></a>
# **customersCustomerIdPaymentInstrumentsGet**
> [PaymentInstrumentResponse] customersCustomerIdPaymentInstrumentsGet(customerId)

List payment instruments

Lists all payment instrument resources that are saved for an identified customer.

### Example
```javascript
import {SumUpRestApi} from 'sum_up_rest_api';
let defaultClient = SumUpRestApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: accessToken
let accessToken = defaultClient.authentications['accessToken'];
accessToken.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new SumUpRestApi.CustomersApi();
let customerId = "customerId_example"; // String | Unique ID of the saved customer resource.

apiInstance.customersCustomerIdPaymentInstrumentsGet(customerId, (error, data, response) => {
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
 **customerId** | **String**| Unique ID of the saved customer resource. | 

### Return type

[**[PaymentInstrumentResponse]**](PaymentInstrumentResponse.md)

### Authorization

[accessToken](../README.md#accessToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="customersCustomerIdPaymentInstrumentsPost"></a>
# **customersCustomerIdPaymentInstrumentsPost**
> PaymentInstrumentResponse customersCustomerIdPaymentInstrumentsPost(customerId, opts)

Create a payment instrument

Creates and activates a new payment instrument resource by saving a payment card for an identified customer. Implement to improve customer experience by skipping the step of entering payment instrument details.  The token created via this endpoint &lt;b&gt;can not&lt;/b&gt; be used for recurring payments by merchants operating within the EU. For more information visit our &lt;a href&#x3D;\&quot;https://developer.sumup.com/docs/recurring-payments/\&quot; target&#x3D;\&quot;_blank\&quot;&gt;recurring payments guide&lt;/a&gt;. 

### Example
```javascript
import {SumUpRestApi} from 'sum_up_rest_api';
let defaultClient = SumUpRestApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: accessToken
let accessToken = defaultClient.authentications['accessToken'];
accessToken.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new SumUpRestApi.CustomersApi();
let customerId = "customerId_example"; // String | Unique ID of the saved customer resource.
let opts = { 
  'body': new SumUpRestApi.PaymentInstrumentCard() // PaymentInstrumentCard | 
};
apiInstance.customersCustomerIdPaymentInstrumentsPost(customerId, opts, (error, data, response) => {
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
 **customerId** | **String**| Unique ID of the saved customer resource. | 
 **body** | [**PaymentInstrumentCard**](PaymentInstrumentCard.md)|  | [optional] 

### Return type

[**PaymentInstrumentResponse**](PaymentInstrumentResponse.md)

### Authorization

[accessToken](../README.md#accessToken)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="customersCustomerIdPaymentInstrumentsTokenDelete"></a>
# **customersCustomerIdPaymentInstrumentsTokenDelete**
> customersCustomerIdPaymentInstrumentsTokenDelete(customerId, token)

Deactivate a payment instrument

Deactivates an identified card payment instrument resource for a customer.

### Example
```javascript
import {SumUpRestApi} from 'sum_up_rest_api';
let defaultClient = SumUpRestApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: accessToken
let accessToken = defaultClient.authentications['accessToken'];
accessToken.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new SumUpRestApi.CustomersApi();
let customerId = "customerId_example"; // String | Unique ID of the saved customer resource.
let token = "token_example"; // String | Unique token identifying the card saved as a payment instrument resource.

apiInstance.customersCustomerIdPaymentInstrumentsTokenDelete(customerId, token, (error, data, response) => {
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
 **customerId** | **String**| Unique ID of the saved customer resource. | 
 **token** | **String**| Unique token identifying the card saved as a payment instrument resource. | 

### Return type

null (empty response body)

### Authorization

[accessToken](../README.md#accessToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="customersCustomerIdPut"></a>
# **customersCustomerIdPut**
> CustomerResponse customersCustomerIdPut(customerId, opts)

Update a customer

Updates an identified saved customer resource&#x27;s personal details.   The request only overwrites the parameters included in the request, all other parameters will remain with their initially assigned values. 

### Example
```javascript
import {SumUpRestApi} from 'sum_up_rest_api';
let defaultClient = SumUpRestApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: accessToken
let accessToken = defaultClient.authentications['accessToken'];
accessToken.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new SumUpRestApi.CustomersApi();
let customerId = "customerId_example"; // String | Unique ID of the saved customer resource.
let opts = { 
  'body': null // Object | 
};
apiInstance.customersCustomerIdPut(customerId, opts, (error, data, response) => {
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
 **customerId** | **String**| Unique ID of the saved customer resource. | 
 **body** | [**Object**](Object.md)|  | [optional] 

### Return type

[**CustomerResponse**](CustomerResponse.md)

### Authorization

[accessToken](../README.md#accessToken)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="customersPost"></a>
# **customersPost**
> CustomerResponse customersPost(opts)

Create a customer

Creates a new saved customer resource which you can later manipulate and save payment instruments to.

### Example
```javascript
import {SumUpRestApi} from 'sum_up_rest_api';
let defaultClient = SumUpRestApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: accessToken
let accessToken = defaultClient.authentications['accessToken'];
accessToken.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new SumUpRestApi.CustomersApi();
let opts = { 
  'body': new SumUpRestApi.Customer() // Customer | Details of the customer.
};
apiInstance.customersPost(opts, (error, data, response) => {
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
 **body** | [**Customer**](Customer.md)| Details of the customer. | [optional] 

### Return type

[**CustomerResponse**](CustomerResponse.md)

### Authorization

[accessToken](../README.md#accessToken)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

