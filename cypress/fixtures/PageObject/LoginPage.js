class loginPage {
  txtEmail        = '[id=ctl00_phlContent_ctlEmailValidationBox_txtEmail]'
  txtPassWord     = '[id=ctl00_phlContent_txtPassword]'
  lbtContinue     = '[id=ctl00_phlContent_ctlEmailValidationBox_lbtContinue]'
  btnLogin        = '[id=ctl00_phlContent_btnLogin]'
  hypMyAnibis     = '[id=ctl00_Header1_ctlHeaderMetaBar_ucMainLinks_hypMyAnibis]'
  lblErrorMessage = '[id=ctl00_phlContent_ctlEmailValidationBox_txtEmail-error]'

  visitLoginPage() {
    cy.visit("https://stage.anibis.ch/fr/default.aspx")
    cy.get('[id=ctl00_Header1_ctlHeaderMetaBar_ucMainLinks_hypMyAnibis').click()
  }

  fillTo(element,value) {
    const field = cy.get(element)
    field.clear()
    field.type(value)
    return this
  }

  clickContinue() {
    cy.get(this.lbtContinue).click()
  }

  submit() {
    cy.get(this.btnLogin).click()
  }

  checkLoginSuccess() {
    cy.get(this.hypMyAnibis).should('exist');
  }

  checkCursorIsFocused(element) {
    cy.get(element).should('have.focus');
  }

  checkErrorMessage(errorMessage) {

    cy.get(this.lblErrorMessage)
      .should('exist')
      .should('have.text', errorMessage)
  }
  
  checkColor(element, rgbcolor) {
    cy.get(element)
      .should('have.css', 'background-color', rgbcolor)
  }
}
export default loginPage 