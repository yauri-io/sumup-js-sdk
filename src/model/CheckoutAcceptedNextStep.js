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
import {CheckoutAcceptedNextStepPayload} from './CheckoutAcceptedNextStepPayload';

/**
 * The CheckoutAcceptedNextStep model module.
 * @module model/CheckoutAcceptedNextStep
 * @version 1.0.0
 */
export class CheckoutAcceptedNextStep {
  /**
   * Constructs a new <code>CheckoutAcceptedNextStep</code>.
   * Required action processing 3D Secure payments.
   * @alias module:model/CheckoutAcceptedNextStep
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>CheckoutAcceptedNextStep</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CheckoutAcceptedNextStep} obj Optional instance to populate.
   * @return {module:model/CheckoutAcceptedNextStep} The populated <code>CheckoutAcceptedNextStep</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new CheckoutAcceptedNextStep();
      if (data.hasOwnProperty('url'))
        obj.url = ApiClient.convertToType(data['url'], 'String');
      if (data.hasOwnProperty('method'))
        obj.method = ApiClient.convertToType(data['method'], 'String');
      if (data.hasOwnProperty('redirect_url'))
        obj.redirectUrl = ApiClient.convertToType(data['redirect_url'], 'String');
      if (data.hasOwnProperty('mechanism'))
        obj.mechanism = ApiClient.convertToType(data['mechanism'], ['String']);
      if (data.hasOwnProperty('payload'))
        obj.payload = CheckoutAcceptedNextStepPayload.constructFromObject(data['payload']);
    }
    return obj;
  }
}

/**
 * Where the end user is redirected.
 * @member {String} url
 */
CheckoutAcceptedNextStep.prototype.url = undefined;

/**
 * Method used to complete the redirect.
 * @member {String} method
 */
CheckoutAcceptedNextStep.prototype.method = undefined;

/**
 * Refers to a url where the end user is redirected once the payment processing completes.
 * @member {String} redirectUrl
 */
CheckoutAcceptedNextStep.prototype.redirectUrl = undefined;

/**
 * Allowed values for the <code>mechanism</code> property.
 * @enum {String}
 * @readonly
 */
CheckoutAcceptedNextStep.MechanismEnum = {
  /**
   * value: "iframe"
   * @const
   */
  iframe: "iframe",

  /**
   * value: "browser"
   * @const
   */
  browser: "browser"
};
/**
 * Indicates allowed mechanisms for redirecting an end user. If both values are provided ensure a redirect takes place in either.
 * @member {Array.<module:model/CheckoutAcceptedNextStep.MechanismEnum>} mechanism
 */
CheckoutAcceptedNextStep.prototype.mechanism = undefined;

/**
 * @member {module:model/CheckoutAcceptedNextStepPayload} payload
 */
CheckoutAcceptedNextStep.prototype.payload = undefined;

