const LoginPage = require ('../pages/login.page')
describe('PageObjects', () => {

    it('LoginPage', async () => {

        browser.url('https://the-internet.herokuapp.com/login')
        browser.maximizeWindow()
       // browser.pause(20000)
       await LoginPage.login('tomsmith', 'SuperSecretPassword!')
       // browser.pause(5000)
       await LoginPage.checkMessage('You logged into a secure area!')
        //await $('#username').setValue('tomsmith')

        //await $('#password').setValue('SuperSecretPassword!')

        // await $('button[type="submit"]').click()
        //const value= await $('#flash-messages').getText()
        //console.log(value)
        // await expect($('#flash')).toHaveTextContaining('You logged into a secure area!')
    })
})