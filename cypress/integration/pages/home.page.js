class HomePage{
    get iconCart() {return cy.get('[href="/actions/Cart.action?viewCart="] > img')}
    get iconFish() {return cy.get("img[src='../images/fish_icon.gif']")}
    get lnkSignIn() { return cy.get('[href="/actions/Account.action?signonForm="]')}

    openUrl(){
        cy.visit('https://petstore.octoperf.com/actions/Catalog.action')
    }

    selectSignIn(){
        this.lnkSignIn.click()
    }

    selectFish(){
        this.iconFish.click()
    }

    selectCart(){
        this.iconCart.click()
    }
}
export default new HomePage()