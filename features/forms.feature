Feature: Practice Form - Demo QA

  Scenario Outline: As a user, I can fill forms in Practice Form Page
    Given I open the browser and load the url <homepageurl>
    When I enter firstname <firstname> and lastname <lastname>
    When I enter email <email>
    When I click on gender <gender>
    When I enter phone number <mobilenumber>
    When I enter birth date <birthdate>
    When I enter subject <subjects>
    When I click on hobbies <hobbies>
    When I enter current address <currentAddress>
    When I click on button submit
    Then I should see summiting message <message>
    Examples:
      | homepageurl                                 | firstname | lastname | email                 | gender  | mobilenumber | birthdate   | subjects | hobbies | currentAddress  | message                        |
      | https://demoqa.com/automation-practice-form | Kevin     | Mitnick  | kmitnick@security.com | Male    | 1159932589   | 18 Apr 2001 | Maths    | Reading | Insecurity 123  | Thanks for submitting the form |
      | https://demoqa.com/automation-practice-form | Leonard   | Nimoy    | lnimoy@trekkie.com    | Other   | 1159932589   | 20 Apr 1975 | Maths    | Reading | Sansecurity 123 | Thanks for submitting the form |
      | https://demoqa.com/automation-practice-form | Cam       | Ill      | cill@girl3.com        | Female  | 1159932589   | 15 Aug 1997 | Maths    | Sports  | Rosales 2073    | Thanks for submitting the form |