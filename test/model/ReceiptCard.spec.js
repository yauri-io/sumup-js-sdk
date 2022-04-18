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
    describe('ReceiptCard', function() {
      beforeEach(function() {
        instance = new SumUpRestApi.ReceiptCard();
      });

      it('should create an instance of ReceiptCard', function() {
        // TODO: update the code to test ReceiptCard
        expect(instance).to.be.a(SumUpRestApi.ReceiptCard);
      });

      it('should have the property last4Digits (base name: "last_4_digits")', function() {
        // TODO: update the code to test the property last4Digits
        expect(instance).to.have.property('last4Digits');
        // expect(instance.last4Digits).to.be(expectedValueLiteral);
      });

      it('should have the property type (base name: "type")', function() {
        // TODO: update the code to test the property type
        expect(instance).to.have.property('type');
        // expect(instance.type).to.be(expectedValueLiteral);
      });

      it('should have the property cardholderName (base name: "cardholder_name")', function() {
        // TODO: update the code to test the property cardholderName
        expect(instance).to.have.property('cardholderName');
        // expect(instance.cardholderName).to.be(expectedValueLiteral);
      });

      it('should have the property expiryMonth (base name: "expiry_month")', function() {
        // TODO: update the code to test the property expiryMonth
        expect(instance).to.have.property('expiryMonth');
        // expect(instance.expiryMonth).to.be(expectedValueLiteral);
      });

      it('should have the property expiryYear (base name: "expiry_year")', function() {
        // TODO: update the code to test the property expiryYear
        expect(instance).to.have.property('expiryYear');
        // expect(instance.expiryYear).to.be(expectedValueLiteral);
      });

      it('should have the property token (base name: "token")', function() {
        // TODO: update the code to test the property token
        expect(instance).to.have.property('token');
        // expect(instance.token).to.be(expectedValueLiteral);
      });

    });
  });

}));
