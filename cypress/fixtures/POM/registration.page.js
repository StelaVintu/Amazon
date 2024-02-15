class RegistrationPage{
    get firstAndLastNameInput(){return cy.get('[name="customerName"]')};
    get emailOrMobileNumberInput(){return cy.get('[type="email"]')};
    get passwordInput(){return cy.get('[name="password"]')};
    get passwordCheckInput(){return cy.get('[name="passwordCheck"]')};
    get continueBtn(){return cy.get('[id="continue"]')};

    registerAccount(firstName, email, password) {
        this.firstAndLastNameInput.type(firstName);
        this.emailOrMobileNumberInput.type(email);
        this.passwordInput.type(password);
        this.passwordCheckInput.type(password);
        this.continueBtn.click();
      }
}

export default new RegistrationPage