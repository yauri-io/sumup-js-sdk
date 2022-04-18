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
import {PersonalDetailsResponse} from './PersonalDetailsResponse';

/**
 * The CustomerResponse model module.
 * @module model/CustomerResponse
 * @version 1.0.0
 */
export class CustomerResponse {
  /**
   * Constructs a new <code>CustomerResponse</code>.
   * Customer Response
   * @alias module:model/CustomerResponse
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>CustomerResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CustomerResponse} obj Optional instance to populate.
   * @return {module:model/CustomerResponse} The populated <code>CustomerResponse</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new CustomerResponse();
      if (data.hasOwnProperty('customer_id'))
        obj.customerId = data['customer_id']
      if (data.hasOwnProperty('personal_details'))
        obj.personalDetails = PersonalDetailsResponse.constructFromObject(data['personal_details']);
    }
    return obj;
  }
}

/**
 * @member {module:model/Customer.customerId} customerId
 */
CustomerResponse.prototype.customerId = undefined;

/**
 * @member {module:model/PersonalDetailsResponse} personalDetails
 */
CustomerResponse.prototype.personalDetails = undefined;

