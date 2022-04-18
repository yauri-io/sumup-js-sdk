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
    describe('LinkRefund', function() {
      beforeEach(function() {
        instance = new SumUpRestApi.LinkRefund();
      });

      it('should create an instance of LinkRefund', function() {
        // TODO: update the code to test LinkRefund
        expect(instance).to.be.a(SumUpRestApi.LinkRefund);
      });

      it('should have the property minAmount (base name: "min_amount")', function() {
        // TODO: update the code to test the property minAmount
        expect(instance).to.have.property('minAmount');
        // expect(instance.minAmount).to.be(expectedValueLiteral);
      });

      it('should have the property maxAmount (base name: "max_amount")', function() {
        // TODO: update the code to test the property maxAmount
        expect(instance).to.have.property('maxAmount');
        // expect(instance.maxAmount).to.be(expectedValueLiteral);
      });

    });
  });

}));
