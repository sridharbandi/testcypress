class RegisterPage{

    get txtUsername() { return cy.get("input[name='username']")}
    get txtPassword() {return cy.get("input[name='password']")}
    get txtRetypePassword() {return cy.get("input[name='repeatedPassword']")}

    get txtFirstname() {return cy.get("input[name='account.firstName']")}
    get txtLastname() {return cy.get("input[name='account.lastName']")}
    get txtEmail() {return cy.get("input[name='account.email']")}
    get txtPhone() {return cy.get("input[name='account.phone']")}
    get txtAddr1() {return cy.get("input[name='account.address1']")}
    get txtAddr2() {return cy.get("input[name='account.address2']")}
    get txtCity() {return cy.get("input[name='account.city']")}
    get txtState() {return cy.get("input[name='account.state']")}
    get txtZipcode() {return cy.get("input[name='account.zip']")}
    get txtCountry() {return cy.get("input[name='account.country']")}
    get btnSaveAcctInfo() { return cy.get("input[name='newAccount']")}

    register(username, email){
    
        

        this.txtUsername.type(username)
        this.txtPassword.type('Password')
        this.txtRetypePassword.type('Password')
        
        this.txtFirstname.type('FirstName')
        this.txtLastname.type('Lastname')
        this.txtEmail.type(email)
        this.txtPhone.type('777777777')
        this.txtAddr1.type('Addr line 1')
        this.txtAddr2.type('Addr line 2')
        this.txtCity.type('London')
        this.txtState.type('Newham')
        this.txtZipcode.type('00000')
        this.txtCountry.type('UK')
        this.btnSaveAcctInfo.click()
    }


}
export default new RegisterPage()