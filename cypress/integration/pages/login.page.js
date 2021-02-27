class LoginPage{

    get lnkRegister() {return cy.get('#Catalog > a')}
    get txtPassword() {return cy.get('[name="password"]')}
    get btnSignIn() { return cy.get('[name="signon"]')}

    selectRegister(){
        this.lnkRegister.click()
    }

    login(){
        this.txtPassword.clear().type('Password')
        this.btnSignIn.click()
    }
}
export default new LoginPage()