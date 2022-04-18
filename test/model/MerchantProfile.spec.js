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
    describe('MerchantProfile', function() {
      beforeEach(function() {
        instance = new SumUpRestApi.MerchantProfile();
      });

      it('should create an instance of MerchantProfile', function() {
        // TODO: update the code to test MerchantProfile
        expect(instance).to.be.a(SumUpRestApi.MerchantProfile);
      });

      it('should have the property merchantCode (base name: "merchant_code")', function() {
        // TODO: update the code to test the property merchantCode
        expect(instance).to.have.property('merchantCode');
        // expect(instance.merchantCode).to.be(expectedValueLiteral);
      });

      it('should have the property companyName (base name: "company_name")', function() {
        // TODO: update the code to test the property companyName
        expect(instance).to.have.property('companyName');
        // expect(instance.companyName).to.be(expectedValueLiteral);
      });

      it('should have the property website (base name: "website")', function() {
        // TODO: update the code to test the property website
        expect(instance).to.have.property('website');
        // expect(instance.website).to.be(expectedValueLiteral);
      });

      it('should have the property legalType (base name: "legal_type")', function() {
        // TODO: update the code to test the property legalType
        expect(instance).to.have.property('legalType');
        // expect(instance.legalType).to.be(expectedValueLiteral);
      });

      it('should have the property merchantCategoryCode (base name: "merchant_category_code")', function() {
        // TODO: update the code to test the property merchantCategoryCode
        expect(instance).to.have.property('merchantCategoryCode');
        // expect(instance.merchantCategoryCode).to.be(expectedValueLiteral);
      });

      it('should have the property mobilePhone (base name: "mobile_phone")', function() {
        // TODO: update the code to test the property mobilePhone
        expect(instance).to.have.property('mobilePhone');
        // expect(instance.mobilePhone).to.be(expectedValueLiteral);
      });

      it('should have the property companyRegistrationNumber (base name: "company_registration_number")', function() {
        // TODO: update the code to test the property companyRegistrationNumber
        expect(instance).to.have.property('companyRegistrationNumber');
        // expect(instance.companyRegistrationNumber).to.be(expectedValueLiteral);
      });

      it('should have the property vatId (base name: "vat_id")', function() {
        // TODO: update the code to test the property vatId
        expect(instance).to.have.property('vatId');
        // expect(instance.vatId).to.be(expectedValueLiteral);
      });

      it('should have the property permanentCertificateAccessCode (base name: "permanent_certificate_access_code")', function() {
        // TODO: update the code to test the property permanentCertificateAccessCode
        expect(instance).to.have.property('permanentCertificateAccessCode');
        // expect(instance.permanentCertificateAccessCode).to.be(expectedValueLiteral);
      });

      it('should have the property natureAndPurpose (base name: "nature_and_purpose")', function() {
        // TODO: update the code to test the property natureAndPurpose
        expect(instance).to.have.property('natureAndPurpose');
        // expect(instance.natureAndPurpose).to.be(expectedValueLiteral);
      });

      it('should have the property address (base name: "address")', function() {
        // TODO: update the code to test the property address
        expect(instance).to.have.property('address');
        // expect(instance.address).to.be(expectedValueLiteral);
      });

      it('should have the property businessOwners (base name: "business_owners")', function() {
        // TODO: update the code to test the property businessOwners
        expect(instance).to.have.property('businessOwners');
        // expect(instance.businessOwners).to.be(expectedValueLiteral);
      });

      it('should have the property doingBusinessAs (base name: "doing_business_as")', function() {
        // TODO: update the code to test the property doingBusinessAs
        expect(instance).to.have.property('doingBusinessAs');
        // expect(instance.doingBusinessAs).to.be(expectedValueLiteral);
      });

      it('should have the property settings (base name: "settings")', function() {
        // TODO: update the code to test the property settings
        expect(instance).to.have.property('settings');
        // expect(instance.settings).to.be(expectedValueLiteral);
      });

      it('should have the property vatRates (base name: "vat_rates")', function() {
        // TODO: update the code to test the property vatRates
        expect(instance).to.have.property('vatRates');
        // expect(instance.vatRates).to.be(expectedValueLiteral);
      });

      it('should have the property locale (base name: "locale")', function() {
        // TODO: update the code to test the property locale
        expect(instance).to.have.property('locale');
        // expect(instance.locale).to.be(expectedValueLiteral);
      });

      it('should have the property bankAccounts (base name: "bank_accounts")', function() {
        // TODO: update the code to test the property bankAccounts
        expect(instance).to.have.property('bankAccounts');
        // expect(instance.bankAccounts).to.be(expectedValueLiteral);
      });

      it('should have the property extdev (base name: "extdev")', function() {
        // TODO: update the code to test the property extdev
        expect(instance).to.have.property('extdev');
        // expect(instance.extdev).to.be(expectedValueLiteral);
      });

      it('should have the property payoutZoneMigrated (base name: "payout_zone_migrated")', function() {
        // TODO: update the code to test the property payoutZoneMigrated
        expect(instance).to.have.property('payoutZoneMigrated');
        // expect(instance.payoutZoneMigrated).to.be(expectedValueLiteral);
      });

      it('should have the property country (base name: "country")', function() {
        // TODO: update the code to test the property country
        expect(instance).to.have.property('country');
        // expect(instance.country).to.be(expectedValueLiteral);
      });

    });
  });

}));
