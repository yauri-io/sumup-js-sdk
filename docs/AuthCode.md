# SumUpRestApi.AuthCode

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**responseType** | **String** | The type of the expected response. The value must be &#x60;code&#x60; to indicate that you expect to receive an authorization code. | 
**clientId** | **String** | The client ID of your application that was generated when you &lt;a href&#x3D;\&quot;https://developer.sumup.com/docs/register-app/\&quot; target&#x3D;\&quot;_blank\&quot;&gt;registered it&lt;/a&gt;. | 
**redirectUri** | **String** | The URI to which the merchant user is redirected after authorizing your application to access their user&#x27;s account data and to which the authorization code is sent. The value must match exactly one of the &lt;a href&#x3D;\&quot;https://developer.sumup.com/docs/register-app#3-create-oauth-client-credentials\&quot; target&#x3D;\&quot;_blank\&quot;&gt;registered URIs&lt;/a&gt; for your application. | 
**scope** | **String** | A space-separated list of scopes for which you request authorization. If you don&#x27;t specify any scopes in the request, your application will be granted authorization for the default scopes. | [optional] 
**state** | **String** | A unique local state that can be used for correlating requests and responses and for preventing &lt;a href&#x3D;\&quot;https://tools.ietf.org/html/rfc6749#section-10.12\&quot; targer&#x3D;\&quot;_blank\&quot;&gt;cross-site request forgery&lt;/a&gt;. | [optional] 
