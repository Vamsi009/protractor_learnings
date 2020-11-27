let calc = function(){

    //capturing locators into variables
    let firstnumber_input = element(by.model('first'));
    let secondnumber_input = element(by.model('second'));
    let gobutton = element(by.css('[ng-click="doAddition"]'));



    //implementing actions using functions
    
    this.enterFirstNumber = function(firstNo){
        firstnumber_input.sendKeys(firstNo);
    };
    
    this.enterSecondNumber = function(secondNo){
        secondnumber_input.sendKeys(secondNo);
    };		
    
    this.buttonClickToAddingNumbers =  function(){
        gobutton.click();
    };
    
    
    this.getPage = function(url){
        browser.get(url);
    };
    
    this.verifyResult = function(result){
        let output = element(by.cssContainingText('.ng-binding',result));
        expect(output.getText()).toEqul(result);
    };
    
};

module.export = new calc();
