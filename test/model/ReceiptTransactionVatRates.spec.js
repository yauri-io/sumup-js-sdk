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
    describe('ReceiptTransactionVatRates', function() {
      beforeEach(function() {
        instance = new SumUpRestApi.ReceiptTransactionVatRates();
      });

      it('should create an instance of ReceiptTransactionVatRates', function() {
        // TODO: update the code to test ReceiptTransactionVatRates
        expect(instance).to.be.a(SumUpRestApi.ReceiptTransactionVatRates);
      });

      it('should have the property gross (base name: "gross")', function() {
        // TODO: update the code to test the property gross
        expect(instance).to.have.property('gross');
        // expect(instance.gross).to.be(expectedValueLiteral);
      });

      it('should have the property net (base name: "net")', function() {
        // TODO: update the code to test the property net
        expect(instance).to.have.property('net');
        // expect(instance.net).to.be(expectedValueLiteral);
      });

      it('should have the property rate (base name: "rate")', function() {
        // TODO: update the code to test the property rate
        expect(instance).to.have.property('rate');
        // expect(instance.rate).to.be(expectedValueLiteral);
      });

      it('should have the property vat (base name: "vat")', function() {
        // TODO: update the code to test the property vat
        expect(instance).to.have.property('vat');
        // expect(instance.vat).to.be(expectedValueLiteral);
      });

    });
  });

}));
