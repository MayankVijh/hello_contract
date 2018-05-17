var HelloEthContract = artifacts.require('./HelloEthContract.sol');
contract('HelloEthContract:GetMessage', function(accounts) {
  it("should return a correct string", function(done) {
    var hello_eth_contract = HelloEthContract.deployed();
hello_eth_contract.then(function(contract) {

return contract.GetMessage.call();

}).then(function(result) {    

assert.isTrue(result == 'Hello Ethereum');
    done();
})
  });
});
