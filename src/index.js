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
import {ApiClient} from './ApiClient';
import {Account} from './model/Account';
import {Address} from './model/Address';
import {AddressPayload} from './model/AddressPayload';
import {AddressResponse} from './model/AddressResponse';
import {AddressWithDetails} from './model/AddressWithDetails';
import {AllOfCheckoutCreateRequestTransactionsItems} from './model/AllOfCheckoutCreateRequestTransactionsItems';
import {AllOfCheckoutCreateTransactionsItems} from './model/AllOfCheckoutCreateTransactionsItems';
import {AllOfCheckoutSuccessTokenTransactionsItems} from './model/AllOfCheckoutSuccessTokenTransactionsItems';
import {AllOfCheckoutTransactionsItems} from './model/AllOfCheckoutTransactionsItems';
import {AllOfinlineResponse2001TransactionsItems} from './model/AllOfinlineResponse2001TransactionsItems';
import {AmountEvent} from './model/AmountEvent';
import {AppSettings} from './model/AppSettings';
import {AuthCode} from './model/AuthCode';
import {AuthToken} from './model/AuthToken';
import {BankAccount} from './model/BankAccount';
import {BankAccountPayload} from './model/BankAccountPayload';
import {BusinessOwners} from './model/BusinessOwners';
import {BusinessOwnersInner} from './model/BusinessOwnersInner';
import {Card} from './model/Card';
import {CardResponse} from './model/CardResponse';
import {Checkout} from './model/Checkout';
import {CheckoutAccepted} from './model/CheckoutAccepted';
import {CheckoutAcceptedNextStep} from './model/CheckoutAcceptedNextStep';
import {CheckoutAcceptedNextStepPayload} from './model/CheckoutAcceptedNextStepPayload';
import {CheckoutCreate} from './model/CheckoutCreate';
import {CheckoutCreateRequest} from './model/CheckoutCreateRequest';
import {CheckoutCreateRequestPersonalDetails} from './model/CheckoutCreateRequestPersonalDetails';
import {CheckoutCreateRequestPersonalDetailsAddress} from './model/CheckoutCreateRequestPersonalDetailsAddress';
import {CheckoutProcessMixin} from './model/CheckoutProcessMixin';
import {CheckoutSuccess} from './model/CheckoutSuccess';
import {CheckoutSuccessPaymentInstrument} from './model/CheckoutSuccessPaymentInstrument';
import {CheckoutSuccessToken} from './model/CheckoutSuccessToken';
import {CountryDetails} from './model/CountryDetails';
import {Currency} from './model/Currency';
import {Customer} from './model/Customer';
import {CustomerResponse} from './model/CustomerResponse';
import {DoingBusinessAs} from './model/DoingBusinessAs';
import {DoingBusinessAsAddress} from './model/DoingBusinessAsAddress';
import {DoingBusinessAsPayload} from './model/DoingBusinessAsPayload';
import {Error} from './model/Error';
import {ErrorExtended} from './model/ErrorExtended';
import {ErrorForbidden} from './model/ErrorForbidden';
import {Event} from './model/Event';
import {EventID} from './model/EventID';
import {EventStatus} from './model/EventStatus';
import {EventType} from './model/EventType';
import {FinancialPayouts} from './model/FinancialPayouts';
import {FinancialPayoutsInner} from './model/FinancialPayoutsInner';
import {FinancialTransactions} from './model/FinancialTransactions';
import {FinancialTransactionsInner} from './model/FinancialTransactionsInner';
import {HorizontalAccuracy} from './model/HorizontalAccuracy';
import {InlineResponse200} from './model/InlineResponse200';
import {InlineResponse2001} from './model/InlineResponse2001';
import {InlineResponse2002} from './model/InlineResponse2002';
import {InlineResponse400} from './model/InlineResponse400';
import {Lat} from './model/Lat';
import {LegalType} from './model/LegalType';
import {Link} from './model/Link';
import {LinkRefund} from './model/LinkRefund';
import {Lon} from './model/Lon';
import {MandatePayload} from './model/MandatePayload';
import {MandateResponse} from './model/MandateResponse';
import {MerchantAccount} from './model/MerchantAccount';
import {MerchantProfile} from './model/MerchantProfile';
import {MerchantProfilePayload} from './model/MerchantProfilePayload';
import {MerchantProfilePayloadDoingBusinessAs} from './model/MerchantProfilePayloadDoingBusinessAs';
import {MerchantSettings} from './model/MerchantSettings';
import {MerchantSettingsPayload} from './model/MerchantSettingsPayload';
import {OneOfinlineResponse400} from './model/OneOfinlineResponse400';
import {Operators} from './model/Operators';
import {OperatorsInner} from './model/OperatorsInner';
import {PaymentInstrumentCard} from './model/PaymentInstrumentCard';
import {PaymentInstrumentResponse} from './model/PaymentInstrumentResponse';
import {PaymentInstrumentResponseCard} from './model/PaymentInstrumentResponseCard';
import {Permissions} from './model/Permissions';
import {PersonalDetails} from './model/PersonalDetails';
import {PersonalDetailsResponse} from './model/PersonalDetailsResponse';
import {PersonalProfile} from './model/PersonalProfile';
import {PersonalProfilePayload} from './model/PersonalProfilePayload';
import {Product} from './model/Product';
import {ReceiptCard} from './model/ReceiptCard';
import {ReceiptEvent} from './model/ReceiptEvent';
import {ReceiptMerchantData} from './model/ReceiptMerchantData';
import {ReceiptMerchantDataMerchantProfile} from './model/ReceiptMerchantDataMerchantProfile';
import {ReceiptMerchantDataMerchantProfileAddress} from './model/ReceiptMerchantDataMerchantProfileAddress';
import {ReceiptMerchantDataMerchantProfileLegalType} from './model/ReceiptMerchantDataMerchantProfileLegalType';
import {ReceiptMerchantDataMerchantProfileSettings} from './model/ReceiptMerchantDataMerchantProfileSettings';
import {ReceiptTransaction} from './model/ReceiptTransaction';
import {ReceiptTransactionLocation} from './model/ReceiptTransactionLocation';
import {ReceiptTransactionProducts} from './model/ReceiptTransactionProducts';
import {ReceiptTransactionVatRates} from './model/ReceiptTransactionVatRates';
import {Receipts} from './model/Receipts';
import {ReceiptsAcquirerData} from './model/ReceiptsAcquirerData';
import {Subaccount} from './model/Subaccount';
import {SubaccountPayload} from './model/SubaccountPayload';
import {SubaccountsDetails} from './model/SubaccountsDetails';
import {TimeoffsetDetails} from './model/TimeoffsetDetails';
import {TimestampEvent} from './model/TimestampEvent';
import {TransactionEvent} from './model/TransactionEvent';
import {TransactionFull} from './model/TransactionFull';
import {TransactionHistory} from './model/TransactionHistory';
import {TransactionID} from './model/TransactionID';
import {TransactionMixinBase} from './model/TransactionMixinBase';
import {TransactionMixinCheckout} from './model/TransactionMixinCheckout';
import {TransactionMixinHistory} from './model/TransactionMixinHistory';
import {User} from './model/User';
import {VatRates} from './model/VatRates';
import {AccountDetailsApi} from './api/AccountDetailsApi';
import {AuthorizationApi} from './api/AuthorizationApi';
import {CheckoutsApi} from './api/CheckoutsApi';
import {CustomersApi} from './api/CustomersApi';
import {MerchantAccountApi} from './api/MerchantAccountApi';
import {PayoutsApi} from './api/PayoutsApi';
import {PersonalAccountApi} from './api/PersonalAccountApi';
import {ReceiptsApi} from './api/ReceiptsApi';
import {RefundsApi} from './api/RefundsApi';
import {SubaccountsApi} from './api/SubaccountsApi';
import {TransactionsApi} from './api/TransactionsApi';

/**
* SumUps_REST_API_operates_with_applicationjson_HTTP_requests_and_response__The_request_bodies_are_sent_through_resource_oriented_URLs_and_use_the_standard_HTTP_response_codes_For_testing_our_APIs_please_a_hrefhttpscloud_crm_sumup_comsumup_developers_contact_formcontact_usa_for_a_test_account__When_you_receive_your_test_account_you_can_create_your_a_hrefhttpsdeveloper_sumup_comdocsregister_app3_create_oauth_client_credentials_target_blankclient_credentialsa_and_process_different_requests_with_real_payment_instruments_without_charging_them__Authentication___ReDoc_Inject_security_definitions___.<br>
* The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
* <p>
* An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
* <pre>
* var SumUpRestApi = require('index'); // See note below*.
* var xxxSvc = new SumUpRestApi.XxxApi(); // Allocate the API class we're going to use.
* var yyyModel = new SumUpRestApi.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
* and put the application logic within the callback function.</em>
* </p>
* <p>
* A non-AMD browser application (discouraged) might do something like this:
* <pre>
* var xxxSvc = new SumUpRestApi.XxxApi(); // Allocate the API class we're going to use.
* var yyy = new SumUpRestApi.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* </p>
* @module index
* @version 1.0.0
*/
export {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient,

    /**
     * The Account model constructor.
     * @property {module:model/Account}
     */
    Account,

    /**
     * The Address model constructor.
     * @property {module:model/Address}
     */
    Address,

    /**
     * The AddressPayload model constructor.
     * @property {module:model/AddressPayload}
     */
    AddressPayload,

    /**
     * The AddressResponse model constructor.
     * @property {module:model/AddressResponse}
     */
    AddressResponse,

    /**
     * The AddressWithDetails model constructor.
     * @property {module:model/AddressWithDetails}
     */
    AddressWithDetails,

    /**
     * The AllOfCheckoutCreateRequestTransactionsItems model constructor.
     * @property {module:model/AllOfCheckoutCreateRequestTransactionsItems}
     */
    AllOfCheckoutCreateRequestTransactionsItems,

    /**
     * The AllOfCheckoutCreateTransactionsItems model constructor.
     * @property {module:model/AllOfCheckoutCreateTransactionsItems}
     */
    AllOfCheckoutCreateTransactionsItems,

    /**
     * The AllOfCheckoutSuccessTokenTransactionsItems model constructor.
     * @property {module:model/AllOfCheckoutSuccessTokenTransactionsItems}
     */
    AllOfCheckoutSuccessTokenTransactionsItems,

    /**
     * The AllOfCheckoutTransactionsItems model constructor.
     * @property {module:model/AllOfCheckoutTransactionsItems}
     */
    AllOfCheckoutTransactionsItems,

    /**
     * The AllOfinlineResponse2001TransactionsItems model constructor.
     * @property {module:model/AllOfinlineResponse2001TransactionsItems}
     */
    AllOfinlineResponse2001TransactionsItems,

    /**
     * The AmountEvent model constructor.
     * @property {module:model/AmountEvent}
     */
    AmountEvent,

    /**
     * The AppSettings model constructor.
     * @property {module:model/AppSettings}
     */
    AppSettings,

    /**
     * The AuthCode model constructor.
     * @property {module:model/AuthCode}
     */
    AuthCode,

    /**
     * The AuthToken model constructor.
     * @property {module:model/AuthToken}
     */
    AuthToken,

    /**
     * The BankAccount model constructor.
     * @property {module:model/BankAccount}
     */
    BankAccount,

    /**
     * The BankAccountPayload model constructor.
     * @property {module:model/BankAccountPayload}
     */
    BankAccountPayload,

    /**
     * The BusinessOwners model constructor.
     * @property {module:model/BusinessOwners}
     */
    BusinessOwners,

    /**
     * The BusinessOwnersInner model constructor.
     * @property {module:model/BusinessOwnersInner}
     */
    BusinessOwnersInner,

    /**
     * The Card model constructor.
     * @property {module:model/Card}
     */
    Card,

    /**
     * The CardResponse model constructor.
     * @property {module:model/CardResponse}
     */
    CardResponse,

    /**
     * The Checkout model constructor.
     * @property {module:model/Checkout}
     */
    Checkout,

    /**
     * The CheckoutAccepted model constructor.
     * @property {module:model/CheckoutAccepted}
     */
    CheckoutAccepted,

    /**
     * The CheckoutAcceptedNextStep model constructor.
     * @property {module:model/CheckoutAcceptedNextStep}
     */
    CheckoutAcceptedNextStep,

    /**
     * The CheckoutAcceptedNextStepPayload model constructor.
     * @property {module:model/CheckoutAcceptedNextStepPayload}
     */
    CheckoutAcceptedNextStepPayload,

    /**
     * The CheckoutCreate model constructor.
     * @property {module:model/CheckoutCreate}
     */
    CheckoutCreate,

    /**
     * The CheckoutCreateRequest model constructor.
     * @property {module:model/CheckoutCreateRequest}
     */
    CheckoutCreateRequest,

    /**
     * The CheckoutCreateRequestPersonalDetails model constructor.
     * @property {module:model/CheckoutCreateRequestPersonalDetails}
     */
    CheckoutCreateRequestPersonalDetails,

    /**
     * The CheckoutCreateRequestPersonalDetailsAddress model constructor.
     * @property {module:model/CheckoutCreateRequestPersonalDetailsAddress}
     */
    CheckoutCreateRequestPersonalDetailsAddress,

    /**
     * The CheckoutProcessMixin model constructor.
     * @property {module:model/CheckoutProcessMixin}
     */
    CheckoutProcessMixin,

    /**
     * The CheckoutSuccess model constructor.
     * @property {module:model/CheckoutSuccess}
     */
    CheckoutSuccess,

    /**
     * The CheckoutSuccessPaymentInstrument model constructor.
     * @property {module:model/CheckoutSuccessPaymentInstrument}
     */
    CheckoutSuccessPaymentInstrument,

    /**
     * The CheckoutSuccessToken model constructor.
     * @property {module:model/CheckoutSuccessToken}
     */
    CheckoutSuccessToken,

    /**
     * The CountryDetails model constructor.
     * @property {module:model/CountryDetails}
     */
    CountryDetails,

    /**
     * The Currency model constructor.
     * @property {module:model/Currency}
     */
    Currency,

    /**
     * The Customer model constructor.
     * @property {module:model/Customer}
     */
    Customer,

    /**
     * The CustomerResponse model constructor.
     * @property {module:model/CustomerResponse}
     */
    CustomerResponse,

    /**
     * The DoingBusinessAs model constructor.
     * @property {module:model/DoingBusinessAs}
     */
    DoingBusinessAs,

    /**
     * The DoingBusinessAsAddress model constructor.
     * @property {module:model/DoingBusinessAsAddress}
     */
    DoingBusinessAsAddress,

    /**
     * The DoingBusinessAsPayload model constructor.
     * @property {module:model/DoingBusinessAsPayload}
     */
    DoingBusinessAsPayload,

    /**
     * The Error model constructor.
     * @property {module:model/Error}
     */
    Error,

    /**
     * The ErrorExtended model constructor.
     * @property {module:model/ErrorExtended}
     */
    ErrorExtended,

    /**
     * The ErrorForbidden model constructor.
     * @property {module:model/ErrorForbidden}
     */
    ErrorForbidden,

    /**
     * The Event model constructor.
     * @property {module:model/Event}
     */
    Event,

    /**
     * The EventID model constructor.
     * @property {module:model/EventID}
     */
    EventID,

    /**
     * The EventStatus model constructor.
     * @property {module:model/EventStatus}
     */
    EventStatus,

    /**
     * The EventType model constructor.
     * @property {module:model/EventType}
     */
    EventType,

    /**
     * The FinancialPayouts model constructor.
     * @property {module:model/FinancialPayouts}
     */
    FinancialPayouts,

    /**
     * The FinancialPayoutsInner model constructor.
     * @property {module:model/FinancialPayoutsInner}
     */
    FinancialPayoutsInner,

    /**
     * The FinancialTransactions model constructor.
     * @property {module:model/FinancialTransactions}
     */
    FinancialTransactions,

    /**
     * The FinancialTransactionsInner model constructor.
     * @property {module:model/FinancialTransactionsInner}
     */
    FinancialTransactionsInner,

    /**
     * The HorizontalAccuracy model constructor.
     * @property {module:model/HorizontalAccuracy}
     */
    HorizontalAccuracy,

    /**
     * The InlineResponse200 model constructor.
     * @property {module:model/InlineResponse200}
     */
    InlineResponse200,

    /**
     * The InlineResponse2001 model constructor.
     * @property {module:model/InlineResponse2001}
     */
    InlineResponse2001,

    /**
     * The InlineResponse2002 model constructor.
     * @property {module:model/InlineResponse2002}
     */
    InlineResponse2002,

    /**
     * The InlineResponse400 model constructor.
     * @property {module:model/InlineResponse400}
     */
    InlineResponse400,

    /**
     * The Lat model constructor.
     * @property {module:model/Lat}
     */
    Lat,

    /**
     * The LegalType model constructor.
     * @property {module:model/LegalType}
     */
    LegalType,

    /**
     * The Link model constructor.
     * @property {module:model/Link}
     */
    Link,

    /**
     * The LinkRefund model constructor.
     * @property {module:model/LinkRefund}
     */
    LinkRefund,

    /**
     * The Lon model constructor.
     * @property {module:model/Lon}
     */
    Lon,

    /**
     * The MandatePayload model constructor.
     * @property {module:model/MandatePayload}
     */
    MandatePayload,

    /**
     * The MandateResponse model constructor.
     * @property {module:model/MandateResponse}
     */
    MandateResponse,

    /**
     * The MerchantAccount model constructor.
     * @property {module:model/MerchantAccount}
     */
    MerchantAccount,

    /**
     * The MerchantProfile model constructor.
     * @property {module:model/MerchantProfile}
     */
    MerchantProfile,

    /**
     * The MerchantProfilePayload model constructor.
     * @property {module:model/MerchantProfilePayload}
     */
    MerchantProfilePayload,

    /**
     * The MerchantProfilePayloadDoingBusinessAs model constructor.
     * @property {module:model/MerchantProfilePayloadDoingBusinessAs}
     */
    MerchantProfilePayloadDoingBusinessAs,

    /**
     * The MerchantSettings model constructor.
     * @property {module:model/MerchantSettings}
     */
    MerchantSettings,

    /**
     * The MerchantSettingsPayload model constructor.
     * @property {module:model/MerchantSettingsPayload}
     */
    MerchantSettingsPayload,

    /**
     * The OneOfinlineResponse400 model constructor.
     * @property {module:model/OneOfinlineResponse400}
     */
    OneOfinlineResponse400,

    /**
     * The Operators model constructor.
     * @property {module:model/Operators}
     */
    Operators,

    /**
     * The OperatorsInner model constructor.
     * @property {module:model/OperatorsInner}
     */
    OperatorsInner,

    /**
     * The PaymentInstrumentCard model constructor.
     * @property {module:model/PaymentInstrumentCard}
     */
    PaymentInstrumentCard,

    /**
     * The PaymentInstrumentResponse model constructor.
     * @property {module:model/PaymentInstrumentResponse}
     */
    PaymentInstrumentResponse,

    /**
     * The PaymentInstrumentResponseCard model constructor.
     * @property {module:model/PaymentInstrumentResponseCard}
     */
    PaymentInstrumentResponseCard,

    /**
     * The Permissions model constructor.
     * @property {module:model/Permissions}
     */
    Permissions,

    /**
     * The PersonalDetails model constructor.
     * @property {module:model/PersonalDetails}
     */
    PersonalDetails,

    /**
     * The PersonalDetailsResponse model constructor.
     * @property {module:model/PersonalDetailsResponse}
     */
    PersonalDetailsResponse,

    /**
     * The PersonalProfile model constructor.
     * @property {module:model/PersonalProfile}
     */
    PersonalProfile,

    /**
     * The PersonalProfilePayload model constructor.
     * @property {module:model/PersonalProfilePayload}
     */
    PersonalProfilePayload,

    /**
     * The Product model constructor.
     * @property {module:model/Product}
     */
    Product,

    /**
     * The ReceiptCard model constructor.
     * @property {module:model/ReceiptCard}
     */
    ReceiptCard,

    /**
     * The ReceiptEvent model constructor.
     * @property {module:model/ReceiptEvent}
     */
    ReceiptEvent,

    /**
     * The ReceiptMerchantData model constructor.
     * @property {module:model/ReceiptMerchantData}
     */
    ReceiptMerchantData,

    /**
     * The ReceiptMerchantDataMerchantProfile model constructor.
     * @property {module:model/ReceiptMerchantDataMerchantProfile}
     */
    ReceiptMerchantDataMerchantProfile,

    /**
     * The ReceiptMerchantDataMerchantProfileAddress model constructor.
     * @property {module:model/ReceiptMerchantDataMerchantProfileAddress}
     */
    ReceiptMerchantDataMerchantProfileAddress,

    /**
     * The ReceiptMerchantDataMerchantProfileLegalType model constructor.
     * @property {module:model/ReceiptMerchantDataMerchantProfileLegalType}
     */
    ReceiptMerchantDataMerchantProfileLegalType,

    /**
     * The ReceiptMerchantDataMerchantProfileSettings model constructor.
     * @property {module:model/ReceiptMerchantDataMerchantProfileSettings}
     */
    ReceiptMerchantDataMerchantProfileSettings,

    /**
     * The ReceiptTransaction model constructor.
     * @property {module:model/ReceiptTransaction}
     */
    ReceiptTransaction,

    /**
     * The ReceiptTransactionLocation model constructor.
     * @property {module:model/ReceiptTransactionLocation}
     */
    ReceiptTransactionLocation,

    /**
     * The ReceiptTransactionProducts model constructor.
     * @property {module:model/ReceiptTransactionProducts}
     */
    ReceiptTransactionProducts,

    /**
     * The ReceiptTransactionVatRates model constructor.
     * @property {module:model/ReceiptTransactionVatRates}
     */
    ReceiptTransactionVatRates,

    /**
     * The Receipts model constructor.
     * @property {module:model/Receipts}
     */
    Receipts,

    /**
     * The ReceiptsAcquirerData model constructor.
     * @property {module:model/ReceiptsAcquirerData}
     */
    ReceiptsAcquirerData,

    /**
     * The Subaccount model constructor.
     * @property {module:model/Subaccount}
     */
    Subaccount,

    /**
     * The SubaccountPayload model constructor.
     * @property {module:model/SubaccountPayload}
     */
    SubaccountPayload,

    /**
     * The SubaccountsDetails model constructor.
     * @property {module:model/SubaccountsDetails}
     */
    SubaccountsDetails,

    /**
     * The TimeoffsetDetails model constructor.
     * @property {module:model/TimeoffsetDetails}
     */
    TimeoffsetDetails,

    /**
     * The TimestampEvent model constructor.
     * @property {module:model/TimestampEvent}
     */
    TimestampEvent,

    /**
     * The TransactionEvent model constructor.
     * @property {module:model/TransactionEvent}
     */
    TransactionEvent,

    /**
     * The TransactionFull model constructor.
     * @property {module:model/TransactionFull}
     */
    TransactionFull,

    /**
     * The TransactionHistory model constructor.
     * @property {module:model/TransactionHistory}
     */
    TransactionHistory,

    /**
     * The TransactionID model constructor.
     * @property {module:model/TransactionID}
     */
    TransactionID,

    /**
     * The TransactionMixinBase model constructor.
     * @property {module:model/TransactionMixinBase}
     */
    TransactionMixinBase,

    /**
     * The TransactionMixinCheckout model constructor.
     * @property {module:model/TransactionMixinCheckout}
     */
    TransactionMixinCheckout,

    /**
     * The TransactionMixinHistory model constructor.
     * @property {module:model/TransactionMixinHistory}
     */
    TransactionMixinHistory,

    /**
     * The User model constructor.
     * @property {module:model/User}
     */
    User,

    /**
     * The VatRates model constructor.
     * @property {module:model/VatRates}
     */
    VatRates,

    /**
    * The AccountDetailsApi service constructor.
    * @property {module:api/AccountDetailsApi}
    */
    AccountDetailsApi,

    /**
    * The AuthorizationApi service constructor.
    * @property {module:api/AuthorizationApi}
    */
    AuthorizationApi,

    /**
    * The CheckoutsApi service constructor.
    * @property {module:api/CheckoutsApi}
    */
    CheckoutsApi,

    /**
    * The CustomersApi service constructor.
    * @property {module:api/CustomersApi}
    */
    CustomersApi,

    /**
    * The MerchantAccountApi service constructor.
    * @property {module:api/MerchantAccountApi}
    */
    MerchantAccountApi,

    /**
    * The PayoutsApi service constructor.
    * @property {module:api/PayoutsApi}
    */
    PayoutsApi,

    /**
    * The PersonalAccountApi service constructor.
    * @property {module:api/PersonalAccountApi}
    */
    PersonalAccountApi,

    /**
    * The ReceiptsApi service constructor.
    * @property {module:api/ReceiptsApi}
    */
    ReceiptsApi,

    /**
    * The RefundsApi service constructor.
    * @property {module:api/RefundsApi}
    */
    RefundsApi,

    /**
    * The SubaccountsApi service constructor.
    * @property {module:api/SubaccountsApi}
    */
    SubaccountsApi,

    /**
    * The TransactionsApi service constructor.
    * @property {module:api/TransactionsApi}
    */
    TransactionsApi
};