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
 * The FinancialPayoutsInner model module.
 * @module model/FinancialPayoutsInner
 * @version 1.0.0
 */
export class FinancialPayoutsInner {
  /**
   * Constructs a new <code>FinancialPayoutsInner</code>.
   * @alias module:model/FinancialPayoutsInner
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>FinancialPayoutsInner</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/FinancialPayoutsInner} obj Optional instance to populate.
   * @return {module:model/FinancialPayoutsInner} The populated <code>FinancialPayoutsInner</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new FinancialPayoutsInner();
      if (data.hasOwnProperty('amount'))
        obj.amount = ApiClient.convertToType(data['amount'], 'Number');
      if (data.hasOwnProperty('currency'))
        obj.currency = ApiClient.convertToType(data['currency'], 'String');
      if (data.hasOwnProperty('date'))
        obj._date = ApiClient.convertToType(data['date'], 'Date');
      if (data.hasOwnProperty('fee'))
        obj.fee = ApiClient.convertToType(data['fee'], 'Number');
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'Number');
      if (data.hasOwnProperty('reference'))
        obj.reference = ApiClient.convertToType(data['reference'], 'String');
      if (data.hasOwnProperty('status'))
        obj.status = ApiClient.convertToType(data['status'], 'String');
      if (data.hasOwnProperty('transaction_code'))
        obj.transactionCode = ApiClient.convertToType(data['transaction_code'], 'String');
      if (data.hasOwnProperty('type'))
        obj.type = ApiClient.convertToType(data['type'], 'String');
    }
    return obj;
  }
}

/**
 * @member {Number} amount
 */
FinancialPayoutsInner.prototype.amount = undefined;

/**
 * @member {String} currency
 */
FinancialPayoutsInner.prototype.currency = undefined;

/**
 * @member {Date} _date
 */
FinancialPayoutsInner.prototype._date = undefined;

/**
 * @member {Number} fee
 */
FinancialPayoutsInner.prototype.fee = undefined;

/**
 * @member {Number} id
 */
FinancialPayoutsInner.prototype.id = undefined;

/**
 * @member {String} reference
 */
FinancialPayoutsInner.prototype.reference = undefined;

/**
 * Allowed values for the <code>status</code> property.
 * @enum {String}
 * @readonly
 */
FinancialPayoutsInner.StatusEnum = {
  /**
   * value: "SUCCESSFUL"
   * @const
   */
  SUCCESSFUL: "SUCCESSFUL",

  /**
   * value: "FAILED"
   * @const
   */
  FAILED: "FAILED"
};
/**
 * @member {module:model/FinancialPayoutsInner.StatusEnum} status
 */
FinancialPayoutsInner.prototype.status = undefined;

/**
 * @member {String} transactionCode
 */
FinancialPayoutsInner.prototype.transactionCode = undefined;

/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */
FinancialPayoutsInner.TypeEnum = {
  /**
   * value: "PAYOUT"
   * @const
   */
  PAYOUT: "PAYOUT",

  /**
   * value: "CHARGE_BACK_DEDUCTION"
   * @const
   */
  CHARGE_BACK_DEDUCTION: "CHARGE_BACK_DEDUCTION",

  /**
   * value: "REFUND_DEDUCTION"
   * @const
   */
  REFUND_DEDUCTION: "REFUND_DEDUCTION",

  /**
   * value: "DD_RETURN_DEDUCTION"
   * @const
   */
  DD_RETURN_DEDUCTION: "DD_RETURN_DEDUCTION",

  /**
   * value: "BALANCE_DEDUCTION"
   * @const
   */
  BALANCE_DEDUCTION: "BALANCE_DEDUCTION"
};
/**
 * @member {module:model/FinancialPayoutsInner.TypeEnum} type
 */
FinancialPayoutsInner.prototype.type = undefined;
