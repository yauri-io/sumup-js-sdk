# SumUpRestApi.AuthorizationApi

All URIs are relative to *https://api.sumup.com/{version}*

Method | HTTP request | Description
------------- | ------------- | -------------
[**authorizeGet**](AuthorizationApi.md#authorizeGet) | **GET** /authorize | Request authorization from users
[**tokenPost**](AuthorizationApi.md#tokenPost) | **POST** /token | Generate a token

<a name="authorizeGet"></a>
# **authorizeGet**
> authorizeGet(opts)

Request authorization from users

Request authorization from users and grant your application access to resources associated with the user&#x27;s account. 

### Example
```javascript
import {SumUpRestApi} from 'sumup-rest-api';

let apiInstance = new SumUpRestApi.AuthorizationApi();
let opts = { 
  'responseType': "responseType_example", // String | The type of the expected response. The value must be `code` to indicate that you expect to receive an authorization code.
  'clientId': "clientId_example", // String | The client ID of your application that was generated when you <a href=\"https://developer.sumup.com/docs/register-app/\" target=\"_blank\">registered it</a>.
  'redirectUri': "redirectUri_example", // String | The URI to which the merchant user is redirected after authorizing your application to access their user's account data and to which the authorization code is sent. The value must match exactly one of the <a href=\"https://developer.sumup.com/docs/register-app#3-create-oauth-client-credentials\" target=\"_blank\">registered URIs</a> for your application.
  'scope': "scope_example", // String | A space-separated list of scopes for which you request authorization. If you don't specify any scopes in the request, your application will be granted authorization for the default scopes.
  'state': "state_example" // String | A unique local state that can be used for correlating requests and responses and for preventing <a href=\"https://tools.ietf.org/html/rfc6749#section-10.12\" targer=\"_blank\">cross-site request forgery</a>.
};
apiInstance.authorizeGet(opts, (error, data, response) => {
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
 **responseType** | **String**| The type of the expected response. The value must be &#x60;code&#x60; to indicate that you expect to receive an authorization code. | [optional] 
 **clientId** | **String**| The client ID of your application that was generated when you &lt;a href&#x3D;\&quot;https://developer.sumup.com/docs/register-app/\&quot; target&#x3D;\&quot;_blank\&quot;&gt;registered it&lt;/a&gt;. | [optional] 
 **redirectUri** | **String**| The URI to which the merchant user is redirected after authorizing your application to access their user&#x27;s account data and to which the authorization code is sent. The value must match exactly one of the &lt;a href&#x3D;\&quot;https://developer.sumup.com/docs/register-app#3-create-oauth-client-credentials\&quot; target&#x3D;\&quot;_blank\&quot;&gt;registered URIs&lt;/a&gt; for your application. | [optional] 
 **scope** | **String**| A space-separated list of scopes for which you request authorization. If you don&#x27;t specify any scopes in the request, your application will be granted authorization for the default scopes. | [optional] 
 **state** | **String**| A unique local state that can be used for correlating requests and responses and for preventing &lt;a href&#x3D;\&quot;https://tools.ietf.org/html/rfc6749#section-10.12\&quot; targer&#x3D;\&quot;_blank\&quot;&gt;cross-site request forgery&lt;/a&gt;. | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="tokenPost"></a>
# **tokenPost**
> InlineResponse200 tokenPost(opts)

Generate a token

Generate a token or a refresh token 

### Example
```javascript
import {SumUpRestApi} from 'sumup-rest-api';

let apiInstance = new SumUpRestApi.AuthorizationApi();
let opts = { 
  'body': new SumUpRestApi.AuthToken() // AuthToken | 
};
apiInstance.tokenPost(opts, (error, data, response) => {
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
 **body** | [**AuthToken**](AuthToken.md)|  | [optional] 

### Return type

[**InlineResponse200**](InlineResponse200.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

