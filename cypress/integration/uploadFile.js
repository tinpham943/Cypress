/// <reference types="cypress" />
import 'cypress-file-upload';
describe('Testcase for upload video feature', function() {
    
    it('Verify error message displayed', function(){
        const yourFixturePath = '1996919206987787382.mp4';
        cy.visit('https://app-dev.uizadev.io/sign/in')
        cy.get('[name=username]').type('tinpnt@uiza.io')
        cy.get('[name=password]').type('luveluve94')
        cy.get('[type=submit]').click()
        cy.get('.ant-page-header-heading-extra > .react-ripples > .ant-btn' , {timeout: 60000}).should('be.visible')
        cy.visit('https://app-dev.uizadev.io/app/a84a8291261947ea9b6ee0de34b53beb/create-video', {timeout: 60000})
        cy.get('.ant-upload-drag > .ant-upload' , {timeout: 60000}).attachFile(yourFixturePath,{ subjectType: 'drag-n-drop' });
    })


})