class LoginPage{
    get createAccountBtn(){return cy.get('[id="createAccountSubmit"]')}
    get emailOrMobileNumberInput(){return cy.get('[type="email"]')}
    get continueBtn(){return cy.get('[class="a-button a-button-span12 a-button-primary"]')};
    get passwordInput(){return cy.get('[name="password"]')};
    get signinBtn(){return cy.get('[id="signInSubmit"]')};
  

    loginWithCredentials(email, password) {
        this.emailOrMobileNumberInput.type(email);
        cy.wait(1000);
        this.continueBtn.click();
        this.passwordInput.type(password);
        cy.wait(1000);
        this.signinBtn.click();
      }
}

export default new LoginPage