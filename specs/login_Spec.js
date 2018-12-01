describe('Name of the group', () => 
{
    beforeEach(() => {
        browser.driver.manage().window().maximize();
        // browser.ignoreSynchronization = false;
        browser.driver.get("https://www.facebook.com/");
       // browser.ignoreSynchronization = false;
        

    });

    it('should behave...', () => {
        browser.driver.findElement(by.name('email')).sendKeys('Jane');
    });


});