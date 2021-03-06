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
import {Checkout} from '../model/Checkout';
import {CheckoutAccepted} from '../model/CheckoutAccepted';
import {CheckoutCreateRequest} from '../model/CheckoutCreateRequest';
import {CheckoutProcessMixin} from '../model/CheckoutProcessMixin';
import {CheckoutSuccess} from '../model/CheckoutSuccess';
import {Error} from '../model/Error';
import {ErrorExtended} from '../model/ErrorExtended';
import {ErrorForbidden} from '../model/ErrorForbidden';
import {InlineResponse2001} from '../model/InlineResponse2001';
import {InlineResponse400} from '../model/InlineResponse400';

/**
* Checkouts service.
* @module api/CheckoutsApi
* @version 1.0.0
*/
export class CheckoutsApi {

    /**
    * Constructs a new CheckoutsApi. 
    * @alias module:api/CheckoutsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instanc
    e} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }

    /**
     * Callback function to receive the result of the checkoutsGet operation.
     * @callback moduleapi/CheckoutsApi~checkoutsGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/CheckoutSuccess>{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List checkouts
     * Lists created checkout resources according to the applied &#x60;checkout_reference&#x60;.
     * @param {Object} opts Optional parameters
     * @param {String} opts.checkoutReference Filters the list of checkout resources by the unique ID of the checkout.
     * @param {module:api/CheckoutsApi~checkoutsGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    checkoutsGet(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
        
      };
      let queryParams = {
        'checkout_reference': opts['checkoutReference']
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['accessToken'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [CheckoutSuccess];

      return this.apiClient.callApi(
        '/checkouts', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the checkoutsIdDelete operation.
     * @callback moduleapi/CheckoutsApi~checkoutsIdDeleteCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse2001{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Deactivate a checkout
     * Deactivates an identified checkout resource. If the checkout has already been processed it can not be deactivated.
     * @param {String} id Unique ID of the checkout resource.
     * @param {module:api/CheckoutsApi~checkoutsIdDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    checkoutsIdDelete(id, callback) {
      
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling checkoutsIdDelete");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['accessToken'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = InlineResponse2001;

      return this.apiClient.callApi(
        '/checkouts/{id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the checkoutsIdGet operation.
     * @callback moduleapi/CheckoutsApi~checkoutsIdGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CheckoutSuccess{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve a checkout
     * Retrieves an identified checkout resource. Use this request after processing a checkout to confirm its status and inform the end user respectively.
     * @param {String} id Unique ID of the checkout resource.
     * @param {module:api/CheckoutsApi~checkoutsIdGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    checkoutsIdGet(id, callback) {
      
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling checkoutsIdGet");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['accessToken'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = CheckoutSuccess;

      return this.apiClient.callApi(
        '/checkouts/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the checkoutsIdPut operation.
     * @callback moduleapi/CheckoutsApi~checkoutsIdPutCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CheckoutSuccess{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Process a checkout
     * Processing a checkout will attempt to charge the provided payment instrument for the amount of the specified checkout resource initiated in the &#x60;Create a checkout&#x60; endpoint.  Follow this request with &#x60;Retrieve a checkout&#x60; to confirm its status. 
     * @param {String} id Unique ID of the checkout resource.
     * @param {Object} opts Optional parameters
     * @param {module:model/CheckoutProcessMixin} opts.body Details of the payment instrument for processing the checkout.
     * @param {module:api/CheckoutsApi~checkoutsIdPutCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    checkoutsIdPut(id, opts, callback) {
      opts = opts || {};
      let postBody = opts['body'];
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling checkoutsIdPut");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = CheckoutSuccess;

      return this.apiClient.callApi(
        '/checkouts/{id}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the checkoutsPost operation.
     * @callback moduleapi/CheckoutsApi~checkoutsPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Checkout{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a checkout
     * Creates a new payment checkout resource. The unique &#x60;checkout_reference&#x60; created by this request, is used for further manipulation of the checkout.   For 3DS checkouts, add the &#x60;redirect_url&#x60; parameter to your request body schema.  Follow by processing a checkout to charge the provided payment instrument. 
     * @param {Object} opts Optional parameters
     * @param {module:model/CheckoutCreateRequest} opts.body 
     * @param {module:api/CheckoutsApi~checkoutsPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    checkoutsPost(opts, callback) {
      opts = opts || {};
      let postBody = opts['body'];

      let pathParams = {
        
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
      let returnType = Checkout;

      return this.apiClient.callApi(
        '/checkouts', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

}