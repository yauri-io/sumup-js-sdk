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
import {ApiClient} from "../ApiClient";
import {Error} from '../model/Error';
import {MerchantAccount} from '../model/MerchantAccount';

/**
* AccountDetails service.
* @module api/AccountDetailsApi
* @version 1.0.0
*/
export class AccountDetailsApi {

    /**
    * Constructs a new AccountDetailsApi. 
    * @alias module:api/AccountDetailsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instanc
    e} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }

    /**
     * Callback function to receive the result of the meGet operation.
     * @callback moduleapi/AccountDetailsApi~meGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/MerchantAccount{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve an account
     * Returns user account information.
     * @param {Object} opts Optional parameters
     * @param {Array.<module:model/String>} opts.include A list of additional information you want to receive for the user. By default only personal and merchant profile information will be returned.
     * @param {module:api/AccountDetailsApi~meGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    meGet(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
        
      };
      let queryParams = {
        'include[]': this.apiClient.buildCollectionParam(opts['include'], 'multi')
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['accessToken'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = MerchantAccount;

      return this.apiClient.callApi(
        '/me', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

}