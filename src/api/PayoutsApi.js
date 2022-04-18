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
import {FinancialPayouts} from '../model/FinancialPayouts';
import {FinancialTransactions} from '../model/FinancialTransactions';

/**
* Payouts service.
* @module api/PayoutsApi
* @version 1.0.0
*/
export class PayoutsApi {

    /**
    * Constructs a new PayoutsApi. 
    * @alias module:api/PayoutsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instanc
    e} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }

    /**
     * Callback function to receive the result of the meFinancialsPayoutsGet operation.
     * @callback moduleapi/PayoutsApi~meFinancialsPayoutsGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/FinancialPayouts{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List payouts
     * Lists ordered payouts for the merchant account.
     * @param {Date} startDate Start date (in &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/ISO_8601\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener\&quot;&gt;ISO8601&lt;/a&gt; format).
     * @param {Date} endDate End date (in &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/ISO_8601\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener\&quot;&gt;ISO8601&lt;/a&gt; format).
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.format 
     * @param {Number} opts.limit 
     * @param {module:model/String} opts.order 
     * @param {module:api/PayoutsApi~meFinancialsPayoutsGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    meFinancialsPayoutsGet(startDate, endDate, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'startDate' is set
      if (startDate === undefined || startDate === null) {
        throw new Error("Missing the required parameter 'startDate' when calling meFinancialsPayoutsGet");
      }
      // verify the required parameter 'endDate' is set
      if (endDate === undefined || endDate === null) {
        throw new Error("Missing the required parameter 'endDate' when calling meFinancialsPayoutsGet");
      }

      let pathParams = {
        
      };
      let queryParams = {
        'start_date': startDate,'end_date': endDate,'format': opts['format'],'limit': opts['limit'],'order': opts['order']
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['accessToken'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = FinancialPayouts;

      return this.apiClient.callApi(
        '/me/financials/payouts', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the meFinancialsTransactionsGet operation.
     * @callback moduleapi/PayoutsApi~meFinancialsTransactionsGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/FinancialTransactions{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List transactions
     * Lists a less detailed history of all transactions associated with the merchant account.
     * @param {Date} startDate Start date (in &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/ISO_8601\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener\&quot;&gt;ISO8601&lt;/a&gt; format).
     * @param {Date} endDate End date (in &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/ISO_8601\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener\&quot;&gt;ISO8601&lt;/a&gt; format).
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.format 
     * @param {Number} opts.limit 
     * @param {module:model/String} opts.order 
     * @param {module:api/PayoutsApi~meFinancialsTransactionsGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    meFinancialsTransactionsGet(startDate, endDate, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'startDate' is set
      if (startDate === undefined || startDate === null) {
        throw new Error("Missing the required parameter 'startDate' when calling meFinancialsTransactionsGet");
      }
      // verify the required parameter 'endDate' is set
      if (endDate === undefined || endDate === null) {
        throw new Error("Missing the required parameter 'endDate' when calling meFinancialsTransactionsGet");
      }

      let pathParams = {
        
      };
      let queryParams = {
        'start_date': startDate,'end_date': endDate,'format': opts['format'],'limit': opts['limit'],'order': opts['order']
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['accessToken'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = FinancialTransactions;

      return this.apiClient.callApi(
        '/me/financials/transactions', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

}