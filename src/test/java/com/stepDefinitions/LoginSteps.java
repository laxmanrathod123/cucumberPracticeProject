package com.stepDefinitions;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import io.github.bonigarcia.wdm.WebDriverManager;

public class LoginSteps {
	WebDriver driver;
	
	@Given("user is on login page")
	public void user_is_on_login_page() {
		System.out.println("Step1: user is on login page ");
		WebDriverManager.chromedriver().setup();
		driver=new ChromeDriver();
		driver.manage().window().maximize();
		driver.get("https://opensource-demo.orangehrmlive.com/index.php/dashboard");
	}

	@When("user enter username and password")
	public void user_enter_username_and_password() {
		System.out.println("Step2: usere enter username and password");
		driver.findElement(By.xpath("//input[@name='txtUsername']")).sendKeys("Admin");
		driver.findElement(By.xpath("//input[@name='txtPassword']")).sendKeys("admin123");
	}

	  @And("click on login button") public void click_on_login_button() throws
	  InterruptedException {
	  System.out.println("Step3:user click on login button");
	  driver.findElement(By.xpath("//input[@class='button']")).click();
	  Thread.sleep(2000); }
	 

	@Then("user should land on homepage")
	public void user_should_land_on_homepage() {
		System.out.println("user is on homepage");
	}


}
