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
    describe('Currency', function() {
      beforeEach(function() {
        instance = SumUpRestApi.Currency;
      });

      it('should create an instance of Currency', function() {
        // TODO: update the code to test Currency
        expect(instance).to.be.a('object');
      });

      it('should have the property BGN', function() {
        expect(instance).to.have.property('BGN');
        expect(instance.BGN).to.be("BGN");
      });

      it('should have the property BRL', function() {
        expect(instance).to.have.property('BRL');
        expect(instance.BRL).to.be("BRL");
      });

      it('should have the property CHF', function() {
        expect(instance).to.have.property('CHF');
        expect(instance.CHF).to.be("CHF");
      });

      it('should have the property CLP', function() {
        expect(instance).to.have.property('CLP');
        expect(instance.CLP).to.be("CLP");
      });

      it('should have the property CZK', function() {
        expect(instance).to.have.property('CZK');
        expect(instance.CZK).to.be("CZK");
      });

      it('should have the property DKK', function() {
        expect(instance).to.have.property('DKK');
        expect(instance.DKK).to.be("DKK");
      });

      it('should have the property EUR', function() {
        expect(instance).to.have.property('EUR');
        expect(instance.EUR).to.be("EUR");
      });

      it('should have the property GBP', function() {
        expect(instance).to.have.property('GBP');
        expect(instance.GBP).to.be("GBP");
      });

      it('should have the property HRK', function() {
        expect(instance).to.have.property('HRK');
        expect(instance.HRK).to.be("HRK");
      });

      it('should have the property HUF', function() {
        expect(instance).to.have.property('HUF');
        expect(instance.HUF).to.be("HUF");
      });

      it('should have the property NOK', function() {
        expect(instance).to.have.property('NOK');
        expect(instance.NOK).to.be("NOK");
      });

      it('should have the property PLN', function() {
        expect(instance).to.have.property('PLN');
        expect(instance.PLN).to.be("PLN");
      });

      it('should have the property RON', function() {
        expect(instance).to.have.property('RON');
        expect(instance.RON).to.be("RON");
      });

      it('should have the property SEK', function() {
        expect(instance).to.have.property('SEK');
        expect(instance.SEK).to.be("SEK");
      });

      it('should have the property USD', function() {
        expect(instance).to.have.property('USD');
        expect(instance.USD).to.be("USD");
      });

    });
  });

}));
