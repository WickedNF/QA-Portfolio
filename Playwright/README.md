* Introduction

This directory is to demonstrate my knowledge and skills in Playwright written in JavaScript. The website these tests are written for is demo.opencart.com 

* Install Playwright

npm init playwright@latest 
** Choose JavaScript
** Name Tests folder -- tests
** Add GitHub Actions -- Yes
** Install Playwright browsers -- Yes

* Notes

** Add // @ts-check at the start of each test file when using JS in VS Code to get automatic type checking

** npx playwright test
*** Runs the e2e tests

** npx playwright test --ui
*** Starts the interactive UI mode

** npx playwright test --project=chromium
*** Runs the tests only on Desktop Chrome

** npx playwright test example
*** Runs the tests in a specific file

** npx playwright test --debug
*** Runs the tests in debug mode

** npx playwright codegen
*** Auto generate tests with codegen

* ToDo
** Create different configs for perf vs e2e tests
*** Use different reporting 
** Add more to the introduction to this directory


