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
 * The MerchantSettingsPayload model module.
 * @module model/MerchantSettingsPayload
 * @version 1.0.0
 */
export class MerchantSettingsPayload {
  /**
   * Constructs a new <code>MerchantSettingsPayload</code>.
   * @alias module:model/MerchantSettingsPayload
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>MerchantSettingsPayload</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MerchantSettingsPayload} obj Optional instance to populate.
   * @return {module:model/MerchantSettingsPayload} The populated <code>MerchantSettingsPayload</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MerchantSettingsPayload();
      if (data.hasOwnProperty('payout_period'))
        obj.payoutPeriod = ApiClient.convertToType(data['payout_period'], 'String');
      if (data.hasOwnProperty('payout_type'))
        obj.payoutType = ApiClient.convertToType(data['payout_type'], 'String');
      if (data.hasOwnProperty('payout_on_demand'))
        obj.payoutOnDemand = ApiClient.convertToType(data['payout_on_demand'], 'Boolean');
      if (data.hasOwnProperty('payout_on_demand_available'))
        obj.payoutOnDemandAvailable = ApiClient.convertToType(data['payout_on_demand_available'], 'String');
      if (data.hasOwnProperty('expected_max_transaction_amount'))
        obj.expectedMaxTransactionAmount = ApiClient.convertToType(data['expected_max_transaction_amount'], 'Number');
      if (data.hasOwnProperty('printers_enabled'))
        obj.printersEnabled = ApiClient.convertToType(data['printers_enabled'], 'Boolean');
      if (data.hasOwnProperty('gross_settlement'))
        obj.grossSettlement = ApiClient.convertToType(data['gross_settlement'], 'Boolean');
    }
    return obj;
  }
}

/**
 * Allowed values for the <code>payoutPeriod</code> property.
 * @enum {String}
 * @readonly
 */
MerchantSettingsPayload.PayoutPeriodEnum = {
  /**
   * value: "dayly"
   * @const
   */
  dayly: "dayly",

  /**
   * value: "weekly"
   * @const
   */
  weekly: "weekly",

  /**
   * value: "monthly"
   * @const
   */
  monthly: "monthly"
};
/**
 * Payout period.
 * @member {module:model/MerchantSettingsPayload.PayoutPeriodEnum} payoutPeriod
 */
MerchantSettingsPayload.prototype.payoutPeriod = undefined;

/**
 * Allowed values for the <code>payoutType</code> property.
 * @enum {String}
 * @readonly
 */
MerchantSettingsPayload.PayoutTypeEnum = {
  /**
   * value: "SINGLE_PAYMENT"
   * @const
   */
  SINGLE_PAYMENT: "SINGLE_PAYMENT"
};
/**
 * Payout type.
 * @member {module:model/MerchantSettingsPayload.PayoutTypeEnum} payoutType
 */
MerchantSettingsPayload.prototype.payoutType = undefined;

/**
 * If true, the merchant will not receive automatic payouts.
 * @member {Boolean} payoutOnDemand
 */
MerchantSettingsPayload.prototype.payoutOnDemand = undefined;

/**
 * If true, the merchant will be able to manage  payout_on_demand settings
 * @member {String} payoutOnDemandAvailable
 */
MerchantSettingsPayload.prototype.payoutOnDemandAvailable = undefined;

/**
 * Expected maximum amount of a single purchase
 * @member {Number} expectedMaxTransactionAmount
 */
MerchantSettingsPayload.prototype.expectedMaxTransactionAmount = undefined;

/**
 * Printers enabled.
 * @member {Boolean} printersEnabled
 */
MerchantSettingsPayload.prototype.printersEnabled = undefined;

/**
 * Gross settlemnt
 * @member {Boolean} grossSettlement
 */
MerchantSettingsPayload.prototype.grossSettlement = undefined;

