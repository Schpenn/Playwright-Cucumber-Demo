Feature: Playwright example test

Scenario: Title should include 'Playwright
    Given I navigate to the Website
    Then the website should have Playwright in the title

Scenario: 'Get started' link should lead to 'Installation'
    Given I navigate to the Website
    When I click on the link Get started
    Then The heading Installation should be visible

Scenario: 'Search for "Access" should lead to page on "Accessibility-testing"'
    Given I navigate to the Website
    And I type Access into the search bar
    Then Link to Accessibility testing should be visible
    When I click on Accessibility testing
    Then the Accessibility testing page should be visible