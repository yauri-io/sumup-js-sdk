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
    describe('Checkout', function() {
      beforeEach(function() {
        instance = new SumUpRestApi.Checkout();
      });

      it('should create an instance of Checkout', function() {
        // TODO: update the code to test Checkout
        expect(instance).to.be.a(SumUpRestApi.Checkout);
      });

      it('should have the property checkoutReference (base name: "checkout_reference")', function() {
        // TODO: update the code to test the property checkoutReference
        expect(instance).to.have.property('checkoutReference');
        // expect(instance.checkoutReference).to.be(expectedValueLiteral);
      });

      it('should have the property amount (base name: "amount")', function() {
        // TODO: update the code to test the property amount
        expect(instance).to.have.property('amount');
        // expect(instance.amount).to.be(expectedValueLiteral);
      });

      it('should have the property currency (base name: "currency")', function() {
        // TODO: update the code to test the property currency
        expect(instance).to.have.property('currency');
        // expect(instance.currency).to.be(expectedValueLiteral);
      });

      it('should have the property payToEmail (base name: "pay_to_email")', function() {
        // TODO: update the code to test the property payToEmail
        expect(instance).to.have.property('payToEmail');
        // expect(instance.payToEmail).to.be(expectedValueLiteral);
      });

      it('should have the property merchantCode (base name: "merchant_code")', function() {
        // TODO: update the code to test the property merchantCode
        expect(instance).to.have.property('merchantCode');
        // expect(instance.merchantCode).to.be(expectedValueLiteral);
      });

      it('should have the property description (base name: "description")', function() {
        // TODO: update the code to test the property description
        expect(instance).to.have.property('description');
        // expect(instance.description).to.be(expectedValueLiteral);
      });

      it('should have the property returnUrl (base name: "return_url")', function() {
        // TODO: update the code to test the property returnUrl
        expect(instance).to.have.property('returnUrl');
        // expect(instance.returnUrl).to.be(expectedValueLiteral);
      });

      it('should have the property id (base name: "id")', function() {
        // TODO: update the code to test the property id
        expect(instance).to.have.property('id');
        // expect(instance.id).to.be(expectedValueLiteral);
      });

      it('should have the property status (base name: "status")', function() {
        // TODO: update the code to test the property status
        expect(instance).to.have.property('status');
        // expect(instance.status).to.be(expectedValueLiteral);
      });

      it('should have the property _date (base name: "date")', function() {
        // TODO: update the code to test the property _date
        expect(instance).to.have.property('_date');
        // expect(instance._date).to.be(expectedValueLiteral);
      });

      it('should have the property validUntil (base name: "valid_until")', function() {
        // TODO: update the code to test the property validUntil
        expect(instance).to.have.property('validUntil');
        // expect(instance.validUntil).to.be(expectedValueLiteral);
      });

      it('should have the property customerId (base name: "customer_id")', function() {
        // TODO: update the code to test the property customerId
        expect(instance).to.have.property('customerId');
        // expect(instance.customerId).to.be(expectedValueLiteral);
      });

      it('should have the property mandate (base name: "mandate")', function() {
        // TODO: update the code to test the property mandate
        expect(instance).to.have.property('mandate');
        // expect(instance.mandate).to.be(expectedValueLiteral);
      });

      it('should have the property transactions (base name: "transactions")', function() {
        // TODO: update the code to test the property transactions
        expect(instance).to.have.property('transactions');
        // expect(instance.transactions).to.be(expectedValueLiteral);
      });

    });
  });

}));
