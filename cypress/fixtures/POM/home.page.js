class HomePage{
    get loginBtn(){ return cy.get('[href="https://www.amazon.com/ap/signin?openid.pape.max_auth_age=0&openid.return_to=https%3A%2F%2Fwww.amazon.com%2F%3Fref_%3Dnav_ya_signin&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.assoc_handle=usflex&openid.mode=checkid_setup&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0"]')};
    get myAccountBtn(){return cy.get('[href="/gp/css/homepage.html/ref=nav_bb_ya"]')};
    get searchBar(){return cy.get('input[id="twotabsearchtextbox"]', { timeout: 10000 })};
    get fullItemCategoryName(){return cy.contains("of july outfits for women")};

    searchFor(query) {
        this.searchBar.should('be.visible').type(query);
        this.fullItemCategoryName.click();
      }

}
export default new HomePage