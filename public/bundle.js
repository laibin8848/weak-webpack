
        (function(modules) {
          function require(fileName) {
            const fn = modules[fileName];
            const module = { exports:{}};
            fn(require, module, module.exports)
            return module.exports
          }
          require('D:\works_codes\Tools_source_codes\webpack-learn\weak-webpack/app/index.js')
        })({'D:\works_codes\Tools_source_codes\webpack-learn\weak-webpack/app/index.js' : function(require, module, exports) {"use strict";

var _b = require("./b.js");

import( /* webpackChunkName: "am" */'./a').then(function (module) {
  var amodule = module.default;
});},'./b.js' : function(require, module, exports) {"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.b = undefined;

var _moment = require("moment");

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var b = exports.b = {
  bb: 'bb'
};},})
    