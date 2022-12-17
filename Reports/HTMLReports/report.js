$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/Features/LoginFeature.feature");
formatter.feature({
  "name": "Test the login functionality of OrangeHRM",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Test the valid login",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "user is on login page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.stepDefinitions.LoginSteps.user_is_on_login_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enter username and password",
  "keyword": "When "
});
formatter.match({
  "location": "com.stepDefinitions.LoginSteps.user_enter_username_and_password()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "click on login button",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "user should land on homepage",
  "keyword": "Then "
});
formatter.match({
  "location": "com.stepDefinitions.LoginSteps.user_should_land_on_homepage()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Test the valid login1",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "user is on login page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.stepDefinitions.LoginSteps.user_is_on_login_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enter username and password",
  "keyword": "When "
});
formatter.match({
  "location": "com.stepDefinitions.LoginSteps.user_enter_username_and_password()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "click on login button",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "user should land on homepage",
  "keyword": "Then "
});
formatter.match({
  "location": "com.stepDefinitions.LoginSteps.user_should_land_on_homepage()"
});
formatter.result({
  "status": "skipped"
});
});