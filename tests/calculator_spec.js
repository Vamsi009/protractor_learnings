//import expect from 'expect';
var calc_page = require('../pages/calculator_source.js');

describe('Protractor calculator App', function () {
    it('Addming numbers', function () {
        
        browser.get('http://juliemr.github.io/protractor-demo/');
        
        //calc_page.getPage('http://juliemr.github.io/protractor-demo/');
        

        browser.sleep(2000);
        
        element(by.model('first')).sendKeys(1);	// (Here element(by.model('first')) this is locator, sendKeys(1) this is action)
        //calc_page.enterFirstNumber(1);
        console.log('welcome');

        element(by.model('second')).sendKeys(2);
        //calc_page.enterSecondNumber(2);

        element(by.css('[ng-click="doAddition()"]')).click();
        //calc_page.buttonClickToAddingNumbers();

        //expect(element(by.binding('latest')).getText()).
        //    toEqual('5'); // This is wrong!
        
        let result = element(by.cssContainingText('.ng-binding','3'));
        expect(result.getText()).toEqual('3');
        //calc_page.verifyResult('3');
        
        browser.sleep(2000);

    });
});