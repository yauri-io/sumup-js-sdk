# SumUpRestApi.CheckoutAcceptedNextStep

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**url** | **String** | Where the end user is redirected. | [optional] 
**method** | **String** | Method used to complete the redirect. | [optional] 
**redirectUrl** | **String** | Refers to a url where the end user is redirected once the payment processing completes. | [optional] 
**mechanism** | **[String]** | Indicates allowed mechanisms for redirecting an end user. If both values are provided ensure a redirect takes place in either. | [optional] 
**payload** | [**CheckoutAcceptedNextStepPayload**](CheckoutAcceptedNextStepPayload.md) |  | [optional] 

<a name="[MechanismEnum]"></a>
## Enum: [MechanismEnum]

* `iframe` (value: `"iframe"`)
* `browser` (value: `"browser"`)

