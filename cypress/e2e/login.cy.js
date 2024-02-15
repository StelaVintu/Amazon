import CaptchaPage from "../fixtures/POM/captcha.page";
import HomePage from "../fixtures/POM/home.page";
import LoginPage from "../fixtures/POM/login.page";
import AccountPage from "../fixtures/POM/account.page";

let userData;
let verificationText;

describe("Login", () => {
  before("", () => {
    cy.fixture("userCredentials.json").then((data) => {
      userData = data;
    });
    cy.fixture("verificationText.json").then((message) => {
      verificationText = message;
    });
  });

  beforeEach("Visit login page", () => {
    cy.visit("/");
  });

  it("Should login with existing credentials and logout", () => {
    HomePage.loginBtn.click();
    LoginPage.loginWithCredentials(userData.email, userData.password);
    CaptchaPage.captchaIframeLogin.then(($iframe) => {
      if ($iframe.length > 0) {
        // CAPTCHA is present
        const $doc = $iframe.contents();
        const $element = $doc.find(CaptchaPage.captchaHeaderLogin);
        expect($element).to.exist;
        const text = $element.text().trim();
        expect(text).to.equal(verificationText.captchaText);
      } else {
        // CAPTCHA is not present
        AccountPage.profileIcon.should(
          "have.text",
          `Hello, ${userData.firstName}`
        );
        AccountPage.accountBtn.hover().last().click(); //Logout
      }
    });
  });
});
