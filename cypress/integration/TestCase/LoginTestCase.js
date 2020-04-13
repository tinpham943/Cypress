/// <reference types="cypress" />
import loginPage from '../../fixtures/PageObject/LoginPage'

describe('Testcase for Login feature', function() {

    beforeEach(function () {
        Cypress.on('uncaught:exception', (err, runnable) => {
            throw err   
          })
      })

    const lp = new loginPage()
   
    // it('Verify Cursor start at Username', function() {
    //     lp.visitLoginPage();
    //     lp.checkCursorIsFocused(lp.txtEmail);
    //   })

    it('Verify error message displayed', function(){
        lp.visitLoginPage()
        lp.fillTo(lp.txtEmail,' ')
        lp.clickContinue()
        lp.checkColor(lp.txtEmail,'rgb(255, 236, 236)')
        lp.checkErrorMessage('N’oubliez pas cette information')
        lp.fillTo(lp.txtEmail,'a')
        lp.checkErrorMessage('Indiquez votre adresse e-mail')
    })

    it('Verify Valid Login', function(){
        lp.visitLoginPage()
        lp.fillTo(lp.txtEmail,'buyer.nvg01@gmail.com')
        lp.clickContinue()
        lp.fillTo(lp.txtPassWord,'nvg07072012')
        lp.submit()
        lp.checkLoginSuccess()
        
        
    })
    
})