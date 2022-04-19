# SumUpRestApi.PersonalAccountApi

All URIs are relative to *https://api.sumup.com/{version}*

Method | HTTP request | Description
------------- | ------------- | -------------
[**mePersonalProfileGet**](PersonalAccountApi.md#mePersonalProfileGet) | **GET** /me/personal-profile | Retrieve a profile

<a name="mePersonalProfileGet"></a>
# **mePersonalProfileGet**
> PersonalProfile mePersonalProfileGet()

Retrieve a profile

Retrives personal profile data.

### Example
```javascript
import {SumUpRestApi} from 'sumup-rest-api';
let defaultClient = SumUpRestApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: accessToken
let accessToken = defaultClient.authentications['accessToken'];
accessToken.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new SumUpRestApi.PersonalAccountApi();
apiInstance.mePersonalProfileGet((error, data, response) => {
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

[**PersonalProfile**](PersonalProfile.md)

### Authorization

[accessToken](../README.md#accessToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

