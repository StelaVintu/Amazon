class MyCart{
    get cartIcon(){return cy.get("#nav-cart-count", { timeout: 10000 })};

    verifyCartItemCount(expectedCount) {
        this.cartIcon.should('contain', expectedCount);
      }

}
export default new MyCart