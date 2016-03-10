测试配制

protractor是专为angular应用设计的端到端的测试框架，它直接在浏览器中运行，模拟类似于人在实际环境中的交互操作来测试。

npm install -g protractor //会安装protractor 和 webdriver-manager两个命令行工具
protractor --version //来测试是否安装成功
webdriver-manager update //下载必要的支持组建
webdriver-manager start //运行

测试
//todo-spec.js
describe('angularjs homepage todo list', function() {
it('should add a todo', function() {
browser.get('http://www.angularjs.org');
element(by.model('todoText')).sendKeys('write a protractor test');
element(by.css('[value="add"]')).click();
var todoList = element.all(by.repeater('todo in todos'));
expect(todoList.count()).toEqual(3);
expect(todoList.get(2).getText()).toEqual('write a protractor test');
});
});

编写配置文件
//conf.js
exports.config = {
seleniumAddress: 'http://localhost:4444/wd/hub',
specs: ['todo-spec.js']
};

运行测试
protractor conf.js //同时 webdriver-manager start 也要运行
