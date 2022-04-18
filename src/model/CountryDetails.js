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
 * The CountryDetails model module.
 * @module model/CountryDetails
 * @version 1.0.0
 */
export class CountryDetails {
  /**
   * Constructs a new <code>CountryDetails</code>.
   * Country Details
   * @alias module:model/CountryDetails
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>CountryDetails</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CountryDetails} obj Optional instance to populate.
   * @return {module:model/CountryDetails} The populated <code>CountryDetails</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new CountryDetails();
      if (data.hasOwnProperty('currency'))
        obj.currency = ApiClient.convertToType(data['currency'], 'String');
      if (data.hasOwnProperty('iso_code'))
        obj.isoCode = ApiClient.convertToType(data['iso_code'], 'String');
      if (data.hasOwnProperty('en_name'))
        obj.enName = ApiClient.convertToType(data['en_name'], 'String');
      if (data.hasOwnProperty('native_name'))
        obj.nativeName = ApiClient.convertToType(data['native_name'], 'String');
    }
    return obj;
  }
}

/**
 * Currency ISO 4217 code
 * @member {String} currency
 */
CountryDetails.prototype.currency = undefined;

/**
 * Country ISO code
 * @member {String} isoCode
 */
CountryDetails.prototype.isoCode = undefined;

/**
 * Country EN name
 * @member {String} enName
 */
CountryDetails.prototype.enName = undefined;

/**
 * Country native name
 * @member {String} nativeName
 */
CountryDetails.prototype.nativeName = undefined;

