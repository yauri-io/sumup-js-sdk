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
import {Currency} from './Currency';

/**
 * The CheckoutCreate model module.
 * @module model/CheckoutCreate
 * @version 1.0.0
 */
export class CheckoutCreate {
  /**
   * Constructs a new <code>CheckoutCreate</code>.
   * Details of the payment checkout.
   * @alias module:model/CheckoutCreate
   * @class
   * @param checkoutReference {String} Unique ID of the payment checkout specified by the client application when creating the checkout resource.
   * @param amount {Number} Amount of the payment.
   * @param currency {module:model/Currency} 
   * @param merchantCode {String} Unique identifying code of the merchant profile.
   * @param id {String} Unique ID of the checkout resource.
   * @param status {module:model/CheckoutCreate.StatusEnum} Currrent status of the checkout.
   * @param _date {Date} Date and time of the creation of the payment checkout. Response format expressed according to <a href=\"https://en.wikipedia.org/wiki/ISO_8601\" target=\"_blank\" rel=\"noopener\">ISO8601</a> code.
   * @param transactions {Array.<Object>} List of transactions related to the payment.
   */
  constructor(checkoutReference, amount, currency, merchantCode, id, status, _date, transactions) {
    this.checkoutReference = checkoutReference;
    this.amount = amount;
    this.currency = currency;
    this.merchantCode = merchantCode;
    this.id = id;
    this.status = status;
    this._date = _date;
    this.transactions = transactions;
  }

  /**
   * Constructs a <code>CheckoutCreate</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CheckoutCreate} obj Optional instance to populate.
   * @return {module:model/CheckoutCreate} The populated <code>CheckoutCreate</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new CheckoutCreate();
      if (data.hasOwnProperty('checkout_reference'))
        obj.checkoutReference = ApiClient.convertToType(data['checkout_reference'], 'String');
      if (data.hasOwnProperty('amount'))
        obj.amount = ApiClient.convertToType(data['amount'], 'Number');
      if (data.hasOwnProperty('currency'))
        obj.currency = Currency.constructFromObject(data['currency']);
      if (data.hasOwnProperty('pay_to_email'))
        obj.payToEmail = ApiClient.convertToType(data['pay_to_email'], 'String');
      if (data.hasOwnProperty('merchant_code'))
        obj.merchantCode = ApiClient.convertToType(data['merchant_code'], 'String');
      if (data.hasOwnProperty('description'))
        obj.description = ApiClient.convertToType(data['description'], 'String');
      if (data.hasOwnProperty('return_url'))
        obj.returnUrl = ApiClient.convertToType(data['return_url'], 'String');
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'String');
      if (data.hasOwnProperty('status'))
        obj.status = ApiClient.convertToType(data['status'], 'String');
      if (data.hasOwnProperty('date'))
        obj._date = ApiClient.convertToType(data['date'], 'Date');
      if (data.hasOwnProperty('valid_until'))
        obj.validUntil = ApiClient.convertToType(data['valid_until'], 'Date');
      if (data.hasOwnProperty('transactions'))
        obj.transactions = ApiClient.convertToType(data['transactions'], [AllOfCheckoutCreateTransactionsItems]);
      if (data.hasOwnProperty('redirect_url'))
        obj.redirectUrl = ApiClient.convertToType(data['redirect_url'], 'String');
    }
    return obj;
  }
}

/**
 * Unique ID of the payment checkout specified by the client application when creating the checkout resource.
 * @member {String} checkoutReference
 */
CheckoutCreate.prototype.checkoutReference = undefined;

/**
 * Amount of the payment.
 * @member {Number} amount
 */
CheckoutCreate.prototype.amount = undefined;

/**
 * @member {module:model/Currency} currency
 */
CheckoutCreate.prototype.currency = undefined;

/**
 * Email address of the registered user (merchant) to whom the payment is made. It is highly recommended to use `merchant_code` instead of `pay_to_email`.
 * @member {String} payToEmail
 */
CheckoutCreate.prototype.payToEmail = undefined;

/**
 * Unique identifying code of the merchant profile.
 * @member {String} merchantCode
 */
CheckoutCreate.prototype.merchantCode = undefined;

/**
 * Short description of the checkout visible in the SumUp dashboard. The description can contribute to reporting, allowing easier identification of a checkout.
 * @member {String} description
 */
CheckoutCreate.prototype.description = undefined;

/**
 * URL to which the SumUp platform sends the processing status of the payment checkout.
 * @member {String} returnUrl
 */
CheckoutCreate.prototype.returnUrl = undefined;

/**
 * Unique ID of the checkout resource.
 * @member {String} id
 */
CheckoutCreate.prototype.id = undefined;

/**
 * Allowed values for the <code>status</code> property.
 * @enum {String}
 * @readonly
 */
CheckoutCreate.StatusEnum = {
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
 * @member {module:model/CheckoutCreate.StatusEnum} status
 */
CheckoutCreate.prototype.status = undefined;

/**
 * Date and time of the creation of the payment checkout. Response format expressed according to <a href=\"https://en.wikipedia.org/wiki/ISO_8601\" target=\"_blank\" rel=\"noopener\">ISO8601</a> code.
 * @member {Date} _date
 */
CheckoutCreate.prototype._date = undefined;

/**
 * Date and time of the checkout expiration before which the client application needs to send a processing request. If no value is present, the checkout does not have an expiration time.
 * @member {Date} validUntil
 */
CheckoutCreate.prototype.validUntil = undefined;

/**
 * List of transactions related to the payment.
 * @member {Array.<Object>} transactions
 */
CheckoutCreate.prototype.transactions = undefined;

/**
 * Required for 3DS checkouts. Refers to a url where the end user is redirected once the payment processing completes.
 * @member {String} redirectUrl
 */
CheckoutCreate.prototype.redirectUrl = undefined;

