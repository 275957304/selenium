describe('Protractor Demo App', function() {
  it('should have a history', function() {  
    browser.get('http://localhost/selenium/index.html');
	//����class��������Ԫ�� by.css(��myclass')  
	//����id������Ԫ�� by.id(��myid')  
	//����ng-model��������Ԫ�� by.model(��name')  
	//���Ұ���ָ������Ԫ�� by.binding(��bindingname')  
	//����ָ��repeater�е�Ԫ�� by.repeater(��myrepeater') 	
	var name = element(by.id('name'));
	var pas = element(by.id('pas'));
	var btn = element(by.id('btn'));
	
	
	//��ʱ�����������������ȡԪ����Ϣ var el = element(by.css(��mycss��));  
	//���Ԫ�� el.click();  
	//����Ԫ���������� el.sendKeys(��text��);  
	//���Ԫ�������� el.clear();  
	//��ȡָ�����Ե�ֵ el.getAttribute(��value��);  
	//��ȡԪ�ص��ı�ֵ el.getText(); 
	
	name.sendKeys('userName');
    pas.sendKeys('userPassword');
	name.getText().then(function(text) {
		console.log('�û���Ϊ' + text)
	});
	
	name.clear();
	pas.clear();
	
	name.sendKeys('�����û���2');
    pas.sendKeys('userPassword777777');
	//expect(element(by.id('pas')).getText()).toEqual('5');
	btn.click();

	browser.sleep(10000);	
	//driver.quit();
	
    
	
	
  });  
  
  //driver.navigate().to("http://www.yeetrack.com");
  
});






 