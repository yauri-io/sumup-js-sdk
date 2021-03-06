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
 * The MandateResponse model module.
 * @module model/MandateResponse
 * @version 1.0.0
 */
export class MandateResponse {
  /**
   * Constructs a new <code>MandateResponse</code>.
   * Created mandate
   * @alias module:model/MandateResponse
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>MandateResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MandateResponse} obj Optional instance to populate.
   * @return {module:model/MandateResponse} The populated <code>MandateResponse</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MandateResponse();
      if (data.hasOwnProperty('type'))
        obj.type = ApiClient.convertToType(data['type'], 'String');
      if (data.hasOwnProperty('status'))
        obj.status = ApiClient.convertToType(data['status'], 'String');
      if (data.hasOwnProperty('merchant_code'))
        obj.merchantCode = ApiClient.convertToType(data['merchant_code'], 'String');
    }
    return obj;
  }
}

/**
 * Indicates the mandate type
 * @member {String} type
 */
MandateResponse.prototype.type = undefined;

/**
 * Mandate status
 * @member {String} status
 */
MandateResponse.prototype.status = undefined;

/**
 * Merchant code which has the mandate
 * @member {String} merchantCode
 */
MandateResponse.prototype.merchantCode = undefined;

