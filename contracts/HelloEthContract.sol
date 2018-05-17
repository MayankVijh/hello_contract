pragma solidity ^0.4.4;


contract HelloEthContract {
string message = "Hello Ethereum";
  function HelloEthContract() {
    // constructor
  }

function GetMessage() returns (string) {
return message;
}

}
