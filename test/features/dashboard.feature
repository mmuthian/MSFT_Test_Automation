Feature: OD Nxt application

  Scenario Outline: Dashboard Tab

    Given I am on the dashboard page
    When I select the 2023 option from the dropdown with ID select_fiscalYear
    Then the select_fiscalYear dropdown value should be 2023
    When I click the element with ID th_reviewId_1001
    Then I should see an element containing the text 1001