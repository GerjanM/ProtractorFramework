let homepage = require('../pages/homepage')

describe("demo calculator tests", function() {
    var a;
  
    it("optel test", function() {

homepage.get('http://juliemr.github.io/protractor-demo/');



       // browser.get('http://juliemr.github.io/protractor-demo/');
        //browser.sleep(2000)
        //expect(browser.getCurrentUrl()).toBe('http://juliemr.github.io/protractor-demo/');
        //browser.sleep(2000)

        homepage.enterFirstNumber(2)
        //element(by.model('first')).sendKeys('2');
        homepage.enterSecondNumber(4)
        //element(by.model('second')).sendKeys('3');
        homepage.clickGo();
        //element(element(by.buttonText('Go!')).click());
        browser.sleep(5000)
        //let result = element(by.cssContainingText('.ng-binding', '5'))
        //expect(result.getText()).toEqual('5');
        homepage.verifyResult(6);

        browser.sleep(5000)
        
    });

  });