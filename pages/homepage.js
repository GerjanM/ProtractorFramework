let homepage = function(){
    let firstnumber_input = element(by.model('first'));

    let secondnumber_input = element(by.model('second'));

    let goButton =  element(by.css('[ng-click="doAddition()"]'));

    this.get = function(url){
        browser.get(url);
    }

    this.enterFirstNumber = function(firstNo){
        firstnumber_input.sendKeys(firstNo)
    };
    this.enterSecondNumber = function(secondNo) {
        secondnumber_input.sendKeys(secondNo)
    };
//element(element(by.buttonText('Go!')).click());
    this.clickGo = function(){
        goButton.click();
    };

    this.verifyResult = function(result){
        let output = element(by.cssContainingText('.ng-binding', result));
        expect(output.getText()).toEqual(result);

        browser.sleep(2000) 
    }
};

module.exports = new homepage();