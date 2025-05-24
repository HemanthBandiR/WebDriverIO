const LoginPage = require('../pageobjects/login.page')
const SecurePage = require('../pageobjects/secure.page')

describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        await LoginPage.open()

        await LoginPage.login('tomsmith', 'SuperSecretPassword!')
        await expect(SecurePage.flashAlert).toBeExisting()
        await expect(SecurePage.flashAlert).toBeDisplayed();
        await expect(SecurePage.flashAlert).toHaveTextContaining('You logged into a secure area!');
        const alertText = await SecurePage.flashAlert.getText();
        console.assert(alertText.includes('You logged into a secure area!'), 'Text mismatch');
        console.log(alertText)
    })
})


