# SumUpRestApi.TransactionEvent

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | [**EventID**](EventID.md) |  | [optional] 
**eventType** | [**EventType**](EventType.md) |  | [optional] 
**status** | [**EventStatus**](EventStatus.md) |  | [optional] 
**amount** | [**AmountEvent**](AmountEvent.md) |  | [optional] 
**dueDate** | **Date** | Date when the transaction event is due to occur. | [optional] 
**_date** | **Date** | Date when the transaction event occurred. | [optional] 
**installmentNumber** | **Number** | Consequtive number of the installment that is paid. Applicable only payout events, i.e. &#x60;event_type &#x3D; PAYOUT&#x60;. | [optional] 
**timestamp** | [**TimestampEvent**](TimestampEvent.md) |  | [optional] 
