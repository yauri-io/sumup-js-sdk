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
    describe('ReceiptsAcquirerData', function() {
      beforeEach(function() {
        instance = new SumUpRestApi.ReceiptsAcquirerData();
      });

      it('should create an instance of ReceiptsAcquirerData', function() {
        // TODO: update the code to test ReceiptsAcquirerData
        expect(instance).to.be.a(SumUpRestApi.ReceiptsAcquirerData);
      });

      it('should have the property tid (base name: "tid")', function() {
        // TODO: update the code to test the property tid
        expect(instance).to.have.property('tid');
        // expect(instance.tid).to.be(expectedValueLiteral);
      });

      it('should have the property authorizationCode (base name: "authorization_code")', function() {
        // TODO: update the code to test the property authorizationCode
        expect(instance).to.have.property('authorizationCode');
        // expect(instance.authorizationCode).to.be(expectedValueLiteral);
      });

      it('should have the property returnCode (base name: "return_code")', function() {
        // TODO: update the code to test the property returnCode
        expect(instance).to.have.property('returnCode');
        // expect(instance.returnCode).to.be(expectedValueLiteral);
      });

      it('should have the property localTime (base name: "local_time")', function() {
        // TODO: update the code to test the property localTime
        expect(instance).to.have.property('localTime');
        // expect(instance.localTime).to.be(expectedValueLiteral);
      });

    });
  });

}));
