package com.runner;

import org.junit.runner.RunWith;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;

@RunWith(Cucumber.class)
@CucumberOptions(features="src/test/resources/Features/LoginFeature.feature",
glue={"com.stepDefinitions"},
monochrome=true,
plugin= {"html:Reports\\HTMLReports","json:Reports\\JsonReports\\Cucumber.json",
		"junit:Reports\\JUnitReport\\Cucumber.xml"},
dryRun=true,
strict=true
)
public class RunnerClass {

}
