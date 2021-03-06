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
import {HorizontalAccuracy} from './HorizontalAccuracy';
import {Lat} from './Lat';
import {Lon} from './Lon';

/**
 * The ReceiptTransactionLocation model module.
 * @module model/ReceiptTransactionLocation
 * @version 1.0.0
 */
export class ReceiptTransactionLocation {
  /**
   * Constructs a new <code>ReceiptTransactionLocation</code>.
   * Details of the payment location as received from the payment terminal.
   * @alias module:model/ReceiptTransactionLocation
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>ReceiptTransactionLocation</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ReceiptTransactionLocation} obj Optional instance to populate.
   * @return {module:model/ReceiptTransactionLocation} The populated <code>ReceiptTransactionLocation</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new ReceiptTransactionLocation();
      if (data.hasOwnProperty('lat'))
        obj.lat = Lat.constructFromObject(data['lat']);
      if (data.hasOwnProperty('lon'))
        obj.lon = Lon.constructFromObject(data['lon']);
      if (data.hasOwnProperty('horizontal_accuracy'))
        obj.horizontalAccuracy = HorizontalAccuracy.constructFromObject(data['horizontal_accuracy']);
    }
    return obj;
  }
}

/**
 * @member {module:model/Lat} lat
 */
ReceiptTransactionLocation.prototype.lat = undefined;

/**
 * @member {module:model/Lon} lon
 */
ReceiptTransactionLocation.prototype.lon = undefined;

/**
 * @member {module:model/HorizontalAccuracy} horizontalAccuracy
 */
ReceiptTransactionLocation.prototype.horizontalAccuracy = undefined;

