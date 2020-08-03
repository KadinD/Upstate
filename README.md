# Upstate Interactive Ethereum Challenge

## Update 8/2/2020
- After working some more this weekend, I was able to figure out that the startTime and endTime variables are read as 0 always in "beforeTokenTransfer" and after trying to figure out why this is the case and substituting a getter function etc. I have struggled to figure it out and thus regrettably do not have new updates to push and I reverted to this version for now. 

## Structure:

- The token is contained in Upstate.sol and inherits from the OpenZeppelin basic ERC20 token 
- The donations contract is contained in Contribution.sol and inherits from CrowdSale.sol in OpenZeppelin 2.5 ( I downloaded and added
the crowdsale code while still using Zeppelin version 3 in node_modules) 
- Tests are contained in test folder and mirror file structure

## Notes:
- project is not yet finished due to 1) issue with testing time on token and 2) have not build tests for Contribution yet
- currently the contract is initialized with 1000 tokens and the plan is for the ETH donations to be capped


