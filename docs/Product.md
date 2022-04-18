# SumUpRestApi.Product

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** | Name of the product from the merchant&#x27;s catalog. | [optional] 
**price** | **Number** | Price of the product without VAT. | [optional] 
**vatRate** | **Number** | VAT rate applicable to the product. | [optional] 
**singleVatAmount** | **Number** | Amount of the VAT for a single product item (calculated as the product of &#x60;price&#x60; and &#x60;vat_rate&#x60;, i.e. &#x60;single_vat_amount &#x3D; price * vat_rate&#x60;). | [optional] 
**priceWithVat** | **Number** | Price of a single product item with VAT. | [optional] 
**vatAmount** | **Number** | Total VAT amount for the purchase (calculated as the product of &#x60;single_vat_amount&#x60; and &#x60;quantity&#x60;, i.e. &#x60;vat_amount &#x3D; single_vat_amount * quantity&#x60;). | [optional] 
**quantity** | **Number** | Number of product items for the purchase. | [optional] 
**totalPrice** | **Number** | Total price of the product items without VAT (calculated as the product of &#x60;price&#x60; and &#x60;quantity&#x60;, i.e. &#x60;total_price &#x3D; price * quantity&#x60;). | [optional] 
**totalWithVat** | **Number** | Total price of the product items including VAT (calculated as the product of &#x60;price_with_vat&#x60; and &#x60;quantity&#x60;, i.e. &#x60;total_with_vat &#x3D; price_with_vat * quantity&#x60;). | [optional] 
