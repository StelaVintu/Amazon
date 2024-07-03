class ItemDescriptionPage{
    get sizeSelectionDropdown(){return cy.get('span [class="a-button-text a-declarative"]') };
    get sizeSmallOption(){return  cy.get('[id="native_dropdown_selected_size_name_1"]')};
    get addToCartBtn(){return cy.get('[id="add-to-cart-button"]')};

    selectSize(size) {
        this.sizeSelectionDropdown.first().click();
        this.sizeSmallOption.contains(size).click({force:true});
      }
    
      addToCart() {
        this.addToCartBtn.should("be.visible").click({ force: true });
      }
}
export default new ItemDescriptionPage