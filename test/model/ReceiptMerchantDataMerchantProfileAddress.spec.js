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
    describe('ReceiptMerchantDataMerchantProfileAddress', function() {
      beforeEach(function() {
        instance = new SumUpRestApi.ReceiptMerchantDataMerchantProfileAddress();
      });

      it('should create an instance of ReceiptMerchantDataMerchantProfileAddress', function() {
        // TODO: update the code to test ReceiptMerchantDataMerchantProfileAddress
        expect(instance).to.be.a(SumUpRestApi.ReceiptMerchantDataMerchantProfileAddress);
      });

      it('should have the property addressLine1 (base name: "address_line1")', function() {
        // TODO: update the code to test the property addressLine1
        expect(instance).to.have.property('addressLine1');
        // expect(instance.addressLine1).to.be(expectedValueLiteral);
      });

      it('should have the property city (base name: "city")', function() {
        // TODO: update the code to test the property city
        expect(instance).to.have.property('city');
        // expect(instance.city).to.be(expectedValueLiteral);
      });

      it('should have the property country (base name: "country")', function() {
        // TODO: update the code to test the property country
        expect(instance).to.have.property('country');
        // expect(instance.country).to.be(expectedValueLiteral);
      });

      it('should have the property countryEnName (base name: "country_en_name")', function() {
        // TODO: update the code to test the property countryEnName
        expect(instance).to.have.property('countryEnName');
        // expect(instance.countryEnName).to.be(expectedValueLiteral);
      });

      it('should have the property countryNativeName (base name: "country_native_name")', function() {
        // TODO: update the code to test the property countryNativeName
        expect(instance).to.have.property('countryNativeName');
        // expect(instance.countryNativeName).to.be(expectedValueLiteral);
      });

      it('should have the property postCode (base name: "post_code")', function() {
        // TODO: update the code to test the property postCode
        expect(instance).to.have.property('postCode');
        // expect(instance.postCode).to.be(expectedValueLiteral);
      });

      it('should have the property landline (base name: "landline")', function() {
        // TODO: update the code to test the property landline
        expect(instance).to.have.property('landline');
        // expect(instance.landline).to.be(expectedValueLiteral);
      });

    });
  });

}));