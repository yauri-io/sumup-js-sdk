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

/**
 * The ReceiptCard model module.
 * @module model/ReceiptCard
 * @version 1.0.0
 */
export class ReceiptCard {
  /**
   * Constructs a new <code>ReceiptCard</code>.
   * @alias module:model/ReceiptCard
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>ReceiptCard</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ReceiptCard} obj Optional instance to populate.
   * @return {module:model/ReceiptCard} The populated <code>ReceiptCard</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new ReceiptCard();
      if (data.hasOwnProperty('last_4_digits'))
        obj.last4Digits = ApiClient.convertToType(data['last_4_digits'], 'String');
      if (data.hasOwnProperty('type'))
        obj.type = ApiClient.convertToType(data['type'], 'String');
      if (data.hasOwnProperty('cardholder_name'))
        obj.cardholderName = ApiClient.convertToType(data['cardholder_name'], 'String');
      if (data.hasOwnProperty('expiry_month'))
        obj.expiryMonth = ApiClient.convertToType(data['expiry_month'], 'String');
      if (data.hasOwnProperty('expiry_year'))
        obj.expiryYear = ApiClient.convertToType(data['expiry_year'], 'String');
      if (data.hasOwnProperty('token'))
        obj.token = ApiClient.convertToType(data['token'], 'String');
    }
    return obj;
  }
}

/**
 * Card last 4 digits.
 * @member {String} last4Digits
 */
ReceiptCard.prototype.last4Digits = undefined;

/**
 * Card Scheme.
 * @member {String} type
 */
ReceiptCard.prototype.type = undefined;

/**
 * Cardholder name.
 * @member {String} cardholderName
 */
ReceiptCard.prototype.cardholderName = undefined;

/**
 * Expiry month.
 * @member {String} expiryMonth
 */
ReceiptCard.prototype.expiryMonth = undefined;

/**
 * Expiry year.
 * @member {String} expiryYear
 */
ReceiptCard.prototype.expiryYear = undefined;

/**
 * Token ID of these card details.
 * @member {String} token
 */
ReceiptCard.prototype.token = undefined;

