# SumUpRestApi.AuthToken

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**grantType** | **String** | The grant type used for obtaining an access token. | 
**clientId** | **String** | The client ID of your application that was generated when you &lt;a href&#x3D;\&quot;https://developer.sumup.com/docs/register-app\&quot;&gt;registered it&lt;/a&gt;. | 
**clientSecret** | **String** | The client secret of your application that was generated when you &lt;a href&#x3D;\&quot;https://developer.sumup.com/docs/register-app\&quot;&gt;registered it&lt;/a&gt;. | 
**code** | **String** | The authorization code that you received from requesting an authorization code. | 
**refreshToken** | **String** | A **required** parameter when generating a refresh token. | [optional] 

<a name="GrantTypeEnum"></a>
## Enum: GrantTypeEnum

* `authorizationCode` (value: `"authorization_code"`)
* `refreshToken` (value: `"refresh_token"`)

