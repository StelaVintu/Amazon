import { faker } from "@faker-js/faker";
import HomePage from "../fixtures/POM/home.page";
import LoginPage from "../fixtures/POM/login.page";
import RegistrationPage from "../fixtures/POM/registration.page";
import CaptchaPage from "../fixtures/POM/captcha.page";

const userData = {
  firstName: faker.person.firstName(),
  lastName: faker.person.lastName(),
  email: faker.internet.email(),
  password: faker.internet.password(),
};
let verificationText;

describe("Registration", () => {
  before("", () => {
    cy.fixture("verificationText.json").then((message) => {
      verificationText = message;
    });
  });
  beforeEach(() => {
    cy.visit("");
  });

  it("Captcha should be present during registration", () => {
    HomePage.loginBtn.should("be.visible").click();
    LoginPage.createAccountBtn.click();
    RegistrationPage.registerAccount(
      userData.firstName,
      userData.email,
      userData.password
    );
    cy.wait(5000);
    CaptchaPage.captchaIframe.then(($iframe) => {
      expect($iframe).to.exist;
      const $doc = $iframe.contents();
      const $element = $doc.find(CaptchaPage.captchaHeader);
      expect($element).to.exist;
      const text = $element.text().trim();
      expect(text).to.equal(verificationText.captchaText);
    });
  });
});
