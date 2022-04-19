# SumUpRestApi.CheckoutsApi

All URIs are relative to *https://api.sumup.com/{version}*

Method | HTTP request | Description
------------- | ------------- | -------------
[**checkoutsGet**](CheckoutsApi.md#checkoutsGet) | **GET** /checkouts | List checkouts
[**checkoutsIdDelete**](CheckoutsApi.md#checkoutsIdDelete) | **DELETE** /checkouts/{id} | Deactivate a checkout
[**checkoutsIdGet**](CheckoutsApi.md#checkoutsIdGet) | **GET** /checkouts/{id} | Retrieve a checkout
[**checkoutsIdPut**](CheckoutsApi.md#checkoutsIdPut) | **PUT** /checkouts/{id} | Process a checkout
[**checkoutsPost**](CheckoutsApi.md#checkoutsPost) | **POST** /checkouts | Create a checkout

<a name="checkoutsGet"></a>
# **checkoutsGet**
> [CheckoutSuccess] checkoutsGet(opts)

List checkouts

Lists created checkout resources according to the applied &#x60;checkout_reference&#x60;.

### Example
```javascript
import {SumUpRestApi} from 'sumup-rest-api';
let defaultClient = SumUpRestApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: accessToken
let accessToken = defaultClient.authentications['accessToken'];
accessToken.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new SumUpRestApi.CheckoutsApi();
let opts = { 
  'checkoutReference': "checkoutReference_example" // String | Filters the list of checkout resources by the unique ID of the checkout.
};
apiInstance.checkoutsGet(opts, (error, data, response) => {
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
 **checkoutReference** | **String**| Filters the list of checkout resources by the unique ID of the checkout. | [optional] 

### Return type

[**[CheckoutSuccess]**](CheckoutSuccess.md)

### Authorization

[accessToken](../README.md#accessToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="checkoutsIdDelete"></a>
# **checkoutsIdDelete**
> InlineResponse2001 checkoutsIdDelete(id)

Deactivate a checkout

Deactivates an identified checkout resource. If the checkout has already been processed it can not be deactivated.

### Example
```javascript
import {SumUpRestApi} from 'sumup-rest-api';
let defaultClient = SumUpRestApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: accessToken
let accessToken = defaultClient.authentications['accessToken'];
accessToken.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new SumUpRestApi.CheckoutsApi();
let id = "id_example"; // String | Unique ID of the checkout resource.

apiInstance.checkoutsIdDelete(id, (error, data, response) => {
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
 **id** | **String**| Unique ID of the checkout resource. | 

### Return type

[**InlineResponse2001**](InlineResponse2001.md)

### Authorization

[accessToken](../README.md#accessToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="checkoutsIdGet"></a>
# **checkoutsIdGet**
> CheckoutSuccess checkoutsIdGet(id)

Retrieve a checkout

Retrieves an identified checkout resource. Use this request after processing a checkout to confirm its status and inform the end user respectively.

### Example
```javascript
import {SumUpRestApi} from 'sumup-rest-api';
let defaultClient = SumUpRestApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: accessToken
let accessToken = defaultClient.authentications['accessToken'];
accessToken.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new SumUpRestApi.CheckoutsApi();
let id = "id_example"; // String | Unique ID of the checkout resource.

apiInstance.checkoutsIdGet(id, (error, data, response) => {
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
 **id** | **String**| Unique ID of the checkout resource. | 

### Return type

[**CheckoutSuccess**](CheckoutSuccess.md)

### Authorization

[accessToken](../README.md#accessToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="checkoutsIdPut"></a>
# **checkoutsIdPut**
> CheckoutSuccess checkoutsIdPut(id, opts)

Process a checkout

Processing a checkout will attempt to charge the provided payment instrument for the amount of the specified checkout resource initiated in the &#x60;Create a checkout&#x60; endpoint.  Follow this request with &#x60;Retrieve a checkout&#x60; to confirm its status. 

### Example
```javascript
import {SumUpRestApi} from 'sumup-rest-api';

let apiInstance = new SumUpRestApi.CheckoutsApi();
let id = "id_example"; // String | Unique ID of the checkout resource.
let opts = { 
  'body': new SumUpRestApi.CheckoutProcessMixin() // CheckoutProcessMixin | Details of the payment instrument for processing the checkout.
};
apiInstance.checkoutsIdPut(id, opts, (error, data, response) => {
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
 **id** | **String**| Unique ID of the checkout resource. | 
 **body** | [**CheckoutProcessMixin**](CheckoutProcessMixin.md)| Details of the payment instrument for processing the checkout. | [optional] 

### Return type

[**CheckoutSuccess**](CheckoutSuccess.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="checkoutsPost"></a>
# **checkoutsPost**
> Checkout checkoutsPost(opts)

Create a checkout

Creates a new payment checkout resource. The unique &#x60;checkout_reference&#x60; created by this request, is used for further manipulation of the checkout.   For 3DS checkouts, add the &#x60;redirect_url&#x60; parameter to your request body schema.  Follow by processing a checkout to charge the provided payment instrument. 

### Example
```javascript
import {SumUpRestApi} from 'sumup-rest-api';
let defaultClient = SumUpRestApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: accessToken
let accessToken = defaultClient.authentications['accessToken'];
accessToken.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new SumUpRestApi.CheckoutsApi();
let opts = { 
  'body': new SumUpRestApi.CheckoutCreateRequest() // CheckoutCreateRequest | 
};
apiInstance.checkoutsPost(opts, (error, data, response) => {
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
 **body** | [**CheckoutCreateRequest**](CheckoutCreateRequest.md)|  | [optional] 

### Return type

[**Checkout**](Checkout.md)

### Authorization

[accessToken](../README.md#accessToken)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

