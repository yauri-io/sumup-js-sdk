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
import {ReceiptCard} from './ReceiptCard';
import {ReceiptEvent} from './ReceiptEvent';
import {ReceiptTransactionLocation} from './ReceiptTransactionLocation';
import {ReceiptTransactionProducts} from './ReceiptTransactionProducts';
import {ReceiptTransactionVatRates} from './ReceiptTransactionVatRates';

/**
 * The ReceiptTransaction model module.
 * @module model/ReceiptTransaction
 * @version 1.0.0
 */
export class ReceiptTransaction {
  /**
   * Constructs a new <code>ReceiptTransaction</code>.
   * Transaction information.
   * @alias module:model/ReceiptTransaction
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>ReceiptTransaction</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ReceiptTransaction} obj Optional instance to populate.
   * @return {module:model/ReceiptTransaction} The populated <code>ReceiptTransaction</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new ReceiptTransaction();
      if (data.hasOwnProperty('transaction_code'))
        obj.transactionCode = ApiClient.convertToType(data['transaction_code'], 'String');
      if (data.hasOwnProperty('amount'))
        obj.amount = ApiClient.convertToType(data['amount'], 'String');
      if (data.hasOwnProperty('vat_amount'))
        obj.vatAmount = ApiClient.convertToType(data['vat_amount'], 'String');
      if (data.hasOwnProperty('tip_amount'))
        obj.tipAmount = ApiClient.convertToType(data['tip_amount'], 'String');
      if (data.hasOwnProperty('fee_amount'))
        obj.feeAmount = ApiClient.convertToType(data['fee_amount'], 'Number');
      if (data.hasOwnProperty('currency'))
        obj.currency = ApiClient.convertToType(data['currency'], 'String');
      if (data.hasOwnProperty('timestamp'))
        obj.timestamp = ApiClient.convertToType(data['timestamp'], 'Date');
      if (data.hasOwnProperty('status'))
        obj.status = ApiClient.convertToType(data['status'], 'String');
      if (data.hasOwnProperty('payment_type'))
        obj.paymentType = ApiClient.convertToType(data['payment_type'], 'String');
      if (data.hasOwnProperty('entry_mode'))
        obj.entryMode = ApiClient.convertToType(data['entry_mode'], 'String');
      if (data.hasOwnProperty('verification_method'))
        obj.verificationMethod = ApiClient.convertToType(data['verification_method'], 'String');
      if (data.hasOwnProperty('card'))
        obj.card = ReceiptCard.constructFromObject(data['card']);
      if (data.hasOwnProperty('installments_count'))
        obj.installmentsCount = ApiClient.convertToType(data['installments_count'], 'Number');
      if (data.hasOwnProperty('customer_email'))
        obj.customerEmail = ApiClient.convertToType(data['customer_email'], 'String');
      if (data.hasOwnProperty('products'))
        obj.products = ApiClient.convertToType(data['products'], [ReceiptTransactionProducts]);
      if (data.hasOwnProperty('vat_rates'))
        obj.vatRates = ApiClient.convertToType(data['vat_rates'], [ReceiptTransactionVatRates]);
      if (data.hasOwnProperty('location'))
        obj.location = ReceiptTransactionLocation.constructFromObject(data['location']);
      if (data.hasOwnProperty('events'))
        obj.events = ApiClient.convertToType(data['events'], [ReceiptEvent]);
      if (data.hasOwnProperty('receipt_no'))
        obj.receiptNo = ApiClient.convertToType(data['receipt_no'], 'String');
    }
    return obj;
  }
}

/**
 * Transaction code.
 * @member {String} transactionCode
 */
ReceiptTransaction.prototype.transactionCode = undefined;

/**
 * Transaction amount.
 * @member {String} amount
 */
ReceiptTransaction.prototype.amount = undefined;

/**
 * Transaction VAT amount.
 * @member {String} vatAmount
 */
ReceiptTransaction.prototype.vatAmount = undefined;

/**
 * Tip amount (included in transaction amount).
 * @member {String} tipAmount
 */
ReceiptTransaction.prototype.tipAmount = undefined;

/**
 * Total transaction fee.
 * @member {Number} feeAmount
 */
ReceiptTransaction.prototype.feeAmount = undefined;

/**
 * Transaction currency.
 * @member {String} currency
 */
ReceiptTransaction.prototype.currency = undefined;

/**
 * Time created at.
 * @member {Date} timestamp
 */
ReceiptTransaction.prototype.timestamp = undefined;

/**
 * Transaction processing status.
 * @member {String} status
 */
ReceiptTransaction.prototype.status = undefined;

/**
 * Transaction type.
 * @member {String} paymentType
 */
ReceiptTransaction.prototype.paymentType = undefined;

/**
 * Transaction entry mode.
 * @member {String} entryMode
 */
ReceiptTransaction.prototype.entryMode = undefined;

/**
 * Cardholder verification method.
 * @member {String} verificationMethod
 */
ReceiptTransaction.prototype.verificationMethod = undefined;

/**
 * @member {module:model/ReceiptCard} card
 */
ReceiptTransaction.prototype.card = undefined;

/**
 * Number of installments.
 * @member {Number} installmentsCount
 */
ReceiptTransaction.prototype.installmentsCount = undefined;

/**
 * @member {String} customerEmail
 */
ReceiptTransaction.prototype.customerEmail = undefined;

/**
 * Products
 * @member {Array.<module:model/ReceiptTransactionProducts>} products
 */
ReceiptTransaction.prototype.products = undefined;

/**
 * Vat rates.
 * @member {Array.<module:model/ReceiptTransactionVatRates>} vatRates
 */
ReceiptTransaction.prototype.vatRates = undefined;

/**
 * @member {module:model/ReceiptTransactionLocation} location
 */
ReceiptTransaction.prototype.location = undefined;

/**
 * Events
 * @member {Array.<module:model/ReceiptEvent>} events
 */
ReceiptTransaction.prototype.events = undefined;

/**
 * Receipt number
 * @member {String} receiptNo
 */
ReceiptTransaction.prototype.receiptNo = undefined;

