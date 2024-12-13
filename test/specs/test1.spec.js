describe('Demo Tests', function(){
it('My First Test',async() => {

    browser.url('https://www.google.com/')
    browser.maximizeWindow()
    browser.pause(2000)
    await $('[name="q"]').setValue("WebDriverIO")
    browser.pause(2000)
   // const value  = await $('[name="q"]').getValue();
   ///console.log(value);
   await $('[name="btnK"]').click()
   //browser.keys('Enter')
   browser.pause(4000)
})

})