# Upstate Interactive Ethereum Challenge

## Structure:

- The token is contained in Upstate.sol and inherits from the OpenZeppelin basic ERC20 token 
- The donations contract is contained in Contribution.sol and inherits from CrowdSale.sol in OpenZeppelin 2.5 ( I downloaded and added
the crowdsale code while still using Zeppelin version 3 in node_modules) 
- Tests are contained in test folder and mirror file structure

## Notes:
- project is not yet finished due to 1) issue with testing time on token and 2) have not build tests for Contribution yet
- currently the contract is initialized with 1000 tokens and the plan is for the ETH donations to be capped


