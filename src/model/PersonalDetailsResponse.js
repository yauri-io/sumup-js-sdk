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
import {AddressResponse} from './AddressResponse';

/**
 * The PersonalDetailsResponse model module.
 * @module model/PersonalDetailsResponse
 * @version 1.0.0
 */
export class PersonalDetailsResponse {
  /**
   * Constructs a new <code>PersonalDetailsResponse</code>.
   * Personal details for the customer.
   * @alias module:model/PersonalDetailsResponse
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>PersonalDetailsResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PersonalDetailsResponse} obj Optional instance to populate.
   * @return {module:model/PersonalDetailsResponse} The populated <code>PersonalDetailsResponse</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new PersonalDetailsResponse();
      if (data.hasOwnProperty('first_name'))
        obj.firstName = ApiClient.convertToType(data['first_name'], 'String');
      if (data.hasOwnProperty('last_name'))
        obj.lastName = ApiClient.convertToType(data['last_name'], 'String');
      if (data.hasOwnProperty('email'))
        obj.email = ApiClient.convertToType(data['email'], 'String');
      if (data.hasOwnProperty('phone'))
        obj.phone = ApiClient.convertToType(data['phone'], 'String');
      if (data.hasOwnProperty('birthdate'))
        obj.birthdate = ApiClient.convertToType(data['birthdate'], 'Date');
      if (data.hasOwnProperty('address'))
        obj.address = AddressResponse.constructFromObject(data['address']);
    }
    return obj;
  }
}

/**
 * First name of the customer.
 * @member {String} firstName
 */
PersonalDetailsResponse.prototype.firstName = undefined;

/**
 * Last name of the customer.
 * @member {String} lastName
 */
PersonalDetailsResponse.prototype.lastName = undefined;

/**
 * Email address of the customer.
 * @member {String} email
 */
PersonalDetailsResponse.prototype.email = undefined;

/**
 * Phone number of the customer.
 * @member {String} phone
 */
PersonalDetailsResponse.prototype.phone = undefined;

/**
 * Date of birth of the customer.
 * @member {Date} birthdate
 */
PersonalDetailsResponse.prototype.birthdate = undefined;

/**
 * @member {module:model/AddressResponse} address
 */
PersonalDetailsResponse.prototype.address = undefined;

