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
    describe('CheckoutProcessMixin', function() {
      beforeEach(function() {
        instance = new SumUpRestApi.CheckoutProcessMixin();
      });

      it('should create an instance of CheckoutProcessMixin', function() {
        // TODO: update the code to test CheckoutProcessMixin
        expect(instance).to.be.a(SumUpRestApi.CheckoutProcessMixin);
      });

      it('should have the property paymentType (base name: "payment_type")', function() {
        // TODO: update the code to test the property paymentType
        expect(instance).to.have.property('paymentType');
        // expect(instance.paymentType).to.be(expectedValueLiteral);
      });

      it('should have the property installments (base name: "installments")', function() {
        // TODO: update the code to test the property installments
        expect(instance).to.have.property('installments');
        // expect(instance.installments).to.be(expectedValueLiteral);
      });

      it('should have the property mandate (base name: "mandate")', function() {
        // TODO: update the code to test the property mandate
        expect(instance).to.have.property('mandate');
        // expect(instance.mandate).to.be(expectedValueLiteral);
      });

      it('should have the property card (base name: "card")', function() {
        // TODO: update the code to test the property card
        expect(instance).to.have.property('card');
        // expect(instance.card).to.be(expectedValueLiteral);
      });

      it('should have the property token (base name: "token")', function() {
        // TODO: update the code to test the property token
        expect(instance).to.have.property('token');
        // expect(instance.token).to.be(expectedValueLiteral);
      });

      it('should have the property customerId (base name: "customer_id")', function() {
        // TODO: update the code to test the property customerId
        expect(instance).to.have.property('customerId');
        // expect(instance.customerId).to.be(expectedValueLiteral);
      });

    });
  });

}));