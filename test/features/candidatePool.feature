Feature: OD Nxt application

  Scenario Outline: Candidate Pool tab

    Given I am on the dashboard page
    When I click the element with ID lnk_menu_cp
    When I select the 2023 option from the dropdown with ID select_fiscalYear
    Then the select_fiscalYear dropdown value should be 2023