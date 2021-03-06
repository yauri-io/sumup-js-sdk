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
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.SumUpRestApi);
  }
}(this, function(expect, SumUpRestApi) {
  'use strict';

  var instance;

  describe('(package)', function() {
    describe('MerchantSettingsPayload', function() {
      beforeEach(function() {
        instance = new SumUpRestApi.MerchantSettingsPayload();
      });

      it('should create an instance of MerchantSettingsPayload', function() {
        // TODO: update the code to test MerchantSettingsPayload
        expect(instance).to.be.a(SumUpRestApi.MerchantSettingsPayload);
      });

      it('should have the property payoutPeriod (base name: "payout_period")', function() {
        // TODO: update the code to test the property payoutPeriod
        expect(instance).to.have.property('payoutPeriod');
        // expect(instance.payoutPeriod).to.be(expectedValueLiteral);
      });

      it('should have the property payoutType (base name: "payout_type")', function() {
        // TODO: update the code to test the property payoutType
        expect(instance).to.have.property('payoutType');
        // expect(instance.payoutType).to.be(expectedValueLiteral);
      });

      it('should have the property payoutOnDemand (base name: "payout_on_demand")', function() {
        // TODO: update the code to test the property payoutOnDemand
        expect(instance).to.have.property('payoutOnDemand');
        // expect(instance.payoutOnDemand).to.be(expectedValueLiteral);
      });

      it('should have the property payoutOnDemandAvailable (base name: "payout_on_demand_available")', function() {
        // TODO: update the code to test the property payoutOnDemandAvailable
        expect(instance).to.have.property('payoutOnDemandAvailable');
        // expect(instance.payoutOnDemandAvailable).to.be(expectedValueLiteral);
      });

      it('should have the property expectedMaxTransactionAmount (base name: "expected_max_transaction_amount")', function() {
        // TODO: update the code to test the property expectedMaxTransactionAmount
        expect(instance).to.have.property('expectedMaxTransactionAmount');
        // expect(instance.expectedMaxTransactionAmount).to.be(expectedValueLiteral);
      });

      it('should have the property printersEnabled (base name: "printers_enabled")', function() {
        // TODO: update the code to test the property printersEnabled
        expect(instance).to.have.property('printersEnabled');
        // expect(instance.printersEnabled).to.be(expectedValueLiteral);
      });

      it('should have the property grossSettlement (base name: "gross_settlement")', function() {
        // TODO: update the code to test the property grossSettlement
        expect(instance).to.have.property('grossSettlement');
        // expect(instance.grossSettlement).to.be(expectedValueLiteral);
      });

    });
  });

}));
