Feature: OD Nxt application

  Scenario Outline: Dashboard Tab

    Given I am on the dashboard page
    When I select the 2023 option from the dropdown with ID select_fiscalYear
    Then the select_fiscalYear dropdown value should be 2023
    When I click the element with ID th_reviewId_1001
    Then I should see an element containing the text 1001
    Given I am on the dashboard page
    When I click the element with ID lnk_new_viewall
    Then I should see an element containing the text "Review Key"

  Scenario Outline: Candidate Pool tab

    Given I am on the dashboard page
    When I click the element with ID lnk_menu_cp
    When I select the 2023 option from the dropdown with ID select_fiscalYear
    Then the select_fiscalYear dropdown value should be 2023
    When I select the checkbox with ID "th_cp_1001"
    Then the checkbox with id "th_cp_1001" should be checked
    When I select the checkbox with ID "th_cp_1001"
    Then the checkbox with id "th_cp_1001" should be unchecked

  Scenario Outline: Review Queue Tab

    Given I am on the dashboard page
    When I click the element with ID lnk_menu_rq
    When I click the element with ID th_reviewId_1001
    Then I should see an element containing the text 1001