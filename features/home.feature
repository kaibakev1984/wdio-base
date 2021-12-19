Feature: The Internet Home App

  Scenario Outline: As a user, I can open Home App

    Given I open the browser and load the url <homepageurl>
    Then I should see a header message with text <headertext>

    Examples:
      | homepageurl                         | headertext              | 
      | https://the-internet.herokuapp.com/ | Welcome to the-internet |
