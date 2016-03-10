describe('Protractor Demo App', function() {
  it('should have a history', function() {  
    browser.get('http://localhost/selenium/index.html');
	//根据class名来查找元素 by.css(‘myclass')  
	//根据id来查找元素 by.id(‘myid')  
	//根据ng-model名来查找元素 by.model(’name')  
	//查找绑定了指定名的元素 by.binding(‘bindingname')  
	//查找指定repeater中的元素 by.repeater(‘myrepeater') 	
	var name = element(by.id('name'));
	var pas = element(by.id('pas'));
	var btn = element(by.id('btn'));
	
	
	//这时不会与浏览器交互获取元素信息 var el = element(by.css(‘mycss’));  
	//点击元素 el.click();  
	//给该元素输入内容 el.sendKeys(’text’);  
	//清空元素内内容 el.clear();  
	//获取指定属性的值 el.getAttribute(‘value’);  
	//获取元素的文本值 el.getText(); 
	
	name.sendKeys('userName');
    pas.sendKeys('userPassword');
	name.getText().then(function(text) {
		console.log('用户名为' + text)
	});
	
	name.clear();
	pas.clear();
	
	name.sendKeys('我是用户名2');
    pas.sendKeys('userPassword777777');
	//expect(element(by.id('pas')).getText()).toEqual('5');
	btn.click();

	browser.sleep(10000);	
	//driver.quit();
	
    
	
	
  });  
  
  //driver.navigate().to("http://www.yeetrack.com");
  
});






 