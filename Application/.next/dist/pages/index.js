'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _campaignFactory = require('../contractFactory/campaignFactory');

var _campaignFactory2 = _interopRequireDefault(_campaignFactory);

var _semanticUiReact = require('semantic-ui-react');

var _layout = require('../components/layout');

var _layout2 = _interopRequireDefault(_layout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'F:\\Learning\\Ethereum\\campaign\\campaign\\Application\\pages\\index.js?entry';


var campaignIndex = function (_Component) {
    (0, _inherits3.default)(campaignIndex, _Component);

    function campaignIndex() {
        (0, _classCallCheck3.default)(this, campaignIndex);

        return (0, _possibleConstructorReturn3.default)(this, (campaignIndex.__proto__ || (0, _getPrototypeOf2.default)(campaignIndex)).apply(this, arguments));
    }

    (0, _createClass3.default)(campaignIndex, [{
        key: 'renderCampaign',
        value: function renderCampaign() {
            var item = this.props.campaign.map(function (address) {
                return {
                    header: address,
                    description: _react2.default.createElement('a', {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 18
                        }
                    }, 'View Campaign'),
                    fluid: true
                };
            });

            return _react2.default.createElement(_semanticUiReact.Card.Group, { items: item, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 23
                }
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(_layout2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 28
                }
            }, _react2.default.createElement('div', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 29
                }
            }, _react2.default.createElement('link', {
                rel: 'stylesheet',
                href: '//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 30
                }
            }), _react2.default.createElement('h3', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 34
                }
            }, ' Open Campaigns '), this.renderCampaign(), _react2.default.createElement(_semanticUiReact.Button, { content: 'Add Campaign', icon: 'add circle', labelPosition: 'left', primary: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 36
                }
            })));
        }
    }], [{
        key: 'getInitialProps',
        value: function () {
            var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
                var campaign;
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _context.next = 2;
                                return _campaignFactory2.default.methods.getAllDeployedCampaign().call();

                            case 2:
                                campaign = _context.sent;

                                console.log("Campaign = ", campaign);
                                return _context.abrupt('return', { campaign: campaign });

                            case 5:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function getInitialProps() {
                return _ref.apply(this, arguments);
            }

            return getInitialProps;
        }()
    }]);

    return campaignIndex;
}(_react.Component);

exports.default = campaignIndex;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxpbmRleC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsImNhbXBhaWduRmFjdG9yeSIsIkNhcmQiLCJCdXR0b24iLCJMYXlvdXQiLCJjYW1wYWlnbkluZGV4IiwiaXRlbSIsInByb3BzIiwiY2FtcGFpZ24iLCJtYXAiLCJoZWFkZXIiLCJhZGRyZXNzIiwiZGVzY3JpcHRpb24iLCJmbHVpZCIsInJlbmRlckNhbXBhaWduIiwibWV0aG9kcyIsImdldEFsbERlcGxveWVkQ2FtcGFpZ24iLCJjYWxsIiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBTzs7OztBQUNkLEFBQU8sQUFBcUI7Ozs7QUFDNUIsQUFBUyxBQUFLOztBQUNkLEFBQU8sQUFBWTs7Ozs7Ozs7O0ksQUFDYjs7Ozs7Ozs7Ozs7eUNBU2MsQUFDWjtnQkFBTSxZQUFPLEFBQUssTUFBTCxBQUFXLFNBQVgsQUFBb0IsSUFBSSxtQkFBVSxBQUM1Qzs7NEJBQU8sQUFDRyxBQUNUO2lEQUFjLGNBQUE7O3NDQUFBO3dDQUFBO0FBQUE7QUFBQSxxQkFBQSxFQUZSLEFBRVEsQUFDZDsyQkFIRCxBQUFPLEFBR0UsQUFFWDtBQUxTLEFBQ047QUFGSixBQUFhLEFBUWIsYUFSYTs7aURBUU4sQUFBQyxzQkFBRCxBQUFNLFNBQU0sT0FBWixBQUFtQjs4QkFBbkI7Z0NBQVAsQUFBTyxBQUNWO0FBRFU7YUFBQTs7OztpQ0FHSCxBQUNMO21DQUNJLEFBQUM7OzhCQUFEO2dDQUFBLEFBQ0k7QUFESjtBQUFBLGFBQUEsa0JBQ0ksY0FBQTs7OEJBQUE7Z0NBQUEsQUFDSjtBQURJO0FBQUE7cUJBQ0osQUFDSyxBQUNKO3NCQUZELEFBRU07OzhCQUZOO2dDQURJLEFBQ0osQUFJQztBQUpEO0FBQ0MsZ0NBR0EsY0FBQTs7OEJBQUE7Z0NBQUE7QUFBQTtBQUFBLGVBTEcsQUFLSCxBQUNDLDBCQU5FLEFBTUYsQUFBSyxBQUNGLGtDQUFBLEFBQUMseUNBQU8sU0FBUixBQUFnQixnQkFBZSxNQUEvQixBQUFvQyxjQUFhLGVBQWpELEFBQStELFFBQVEsU0FBdkU7OEJBQUE7Z0NBVFQsQUFDSSxBQUNJLEFBT0MsQUFLWDtBQUxXOzs7Ozs7Ozs7Ozs7O3VDQTNCZSwwQkFBQSxBQUFnQixRQUFoQixBQUF3Qix5QixBQUF4QixBQUFpRDs7aUNBQWxFO0Esb0RBQ047O3dDQUFBLEFBQVEsSUFBUixBQUFZLGVBQVosQUFBMEI7aUVBQ25CLEVBQUUsVUFBRixBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTmEsQSxBQXVDNUI7O2tCQUFBLEFBQWUiLCJmaWxlIjoiaW5kZXguanM/ZW50cnkiLCJzb3VyY2VSb290IjoiRjovTGVhcm5pbmcvRXRoZXJldW0vY2FtcGFpZ24vY2FtcGFpZ24vQXBwbGljYXRpb24ifQ==