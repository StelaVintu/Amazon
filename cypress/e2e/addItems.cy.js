import HomePage from "../fixtures/POM/home.page";
import SearchResultsPage from "../fixtures/POM/search.results.page";
import ItemDescriptionPage from "../fixtures/POM/item.description.page";
import MyCart from "../fixtures/POM/cart.page";

let verificationText;

describe("Add Item to cart", () => {
  before("", () => {
    cy.fixture("verificationText.json").then((message) => {
      verificationText = message;
    });
  });
  beforeEach(() => {
    cy.visit("/");
  });

  it("Should be able to add items to cart", () => {
    HomePage.searchFor("4th");
    SearchResultsPage.itemName.contains(verificationText.itemName).click();
    ItemDescriptionPage.selectSize("Small");
    cy.wait(6000);
    ItemDescriptionPage.addToCart();
    MyCart.verifyCartItemCount("1");
  });
});
