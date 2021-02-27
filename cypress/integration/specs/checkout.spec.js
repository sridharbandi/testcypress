import HomePage from '../pages/home.page'
import FishListPage from '../pages/fishlist.page'
import AngelFishPage from '../pages/angelfish.page'
import CartPage from '../pages/cart.page'
import LoginPage from '../pages/login.page'
import RegisterPage from '../pages/register.page'
import PaymentPage from '../pages/payment.page'
import ConfirmPage from '../pages/confirm.page'
import OrderPage from '../pages/order.page'

describe('Pet store check out', ()=> {
    it('Buying fish from pet store', ()=> {
        let random = Math.floor(Math.random()*10000)
        let username  = 'TestUser'+random
        let email = `First.Last${random}@demo.com`

        HomePage.openUrl()
        HomePage.selectFish()
        FishListPage.selectAngleFish()
        AngelFishPage.addToCart()
        CartPage.proceedCheckout()
        LoginPage.selectRegister()
        RegisterPage.register(username, email)
        HomePage.selectSignIn()
        LoginPage.login()
        HomePage.selectCart()
        CartPage.proceedCheckout()
        PaymentPage.makePayment()
        ConfirmPage.confirmOrder()
        OrderPage.lblMessage.should('contain', 'Thank you')

    })
})