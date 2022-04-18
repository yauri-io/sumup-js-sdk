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
import {CardResponse} from './CardResponse';
import {Currency} from './Currency';
import {Event} from './Event';
import {HorizontalAccuracy} from './HorizontalAccuracy';
import {Lat} from './Lat';
import {Lon} from './Lon';
import {Product} from './Product';
import {ReceiptTransactionLocation} from './ReceiptTransactionLocation';
import {TransactionEvent} from './TransactionEvent';
import {TransactionMixinBase} from './TransactionMixinBase';
import {TransactionMixinCheckout} from './TransactionMixinCheckout';
import {TransactionMixinHistory} from './TransactionMixinHistory';
import {User} from './User';

/**
 * The TransactionFull model module.
 * @module model/TransactionFull
 * @version 1.0.0
 */
export class TransactionFull extends TransactionMixinBase {
  /**
   * Constructs a new <code>TransactionFull</code>.
   * @alias module:model/TransactionFull
   * @class
   * @extends module:model/TransactionMixinBase
   */
  constructor() {
    super();
  }

  /**
   * Constructs a <code>TransactionFull</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TransactionFull} obj Optional instance to populate.
   * @return {module:model/TransactionFull} The populated <code>TransactionFull</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new TransactionFull();
      TransactionMixinBase.constructFromObject(data, obj);
      if (data.hasOwnProperty('merchant_code'))
        obj.merchantCode = ApiClient.convertToType(data['merchant_code'], 'String');
      if (data.hasOwnProperty('vat_amount'))
        obj.vatAmount = ApiClient.convertToType(data['vat_amount'], 'Number');
      if (data.hasOwnProperty('tip_amount'))
        obj.tipAmount = ApiClient.convertToType(data['tip_amount'], 'Number');
      if (data.hasOwnProperty('entry_mode'))
        obj.entryMode = ApiClient.convertToType(data['entry_mode'], 'String');
      if (data.hasOwnProperty('auth_code'))
        obj.authCode = ApiClient.convertToType(data['auth_code'], 'String');
      if (data.hasOwnProperty('internal_id'))
        obj.internalId = ApiClient.convertToType(data['internal_id'], 'Number');
      if (data.hasOwnProperty('product_summary'))
        obj.productSummary = ApiClient.convertToType(data['product_summary'], 'String');
      if (data.hasOwnProperty('payouts_total'))
        obj.payoutsTotal = ApiClient.convertToType(data['payouts_total'], 'Number');
      if (data.hasOwnProperty('payouts_received'))
        obj.payoutsReceived = ApiClient.convertToType(data['payouts_received'], 'Number');
      if (data.hasOwnProperty('payout_plan'))
        obj.payoutPlan = ApiClient.convertToType(data['payout_plan'], 'String');
      if (data.hasOwnProperty('username'))
        obj.username = User.constructFromObject(data['username']);
      if (data.hasOwnProperty('lat'))
        obj.lat = Lat.constructFromObject(data['lat']);
      if (data.hasOwnProperty('lon'))
        obj.lon = Lon.constructFromObject(data['lon']);
      if (data.hasOwnProperty('horizontal_accuracy'))
        obj.horizontalAccuracy = HorizontalAccuracy.constructFromObject(data['horizontal_accuracy']);
      if (data.hasOwnProperty('simple_payment_type'))
        obj.simplePaymentType = ApiClient.convertToType(data['simple_payment_type'], 'String');
      if (data.hasOwnProperty('verification_method'))
        obj.verificationMethod = ApiClient.convertToType(data['verification_method'], 'String');
      if (data.hasOwnProperty('card'))
        obj.card = CardResponse.constructFromObject(data['card']);
      if (data.hasOwnProperty('local_time'))
        obj.localTime = ApiClient.convertToType(data['local_time'], 'Date');
      if (data.hasOwnProperty('payout_type'))
        obj.payoutType = ApiClient.convertToType(data['payout_type'], 'String');
      if (data.hasOwnProperty('products'))
        obj.products = ApiClient.convertToType(data['products'], [Product]);
      if (data.hasOwnProperty('vat_rates'))
        obj.vatRates = ApiClient.convertToType(data['vat_rates'], [Object]);
      if (data.hasOwnProperty('transaction_events'))
        obj.transactionEvents = ApiClient.convertToType(data['transaction_events'], [TransactionEvent]);
      if (data.hasOwnProperty('simple_status'))
        obj.simpleStatus = ApiClient.convertToType(data['simple_status'], 'String');
      if (data.hasOwnProperty('links'))
        obj.links = ApiClient.convertToType(data['links'], [Object]);
      if (data.hasOwnProperty('events'))
        obj.events = ApiClient.convertToType(data['events'], [Event]);
      if (data.hasOwnProperty('location'))
        obj.location = ReceiptTransactionLocation.constructFromObject(data['location']);
      if (data.hasOwnProperty('tax_enabled'))
        obj.taxEnabled = ApiClient.convertToType(data['tax_enabled'], 'Boolean');
    }
    return obj;
  }
}

/**
 * Unique code of the registered merchant to whom the payment is made.
 * @member {String} merchantCode
 */
TransactionFull.prototype.merchantCode = undefined;

/**
 * Amount of the applicable VAT (out of the total transaction amount).
 * @member {Number} vatAmount
 */
TransactionFull.prototype.vatAmount = undefined;

/**
 * Amount of the tip (out of the total transaction amount).
 * @member {Number} tipAmount
 */
TransactionFull.prototype.tipAmount = undefined;

/**
 * Allowed values for the <code>entryMode</code> property.
 * @enum {String}
 * @readonly
 */
TransactionFull.EntryModeEnum = {
  /**
   * value: "CUSTOMER_ENTRY"
   * @const
   */
  CUSTOMER_ENTRY: "CUSTOMER_ENTRY"
};
/**
 * Entry mode of the payment details.
 * @member {module:model/TransactionFull.EntryModeEnum} entryMode
 */
TransactionFull.prototype.entryMode = undefined;

/**
 * Authorization code for the transaction sent by the payment card issuer or bank. Applicable only to card payments.
 * @member {String} authCode
 */
TransactionFull.prototype.authCode = undefined;

/**
 * Internal unique ID of the transaction on the SumUp platform.
 * @member {Number} internalId
 */
TransactionFull.prototype.internalId = undefined;

/**
 * Short description of the payment. The value is taken from the `description` property of the related checkout resource.
 * @member {String} productSummary
 */
TransactionFull.prototype.productSummary = undefined;

/**
 * Total number of payouts to the registered user specified in the `user` property.
 * @member {Number} payoutsTotal
 */
TransactionFull.prototype.payoutsTotal = undefined;

/**
 * Number of payouts that are made to the registered user specified in the `user` property.
 * @member {Number} payoutsReceived
 */
TransactionFull.prototype.payoutsReceived = undefined;

/**
 * Allowed values for the <code>payoutPlan</code> property.
 * @enum {String}
 * @readonly
 */
TransactionFull.PayoutPlanEnum = {
  /**
   * value: "SINGLE_PAYMENT"
   * @const
   */
  SINGLE_PAYMENT: "SINGLE_PAYMENT",

  /**
   * value: "TRUE_INSTALLMENT"
   * @const
   */
  TRUE_INSTALLMENT: "TRUE_INSTALLMENT",

  /**
   * value: "ACCELERATED_INSTALLMENT"
   * @const
   */
  ACCELERATED_INSTALLMENT: "ACCELERATED_INSTALLMENT"
};
/**
 * Payout plan of the registered user at the time when the transaction was made.
 * @member {module:model/TransactionFull.PayoutPlanEnum} payoutPlan
 */
TransactionFull.prototype.payoutPlan = undefined;

/**
 * @member {module:model/User} username
 */
TransactionFull.prototype.username = undefined;

/**
 * @member {module:model/Lat} lat
 */
TransactionFull.prototype.lat = undefined;

/**
 * @member {module:model/Lon} lon
 */
TransactionFull.prototype.lon = undefined;

/**
 * @member {module:model/HorizontalAccuracy} horizontalAccuracy
 */
TransactionFull.prototype.horizontalAccuracy = undefined;

/**
 * Allowed values for the <code>simplePaymentType</code> property.
 * @enum {String}
 * @readonly
 */
TransactionFull.SimplePaymentTypeEnum = {
  /**
   * value: "MOTO"
   * @const
   */
  MOTO: "MOTO",

  /**
   * value: "CASH"
   * @const
   */
  CASH: "CASH",

  /**
   * value: "CC_SIGNATURE"
   * @const
   */
  CC_SIGNATURE: "CC_SIGNATURE",

  /**
   * value: "ELV"
   * @const
   */
  ELV: "ELV",

  /**
   * value: "CC_CUSTOMER_ENTERED"
   * @const
   */
  CC_CUSTOMER_ENTERED: "CC_CUSTOMER_ENTERED",

  /**
   * value: "MANUAL_ENTRY"
   * @const
   */
  MANUAL_ENTRY: "MANUAL_ENTRY",

  /**
   * value: "EMV"
   * @const
   */
  EMV: "EMV"
};
/**
 * Simple name of the payment type.
 * @member {module:model/TransactionFull.SimplePaymentTypeEnum} simplePaymentType
 */
TransactionFull.prototype.simplePaymentType = undefined;

/**
 * Allowed values for the <code>verificationMethod</code> property.
 * @enum {String}
 * @readonly
 */
TransactionFull.VerificationMethodEnum = {
  /**
   * value: "none"
   * @const
   */
  none: "none",

  /**
   * value: "signature"
   * @const
   */
  signature: "signature",

  /**
   * value: "offline pin"
   * @const
   */
  offlinePin: "offline pin",

  /**
   * value: "online pin"
   * @const
   */
  onlinePin: "online pin",

  /**
   * value: "offline pin + signature"
   * @const
   */
  offlinePinSignature: "offline pin + signature",

  /**
   * value: "confirmation code verified"
   * @const
   */
  confirmationCodeVerified: "confirmation code verified"
};
/**
 * Verification method used for the transaction.
 * @member {module:model/TransactionFull.VerificationMethodEnum} verificationMethod
 */
TransactionFull.prototype.verificationMethod = undefined;

/**
 * @member {module:model/CardResponse} card
 */
TransactionFull.prototype.card = undefined;

/**
 * Local date and time of the creation of the transaction.
 * @member {Date} localTime
 */
TransactionFull.prototype.localTime = undefined;

/**
 * Allowed values for the <code>payoutType</code> property.
 * @enum {String}
 * @readonly
 */
TransactionFull.PayoutTypeEnum = {
  /**
   * value: "BANK_ACCOUNT"
   * @const
   */
  BANK_ACCOUNT: "BANK_ACCOUNT",

  /**
   * value: "BALANCE"
   * @const
   */
  BALANCE: "BALANCE",

  /**
   * value: "PREPAID_CARD"
   * @const
   */
  PREPAID_CARD: "PREPAID_CARD"
};
/**
 * Payout type for the transaction.
 * @member {module:model/TransactionFull.PayoutTypeEnum} payoutType
 */
TransactionFull.prototype.payoutType = undefined;

/**
 * List of products from the merchant's catalog for which the transaction serves as a payment.
 * @member {Array.<module:model/Product>} products
 */
TransactionFull.prototype.products = undefined;

/**
 * List of VAT rates applicable to the transaction.
 * @member {Array.<Object>} vatRates
 */
TransactionFull.prototype.vatRates = undefined;

/**
 * List of transaction events related to the transaction.
 * @member {Array.<module:model/TransactionEvent>} transactionEvents
 */
TransactionFull.prototype.transactionEvents = undefined;

/**
 * Allowed values for the <code>simpleStatus</code> property.
 * @enum {String}
 * @readonly
 */
TransactionFull.SimpleStatusEnum = {
  /**
   * value: "SUCCESSFUL"
   * @const
   */
  SUCCESSFUL: "SUCCESSFUL",

  /**
   * value: "PAID_OUT"
   * @const
   */
  PAID_OUT: "PAID_OUT",

  /**
   * value: "CANCEL_FAILED"
   * @const
   */
  CANCEL_FAILED: "CANCEL_FAILED",

  /**
   * value: "CANCELLED"
   * @const
   */
  CANCELLED: "CANCELLED",

  /**
   * value: "CHARGEBACK"
   * @const
   */
  CHARGEBACK: "CHARGEBACK",

  /**
   * value: "FAILED"
   * @const
   */
  FAILED: "FAILED",

  /**
   * value: "REFUND_FAILED"
   * @const
   */
  REFUND_FAILED: "REFUND_FAILED",

  /**
   * value: "REFUNDED"
   * @const
   */
  REFUNDED: "REFUNDED",

  /**
   * value: "NON_COLLECTION"
   * @const
   */
  NON_COLLECTION: "NON_COLLECTION"
};
/**
 * Status generated from the processing status and the latest transaction state.
 * @member {module:model/TransactionFull.SimpleStatusEnum} simpleStatus
 */
TransactionFull.prototype.simpleStatus = undefined;

/**
 * List of hyperlinks for accessing related resources.
 * @member {Array.<Object>} links
 */
TransactionFull.prototype.links = undefined;

/**
 * List of events related to the transaction.
 * @member {Array.<module:model/Event>} events
 */
TransactionFull.prototype.events = undefined;

/**
 * @member {module:model/ReceiptTransactionLocation} location
 */
TransactionFull.prototype.location = undefined;

/**
 * Indicates whether tax deduction is enabled for the transaction.
 * @member {Boolean} taxEnabled
 */
TransactionFull.prototype.taxEnabled = undefined;

