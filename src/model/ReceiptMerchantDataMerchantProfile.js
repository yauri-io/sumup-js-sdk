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
import {ReceiptMerchantDataMerchantProfileAddress} from './ReceiptMerchantDataMerchantProfileAddress';
import {ReceiptMerchantDataMerchantProfileLegalType} from './ReceiptMerchantDataMerchantProfileLegalType';
import {ReceiptMerchantDataMerchantProfileSettings} from './ReceiptMerchantDataMerchantProfileSettings';

/**
 * The ReceiptMerchantDataMerchantProfile model module.
 * @module model/ReceiptMerchantDataMerchantProfile
 * @version 1.0.0
 */
export class ReceiptMerchantDataMerchantProfile {
  /**
   * Constructs a new <code>ReceiptMerchantDataMerchantProfile</code>.
   * @alias module:model/ReceiptMerchantDataMerchantProfile
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>ReceiptMerchantDataMerchantProfile</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ReceiptMerchantDataMerchantProfile} obj Optional instance to populate.
   * @return {module:model/ReceiptMerchantDataMerchantProfile} The populated <code>ReceiptMerchantDataMerchantProfile</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new ReceiptMerchantDataMerchantProfile();
      if (data.hasOwnProperty('merchant_code'))
        obj.merchantCode = ApiClient.convertToType(data['merchant_code'], 'String');
      if (data.hasOwnProperty('business_name'))
        obj.businessName = ApiClient.convertToType(data['business_name'], 'String');
      if (data.hasOwnProperty('email'))
        obj.email = ApiClient.convertToType(data['email'], 'String');
      if (data.hasOwnProperty('address'))
        obj.address = ReceiptMerchantDataMerchantProfileAddress.constructFromObject(data['address']);
      if (data.hasOwnProperty('settings'))
        obj.settings = ReceiptMerchantDataMerchantProfileSettings.constructFromObject(data['settings']);
      if (data.hasOwnProperty('legal_type'))
        obj.legalType = ReceiptMerchantDataMerchantProfileLegalType.constructFromObject(data['legal_type']);
    }
    return obj;
  }
}

/**
 * @member {String} merchantCode
 */
ReceiptMerchantDataMerchantProfile.prototype.merchantCode = undefined;

/**
 * @member {String} businessName
 */
ReceiptMerchantDataMerchantProfile.prototype.businessName = undefined;

/**
 * @member {String} email
 */
ReceiptMerchantDataMerchantProfile.prototype.email = undefined;

/**
 * @member {module:model/ReceiptMerchantDataMerchantProfileAddress} address
 */
ReceiptMerchantDataMerchantProfile.prototype.address = undefined;

/**
 * @member {module:model/ReceiptMerchantDataMerchantProfileSettings} settings
 */
ReceiptMerchantDataMerchantProfile.prototype.settings = undefined;

/**
 * @member {module:model/ReceiptMerchantDataMerchantProfileLegalType} legalType
 */
ReceiptMerchantDataMerchantProfile.prototype.legalType = undefined;
