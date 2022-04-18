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
import {Receipts} from '../model/Receipts';

/**
* Receipts service.
* @module api/ReceiptsApi
* @version 1.0.0
*/
export class ReceiptsApi {

    /**
    * Constructs a new ReceiptsApi. 
    * @alias module:api/ReceiptsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instanc
    e} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }

    /**
     * Callback function to receive the result of the receiptsIdGet operation.
     * @callback moduleapi/ReceiptsApi~receiptsIdGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Receipts{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve receipt details
     * Retrieves receipt specific data for a transaction.
     * @param {String} id SumUp unique transaction ID or transaction code, e.g. TS7HDYLSKD.
     * @param {String} mid Merchant code.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.txEventId The ID of the transaction event (refund).
     * @param {module:api/ReceiptsApi~receiptsIdGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    receiptsIdGet(id, mid, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling receiptsIdGet");
      }
      // verify the required parameter 'mid' is set
      if (mid === undefined || mid === null) {
        throw new Error("Missing the required parameter 'mid' when calling receiptsIdGet");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
        'mid': mid,'tx_event_id': opts['txEventId']
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['accessToken'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = Receipts;

      return this.apiClient.callApi(
        '/receipts/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

}