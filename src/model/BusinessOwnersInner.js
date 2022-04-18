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
 * The BusinessOwnersInner model module.
 * @module model/BusinessOwnersInner
 * @version 1.0.0
 */
export class BusinessOwnersInner {
  /**
   * Constructs a new <code>BusinessOwnersInner</code>.
   * @alias module:model/BusinessOwnersInner
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>BusinessOwnersInner</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/BusinessOwnersInner} obj Optional instance to populate.
   * @return {module:model/BusinessOwnersInner} The populated <code>BusinessOwnersInner</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new BusinessOwnersInner();
      if (data.hasOwnProperty('first_name'))
        obj.firstName = ApiClient.convertToType(data['first_name'], 'String');
      if (data.hasOwnProperty('last_name'))
        obj.lastName = ApiClient.convertToType(data['last_name'], 'String');
      if (data.hasOwnProperty('date_of_birth'))
        obj.dateOfBirth = ApiClient.convertToType(data['date_of_birth'], 'String');
      if (data.hasOwnProperty('mobile_phone'))
        obj.mobilePhone = ApiClient.convertToType(data['mobile_phone'], 'String');
      if (data.hasOwnProperty('landline'))
        obj.landline = ApiClient.convertToType(data['landline'], 'String');
      if (data.hasOwnProperty('ownership'))
        obj.ownership = ApiClient.convertToType(data['ownership'], 'Number');
    }
    return obj;
  }
}

/**
 * BO's first name
 * @member {String} firstName
 */
BusinessOwnersInner.prototype.firstName = undefined;

/**
 * BO's last name of the user
 * @member {String} lastName
 */
BusinessOwnersInner.prototype.lastName = undefined;

/**
 * Date of birth
 * @member {String} dateOfBirth
 */
BusinessOwnersInner.prototype.dateOfBirth = undefined;

/**
 * Mobile phone number
 * @member {String} mobilePhone
 */
BusinessOwnersInner.prototype.mobilePhone = undefined;

/**
 * BO's Landline
 * @member {String} landline
 */
BusinessOwnersInner.prototype.landline = undefined;

/**
 * Ownership percentage
 * @member {Number} ownership
 */
BusinessOwnersInner.prototype.ownership = undefined;

