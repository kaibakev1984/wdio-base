Feature: Extract indec cuils

Scenario Outline: go to page and extract files using <cuil>
        Given indec web site
        When search cuil number <cuil>
        Then user doesn't need to complete CNE
    Examples: 
    | cuil      |
    |20627790326|