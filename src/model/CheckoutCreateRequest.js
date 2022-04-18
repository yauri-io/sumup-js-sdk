/*
 * SumUp REST API
 * SumUp’s REST API operates with `application/json` HTTP requests and response. The request bodies are sent through resource-oriented URLs and use the standard HTTP response codes.  For testing our APIs, please <a href='https://cloud.crm.sumup.com/sumup-developers-contact-form'>contact us</a> for a test account.   When you receive your test account you can create your <a href='https://developer.sumup.com/docs/register-app/#3-create-oauth-client-credentials' target='_blank'>client credentials</a> and process different requests with real payment instruments, without charging them.  # Authentication  <!-- ReDoc-Inject: <security-definitions> -->
 *
 * OpenAPI spec version: 1.0.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 3.0.34
 *
 * Do not edit the class manually.
 *
 */
import {ApiClient} from '../ApiClient';
import {CheckoutCreateRequestPersonalDetails} from './CheckoutCreateRequestPersonalDetails';
import {Currency} from './Currency';

/**
 * The CheckoutCreateRequest model module.
 * @module model/CheckoutCreateRequest
 * @version 1.0.0
 */
export class CheckoutCreateRequest {
  /**
   * Constructs a new <code>CheckoutCreateRequest</code>.
   * Details of the payment checkout.
   * @alias module:model/CheckoutCreateRequest
   * @class
   * @param checkoutReference {String} Unique ID of the payment checkout specified by the client application when creating the checkout resource.
   * @param amount {Number} Amount of the payment.
   * @param currency {module:model/Currency} 
   * @param merchantCode {String} Unique identifying code of the merchant profile.
   */
  constructor(checkoutReference, amount, currency, merchantCode) {
    this.checkoutReference = checkoutReference;
    this.amount = amount;
    this.currency = currency;
    this.merchantCode = merchantCode;
  }

  /**
   * Constructs a <code>CheckoutCreateRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CheckoutCreateRequest} obj Optional instance to populate.
   * @return {module:model/CheckoutCreateRequest} The populated <code>CheckoutCreateRequest</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new CheckoutCreateRequest();
      if (data.hasOwnProperty('checkout_reference'))
        obj.checkoutReference = ApiClient.convertToType(data['checkout_reference'], 'String');
      if (data.hasOwnProperty('amount'))
        obj.amount = ApiClient.convertToType(data['amount'], 'Number');
      if (data.hasOwnProperty('currency'))
        obj.currency = Currency.constructFromObject(data['currency']);
      if (data.hasOwnProperty('merchant_code'))
        obj.merchantCode = ApiClient.convertToType(data['merchant_code'], 'String');
      if (data.hasOwnProperty('pay_to_email'))
        obj.payToEmail = ApiClient.convertToType(data['pay_to_email'], 'String');
      if (data.hasOwnProperty('description'))
        obj.description = ApiClient.convertToType(data['description'], 'String');
      if (data.hasOwnProperty('return_url'))
        obj.returnUrl = ApiClient.convertToType(data['return_url'], 'String');
      if (data.hasOwnProperty('customer_id'))
        obj.customerId = ApiClient.convertToType(data['customer_id'], 'String');
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'String');
      if (data.hasOwnProperty('status'))
        obj.status = ApiClient.convertToType(data['status'], 'String');
      if (data.hasOwnProperty('date'))
        obj._date = ApiClient.convertToType(data['date'], 'Date');
      if (data.hasOwnProperty('valid_until'))
        obj.validUntil = ApiClient.convertToType(data['valid_until'], 'Date');
      if (data.hasOwnProperty('transactions'))
        obj.transactions = ApiClient.convertToType(data['transactions'], [AllOfCheckoutCreateRequestTransactionsItems]);
      if (data.hasOwnProperty('redirect_url'))
        obj.redirectUrl = ApiClient.convertToType(data['redirect_url'], 'String');
      if (data.hasOwnProperty('payment_type'))
        obj.paymentType = ApiClient.convertToType(data['payment_type'], 'String');
      if (data.hasOwnProperty('personal_details'))
        obj.personalDetails = CheckoutCreateRequestPersonalDetails.constructFromObject(data['personal_details']);
    }
    return obj;
  }
}

/**
 * Unique ID of the payment checkout specified by the client application when creating the checkout resource.
 * @member {String} checkoutReference
 */
CheckoutCreateRequest.prototype.checkoutReference = undefined;

/**
 * Amount of the payment.
 * @member {Number} amount
 */
CheckoutCreateRequest.prototype.amount = undefined;

/**
 * @member {module:model/Currency} currency
 */
CheckoutCreateRequest.prototype.currency = undefined;

/**
 * Unique identifying code of the merchant profile.
 * @member {String} merchantCode
 */
CheckoutCreateRequest.prototype.merchantCode = undefined;

/**
 * Email address of the registered user (merchant) to whom the payment is made. It is highly recommended to use `merchant_code` instead of `pay_to_email`.
 * @member {String} payToEmail
 */
CheckoutCreateRequest.prototype.payToEmail = undefined;

/**
 * Short description of the checkout visible in the SumUp dashboard. The description can contribute to reporting, allowing easier identification of a checkout.
 * @member {String} description
 */
CheckoutCreateRequest.prototype.description = undefined;

/**
 * URL to which the SumUp platform sends the processing status of the payment checkout.
 * @member {String} returnUrl
 */
CheckoutCreateRequest.prototype.returnUrl = undefined;

/**
 * Unique identification of a customer. If specified, the checkout session and payment instrument are associated with the referrenced customer.
 * @member {String} customerId
 */
CheckoutCreateRequest.prototype.customerId = undefined;

/**
 * Unique ID of the checkout resource.
 * @member {String} id
 */
CheckoutCreateRequest.prototype.id = undefined;

/**
 * Allowed values for the <code>status</code> property.
 * @enum {String}
 * @readonly
 */
CheckoutCreateRequest.StatusEnum = {
  /**
   * value: "PENDING"
   * @const
   */
  PENDING: "PENDING",

  /**
   * value: "FAILED"
   * @const
   */
  FAILED: "FAILED",

  /**
   * value: "PAID"
   * @const
   */
  PAID: "PAID"
};
/**
 * Currrent status of the checkout.
 * @member {module:model/CheckoutCreateRequest.StatusEnum} status
 */
CheckoutCreateRequest.prototype.status = undefined;

/**
 * Date and time of the creation of the payment checkout. Response format expressed according to <a href=\"https://en.wikipedia.org/wiki/ISO_8601\" target=\"_blank\" rel=\"noopener\">ISO8601</a> code.
 * @member {Date} _date
 */
CheckoutCreateRequest.prototype._date = undefined;

/**
 * Date and time of the checkout expiration before which the client application needs to send a processing request. If no value is present, the checkout does not have an expiration time.
 * @member {Date} validUntil
 */
CheckoutCreateRequest.prototype.validUntil = undefined;

/**
 * List of transactions related to the payment.
 * @member {Array.<Object>} transactions
 */
CheckoutCreateRequest.prototype.transactions = undefined;

/**
 * __Required for 3DS checkouts.__ Refers to a url where the end user is redirected once the payment processing completes.
 * @member {String} redirectUrl
 */
CheckoutCreateRequest.prototype.redirectUrl = undefined;

/**
 * Alternative payment method name
 * @member {String} paymentType
 */
CheckoutCreateRequest.prototype.paymentType = undefined;

/**
 * @member {module:model/CheckoutCreateRequestPersonalDetails} personalDetails
 */
CheckoutCreateRequest.prototype.personalDetails = undefined;

