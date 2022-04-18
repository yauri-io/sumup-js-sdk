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
    describe('DoingBusinessAsPayload', function() {
      beforeEach(function() {
        instance = new SumUpRestApi.DoingBusinessAsPayload();
      });

      it('should create an instance of DoingBusinessAsPayload', function() {
        // TODO: update the code to test DoingBusinessAsPayload
        expect(instance).to.be.a(SumUpRestApi.DoingBusinessAsPayload);
      });

      it('should have the property businessName (base name: "business_name")', function() {
        // TODO: update the code to test the property businessName
        expect(instance).to.have.property('businessName');
        // expect(instance.businessName).to.be(expectedValueLiteral);
      });

      it('should have the property taxId (base name: "tax_id")', function() {
        // TODO: update the code to test the property taxId
        expect(instance).to.have.property('taxId');
        // expect(instance.taxId).to.be(expectedValueLiteral);
      });

      it('should have the property vatId (base name: "vat_id")', function() {
        // TODO: update the code to test the property vatId
        expect(instance).to.have.property('vatId');
        // expect(instance.vatId).to.be(expectedValueLiteral);
      });

      it('should have the property website (base name: "website")', function() {
        // TODO: update the code to test the property website
        expect(instance).to.have.property('website');
        // expect(instance.website).to.be(expectedValueLiteral);
      });

      it('should have the property email (base name: "email")', function() {
        // TODO: update the code to test the property email
        expect(instance).to.have.property('email');
        // expect(instance.email).to.be(expectedValueLiteral);
      });

      it('should have the property address (base name: "address")', function() {
        // TODO: update the code to test the property address
        expect(instance).to.have.property('address');
        // expect(instance.address).to.be(expectedValueLiteral);
      });

    });
  });

}));