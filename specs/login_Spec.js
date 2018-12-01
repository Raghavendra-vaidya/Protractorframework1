var loginelems = require('../PageElements/loginElements.json');
var ldata = require('../JsonDataFiles/loginPageData.json');
describe('Name of the group', () => 
{
    beforeEach(() => {
        browser.driver.manage().window().maximize();
        // browser.ignoreSynchronization = false;
        browser.driver.get("https://www.facebook.com/");
       // browser.ignoreSynchronization = false;
        

    });

    it('should behave...', () => {
        browser.driver.findElement(by.name(loginelems.userNameField)).sendKeys(ldata.Credentials.username);
        browser.driver.findElement(by.name(loginelems.passwordField)).sendKeys(ldata.Credentials.password);
    });


});