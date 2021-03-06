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

/**
* Refunds service.
* @module api/RefundsApi
* @version 1.0.0
*/
export class RefundsApi {

    /**
    * Constructs a new RefundsApi. 
    * @alias module:api/RefundsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instanc
    e} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }

    /**
     * Callback function to receive the result of the meRefundTxnIdPost operation.
     * @callback moduleapi/RefundsApi~meRefundTxnIdPostCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Refund a transaction
     * Refunds an identified transaction either in full or partially.
     * @param {String} txnId Unique ID of the transaction.
     * @param {Object} opts Optional parameters
     * @param {Object} opts.body 
     * @param {module:api/RefundsApi~meRefundTxnIdPostCallback} callback The callback function, accepting three arguments: error, data, response
     */
    meRefundTxnIdPost(txnId, opts, callback) {
      opts = opts || {};
      let postBody = opts['body'];
      // verify the required parameter 'txnId' is set
      if (txnId === undefined || txnId === null) {
        throw new Error("Missing the required parameter 'txnId' when calling meRefundTxnIdPost");
      }

      let pathParams = {
        'txn_id': txnId
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['accessToken'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = null;

      return this.apiClient.callApi(
        '/me/refund/{txn_id}', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

}