import CaptchaPage from "../fixtures/POM/captcha.page";
import HomePage from "../fixtures/POM/home.page";
import LoginPage from "../fixtures/POM/login.page";
import AccountPage from "../fixtures/POM/account.page";

let userData;
let verificationText;
let urls;

describe("Login", () => {
  before(() => {
    cy.fixture("userCredentials.json").then((data) => {
      userData = data;
    });
    cy.fixture("verificationText.json").then((message) => {
      verificationText = message;
    });
    cy.fixture("urls.json").then((data) => {
      urls = data;
    });
  });

  beforeEach(() => {
    cy.visit("/");
  });

  it("Should login, verify greeting message, and logout if no CAPTCHA present", () => {
    HomePage.loginBtn.should("be.visible", { timeout: 10000 }).click();
    LoginPage.loginWithCredentials(userData.email, userData.password);
    cy.wait(2000);
    cy.url()
      .should("eq", urls.accountUrl)
      .then((url) => {
        if (url.includes(urls.accountUrl)) {
          AccountPage.profileIcon.should(
            "have.text",
            `Hello, ${userData.firstName}`
          );
          AccountPage.accountBtn.trigger("mouseover");
          cy.wait(2000);
          AccountPage.accountBtnDropdownMenu.last().click({ force: true });
          cy.wait(1000);
          cy.url().should("eq", urls.signinUrl);
        } else {
          cy.url().should("eq", urls.captchaUrl);
          cy.log("CAPTCHA is in place");
          CaptchaPage.captchaIframeLogin
            .within(() => {
              expect(CaptchaPage.captchaIframeLogin).to.exist;
              const $doc = CaptchaPage.captchaIframeLogin.contents();
              const $element = $doc.find(CaptchaPage.captchaHeaderLogin);
              expect($element).to.exist;
              const text = $element.text().trim();
              expect(text).to.equal(verificationText.captchaText);
            })
            .catch((error) => {
              cy.log("Error:", error.message);
            });
        }
      });
  });
});