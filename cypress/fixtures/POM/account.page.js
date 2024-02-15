class AccountPage{
    get profileIcon(){return cy.get('[id="nav-link-accountList-nav-line-1"]')};
    get accountBtn(){return cy.get('[href="https://www.amazon.com/gp/css/homepage.html?ref_=nav_youraccount_btn"]')};
}

export default new AccountPage