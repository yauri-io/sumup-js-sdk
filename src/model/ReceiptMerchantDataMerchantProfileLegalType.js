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
 * The ReceiptMerchantDataMerchantProfileLegalType model module.
 * @module model/ReceiptMerchantDataMerchantProfileLegalType
 * @version 1.0.0
 */
export class ReceiptMerchantDataMerchantProfileLegalType {
  /**
   * Constructs a new <code>ReceiptMerchantDataMerchantProfileLegalType</code>.
   * @alias module:model/ReceiptMerchantDataMerchantProfileLegalType
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>ReceiptMerchantDataMerchantProfileLegalType</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ReceiptMerchantDataMerchantProfileLegalType} obj Optional instance to populate.
   * @return {module:model/ReceiptMerchantDataMerchantProfileLegalType} The populated <code>ReceiptMerchantDataMerchantProfileLegalType</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new ReceiptMerchantDataMerchantProfileLegalType();
      if (data.hasOwnProperty('description'))
        obj.description = ApiClient.convertToType(data['description'], 'String');
      if (data.hasOwnProperty('sole_trader'))
        obj.soleTrader = ApiClient.convertToType(data['sole_trader'], 'Boolean');
    }
    return obj;
  }
}

/**
 * @member {String} description
 */
ReceiptMerchantDataMerchantProfileLegalType.prototype.description = undefined;

/**
 * @member {Boolean} soleTrader
 */
ReceiptMerchantDataMerchantProfileLegalType.prototype.soleTrader = undefined;
