Feature: Test the login functionality of OrangeHRM
Scenario: Test the valid login

Given user is on login page
When user enter username and password
And click on login button
Then user should land on homepage

Scenario: Test the valid login1

Given user is on login page
When user enter username and password
And click on login button
Then user should land on homepage