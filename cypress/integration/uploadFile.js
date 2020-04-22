/// <reference types="cypress" />
import 'cypress-file-upload';
describe('Testcase for Login feature', function() {
    
    const username = 'tinpnt@uiza.io'
  const password = 'luveluve94'

  const sessionCookieName = 'cypress-session-cookie'

  // the XHR endpoint /slow-login takes a couple of seconds
  // we so don't want to login before each test
  // instead we want to get the session cookie just ONCE before the tests
  before(function () {
    cy.request({
      method: 'POST',
      headers: {
        'accept': 'application/json',
        'accept-encoding': 'gzip, deflate, br',
        'accept-language': 'en-US,en;q=0.9,vi;q=0.8',
        'content-length': '461',
        'content-type': 'application/json',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'same-site',
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.113 Safari/537.36'
        },
      url: 'https://development-api.uizadev.io/api/public/v4/admin/user/auth',
      body:{"email":"tinpnt@uiza.io","password":"luveluve94","captcha":"03AGdBq25Wrcqdd8dIIhJ-vv390rgNDIewl61wUlRxFhRZFZmjOLMjdt-McUn7oOdQT0OqBFTtW81nIWYJklp72ZAqXNzBb4C3Dt2pTPKueIVgWaJNmMI51dba3keX5TaNGAN11Vl73p5hXHn1BdT3elS50Ri68MDGHBLqKNZjXHwDZ8gqrlhbhdUqV_EvKMGqUO2LsWOGnhS0VUpBMx6QHCnvimwppTWuaULvq0FALJPUieSIfxfIO4PX0lU2CQ6H8Sf3BOx3-ST_JZDr1DkMu4arsP-OazHCL5b45ddKzF3v9bi2E571P0EQhZbK_t4trYv8JkfNVOKu84yTgxRxMHTje08Cr71qvhgXGAXywCEcpRXvVDjp7VeYi-1cRxYD8qhguff4-cUK"},
    })
    // cy.getCookie(sessionCookieName)
    // .should('exist')
    // .its('value')
    // .should('be.a', 'string')
    // .as('sessionCookie')
})

    beforeEach(function () {
        // before each test we just set the cookie value
        // making the login instant. Since we want to access
        // the test context "this.sessionCookie" property
        // we need to use "function () { ... }" callback form
        //cy.setCookie(sessionCookieName, this.sessionCookie)
      })
    it('Verify error message displayed', function(){
        const yourFixturePath = 'cypress/fixtures/1996919206987787382.mp4';
        cy.visit('https://app-dev.uizadev.io/sign/in')
        cy.get('[name=username]').type('tinpnt@uiza.io')
        cy.get('[name=password]').type('luveluve94')
        cy.get('[type=submit]').click()
        cy.wait(3 )
        cy.visit('https://app-dev.uizadev.io/app/a84a8291261947ea9b6ee0de34b53beb/create-video')
        cy.get('[id=btnChooseFile]').click()
        cy.get('[data-cy="file-input"]').attachFile(yourFixturePath);
    })


})