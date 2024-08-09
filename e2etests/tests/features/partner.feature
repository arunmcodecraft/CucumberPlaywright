Feature: To test the Partner Module Scenarios

# Scenario: To test Create Partner & check whether its added to the Partner Listing

# Given User is at login Page
# When Enter your "<username>" and "<password>"
# Then Click on Login Button
# Then Dashboard Page should be displayed
# Then Click on the MasterData
# Then Click on the Master Data Partners Icon
# Then Click on the Add Partners Button
# Then Enter all the fields in Partner Details Tab & click on Save button
# Then Navigate to Locations Tab
# Then Click on Create New Location Button in Location Tab
# Then Enter all the fields in Partner Locations Tab & click on Save button
# Then Navigate to Contacts Tab
# Then Click on Create New Contact Button in Cotacts Tab
# Then Enter all the fields in Partner Contacts Tab & click on Save button
# Then Navigate to Details Tab
# Then Click on bread crum link for Partners
# Then Enter the Partner Name to search in search field

#  Examples:
#       | username                          | password |
#       | superadmin@assetmanagement.com    | Abc@123456   |


# Scenario: To test the edit funcationality of the Partner Created.

# Given User is at login Page
# When Enter your "<username>" and "<password>"
# Then Click on Login Button
# Then Dashboard Page should be displayed
# Then Click on the MasterData
# Then Click on the Master Data Partners Icon
# Then Enter the Partner Name to search in search field
# Then Click on the Partner Name to Edit the same

#  Examples:
#       | username                          | password |
#       | superadmin@assetmanagement.com    | Abc@123456   |


Scenario: To test the delete funcationality of the Partner.

Given User is at login Page
When Enter your "<username>" and "<password>"
Then Click on Login Button
Then Dashboard Page should be displayed
Then Click on the MasterData
Then Click on the Master Data Partners Icon
Then Enter the Partner Name to search in search field
Then Click on the Partner Name to Edit the same
Then Navigate to Locations Tab
Then Click on the Location Name to edit in the Locations Tab 
Then Click on Delete button for Locations

 Examples:
      | username                          | password |
      | superadmin@assetmanagement.com    | Abc@123456   |