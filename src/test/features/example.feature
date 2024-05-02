Feature: Playwright example test

Scenario: Title should include 'Playwright
Given I navigate to the Website
Then the website should have Playwright in the title

Scenario: 'Get started' link should lead to 'Installation'
Given I navigate to the Website
When I click on the link Get started
Then The heading Installation should be visible
