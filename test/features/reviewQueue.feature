Feature: OD Nxt application

  Scenario Outline: Review Queue Tab

    Given I am on the dashboard page
    When I click the element with ID lnk_menu_rq
    When I click the element with ID th_reviewId_1001
    Then I should see an element containing the text 1001