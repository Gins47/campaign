'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _web = require('../config/web3');

var _web2 = _interopRequireDefault(_web);

var _campaignFactory = require('../contracts/campaignFactory.json');

var _campaignFactory2 = _interopRequireDefault(_campaignFactory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//import contract from '../../Truffle/build/contracts/campaignFactory.json'
//console.log("contract == ",contract)

var address = "0x5EE3414b4b02C92fA9EBEE8dA22761544A08Ea8a";

var abi = _campaignFactory2.default.abi;
var contractInstance = new _web2.default.eth.Contract(abi, address);

exports.default = contractInstance;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRyYWN0RmFjdG9yeVxcY2FtcGFpZ25GYWN0b3J5LmpzIl0sIm5hbWVzIjpbIndlYjMiLCJjb250cmFjdCIsImFkZHJlc3MiLCJhYmkiLCJjb250cmFjdEluc3RhbmNlIiwiZXRoIiwiQ29udHJhY3QiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLEFBQU8sQUFBUCxBQUFpQixBQUFqQjs7OztBQUNBLEFBQU8sQUFBUCxBQUFxQixBQUFyQjs7Ozs7O0FBQ0E7QUFDQTs7QUFFQSxJQUFJLFVBQVUsQUFBZDs7QUFFQSxJQUFJLE1BQU0sMEJBQVMsQUFBbkI7QUFDQSxJQUFJLG1CQUFtQixJQUFJLGNBQUssQUFBTCxJQUFTLEFBQWIsU0FBc0IsQUFBdEIsS0FBMEIsQUFBMUIsQUFBdkIsQUFFQTs7a0JBQWUsQUFBZiIsImZpbGUiOiJjYW1wYWlnbkZhY3RvcnkuanMiLCJzb3VyY2VSb290IjoiRjovTGVhcm5pbmcvRXRoZXJldW0vY2FtcGFpZ24vY2FtcGFpZ24vQXBwbGljYXRpb24ifQ==