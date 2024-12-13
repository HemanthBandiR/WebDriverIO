describe("Test1", () => {
  it("tests Test1", async () => {
   // await browser.setWindowSize(811, 657)
    await browser.url("https://the-internet.herokuapp.com/login")
   // await expect(browser).toHaveUrl("https://the-internet.herokuapp.com/login")
  //  await browser.$("aria/This is where you can log into the secure area. Enter tomsmith for the username and SuperSecretPassword! for the password. If the information is wrong you should see error messages.").click()
  //  await browser.$("//*[@id=\"content\"]/div/h4/em[1]").click({ button: 'right' })
  //  await browser.$("#username").click({ button: 'right' })
    await browser.$("#username").setValue("tomsmith")
  /*  await browser.performActions([{
      type: 'key',
      id: 'keyboard',
      actions: [{ type: 'keyDown', value: '' }]
    }])*/
 //   await browser.$("//*[@id=\"content\"]/div/h4/em[2]").click()
   /* await browser.performActions([{
      type: 'key',
      id: 'keyboard',
      actions: [{ type: 'keyUp', value: '' }]
    }])*/
    await browser.$("#password").click()
    await browser.$("#password").setValue("SuperSecretPassword!")
    await browser.$('button[type="submit"]').click()
   // await expect(browser).toHaveUrl("https://the-internet.herokuapp.com/secure")
    await browser.$("//*[@id='content']/div/a/i").click()
    await expect(browser).toHaveUrl("https://the-internet.herokuapp.com/login")
  });
});
