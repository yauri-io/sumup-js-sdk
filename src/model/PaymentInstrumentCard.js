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
import {Card} from './Card';

/**
 * The PaymentInstrumentCard model module.
 * @module model/PaymentInstrumentCard
 * @version 1.0.0
 */
export class PaymentInstrumentCard {
  /**
   * Constructs a new <code>PaymentInstrumentCard</code>.
   * Details of the payment card that is saved as a payment instrument.
   * @alias module:model/PaymentInstrumentCard
   * @class
   * @param token {String} Unique token identifying the saved payment card for a customer.
   * @param active {Boolean} Indicates whether the payment instrument is active and can be used for payments. To deactivate it, send a `DELETE` request to the resource endpoint.
   * @param type {module:model/PaymentInstrumentCard.TypeEnum} Type of the payment instrument.
   * @param card {module:model/Card} 
   */
  constructor(token, active, type, card) {
    this.token = token;
    this.active = active;
    this.type = type;
    this.card = card;
  }

  /**
   * Constructs a <code>PaymentInstrumentCard</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PaymentInstrumentCard} obj Optional instance to populate.
   * @return {module:model/PaymentInstrumentCard} The populated <code>PaymentInstrumentCard</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new PaymentInstrumentCard();
      if (data.hasOwnProperty('token'))
        obj.token = ApiClient.convertToType(data['token'], 'String');
      if (data.hasOwnProperty('active'))
        obj.active = ApiClient.convertToType(data['active'], 'Boolean');
      if (data.hasOwnProperty('type'))
        obj.type = ApiClient.convertToType(data['type'], 'String');
      if (data.hasOwnProperty('card'))
        obj.card = Card.constructFromObject(data['card']);
    }
    return obj;
  }
}

/**
 * Unique token identifying the saved payment card for a customer.
 * @member {String} token
 */
PaymentInstrumentCard.prototype.token = undefined;

/**
 * Indicates whether the payment instrument is active and can be used for payments. To deactivate it, send a `DELETE` request to the resource endpoint.
 * @member {Boolean} active
 * @default true
 */
PaymentInstrumentCard.prototype.active = true;

/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */
PaymentInstrumentCard.TypeEnum = {
  /**
   * value: "card"
   * @const
   */
  card: "card"
};
/**
 * Type of the payment instrument.
 * @member {module:model/PaymentInstrumentCard.TypeEnum} type
 */
PaymentInstrumentCard.prototype.type = undefined;

/**
 * @member {module:model/Card} card
 */
PaymentInstrumentCard.prototype.card = undefined;

