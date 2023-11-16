"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validateFormClear = exports.validateInputClear = exports.validateForm = exports.validateInput = void 0;

var _language = _interopRequireDefault(require("./language"));

var _Rules = _interopRequireDefault(require("./Rules"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var validateInput = function validateInput(targetForm, target) {
  var showError = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  var scroll = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  var obj = document.getElementById(targetForm);
  var form = obj ? extractForm(obj.elements) : {};
  var targetArr = Array.isArray(target) ? target : [target];
  var reValidate = targetArr.map(function (key) {
    if (form[key]) {
      return validateData(key, form[key], form);
    } else return false;
  });
  var result = reValidate.map(function (a) {
    return a.error;
  }).find(function (b) {
    return b.length > 0;
  }) ? false : true;
  showError && showErrorMessage(targetForm, reValidate, scroll);
  return result;
};

exports.validateInput = validateInput;

var validateForm = function validateForm(targetForm) {
  var showError = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  var scroll = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  var obj = document.getElementById(targetForm);
  var form = obj ? extractForm(obj.elements) : {};
  var reValidate = Object.entries(form).map(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
        name = _ref2[0],
        obj = _ref2[1];

    return validateData(name, obj, form);
  });
  var result = reValidate.map(function (a) {
    return a.error;
  }).find(function (b) {
    return b.length > 0;
  }) ? false : true;
  showError && showErrorMessage(targetForm, reValidate, scroll);
  return result;
};

exports.validateForm = validateForm;

var validateInputClear = function validateInputClear(targetForm, target) {
  if (Array.isArray(target)) {
    hideErrorMessage(targetForm, target);
  } else {
    hideErrorMessage(targetForm, [target]);
  }
};

exports.validateInputClear = validateInputClear;

var validateFormClear = function validateFormClear(target) {
  var obj = document.getElementById(target);
  var form = obj ? extractForm(obj.elements) : {};
  hideErrorMessage(target, form);
};

exports.validateFormClear = validateFormClear;

var getCookie = function getCookie(name) {
  var value = "; " + document.cookie;
  var parts = value.split("; " + name + "=");
  if (parts.length === 2) return parts.pop().split(";").shift();
};

var findObj = function findObj(targetForm, targetField) {
  var data = {};

  try {
    data = document.querySelector("#".concat(targetForm, " input#").concat(targetField)) ? document.querySelector("#".concat(targetForm, " input#").concat(targetField)) : document.querySelector("#".concat(targetForm, " textarea[name=\"").concat(targetField, "\"]")) ? document.querySelector("#".concat(targetForm, " textarea[name=\"").concat(targetField, "\"]")) : document.querySelector("#".concat(targetForm, " select[name=\"").concat(targetField, "\"]")) ? document.querySelector("#".concat(targetForm, " select[name=\"").concat(targetField, "\"]")) : document.querySelector("#".concat(targetForm, " input[name=\"").concat(targetField, "\"]"));
  } catch (err) {
    data = document.querySelector("#".concat(targetForm, " textarea[name=\"").concat(targetField, "\"]")) ? document.querySelector("#".concat(targetForm, " textarea[name=\"").concat(targetField, "\"]")) : document.querySelector("#".concat(targetForm, " select[name=\"").concat(targetField, "\"]")) ? document.querySelector("#".concat(targetForm, " select[name=\"").concat(targetField, "\"]")) : document.querySelector("#".concat(targetForm, " input[name=\"").concat(targetField, "\"]"));
  }

  return data;
};

var extractForm = function extractForm(obj) {
  var form = {};
  if (obj) Object.keys(obj).filter(function (key) {
    return obj[key].name && !obj[key].disabled;
  }).forEach(function (key) {
    var getKey = obj[key].name;
    var fieldType = obj[key].type;
    var getValue = '';
    var getSize = '';

    if (fieldType === "file") {
      getValue = obj[key].files[0] ? obj[key].files[0].name : obj[key].getAttribute('data-file') || '';
      getSize = obj[key].files[0] ? obj[key].files[0].size : obj[key].getAttribute('data-size') ? parseInt(obj[key].getAttribute('data-size')) : '';
    } else if (fieldType === "radio" || fieldType === "checkbox") {
      if (form[getKey] && form[getKey].value.length > 0) {
        getValue = form[getKey].value;
      } else {
        getValue = obj[key].checked ? obj[key].value : '';
      }
    } else if (fieldType === "select-multiple") {
      var selected = _toConsumableArray(obj[key].options).filter(function (e) {
        return e.selected && e.value;
      }).map(function (e) {
        return e.value;
      });

      getValue = selected.length ? selected : '';
    } else {
      getValue = obj[key].value;
    }

    var getRules = /validate\[(.*)\]/.exec(obj[key].className) ? /validate\[(.*)\]/.exec(obj[key].className)[1] : '';
    var getMessageRules = /validateMessage\{(.*)\}/.exec(obj[key].className) ? /validateMessage\{(.*)\}/.exec(obj[key].className)[1] : '';
    form[getKey] = {
      'value': getValue,
      'rules': getRules,
      'size': getSize,
      'type': fieldType,
      'messageRules': getMessageRules
    };
  });
  return form;
};

var hideErrorMessage = function hideErrorMessage(targetForm, obj) {
  var list = [];

  if (Array.isArray(obj)) {
    list = obj;
  } else {
    list = Object.keys(obj);
  } //remove error message


  list.forEach(function (key) {
    var errorId = "error-".concat(targetForm, "-").concat(key);
    var errorObj = document.getElementById(errorId);
    var dom = findObj(targetForm, key);

    if (dom) {
      //let currentElement = dom.closest('div.input-control') ? dom.closest('div.input-control') : '';
      var currentElementDiv = dom.closest('div.input-control div') ? dom.closest('div.input-control div') : dom.closest('div.validation-wrapper div') ? dom.closest('div.validation-wrapper div') : '';

      if (currentElementDiv) {
        currentElementDiv.classList.replace('error', 'normal');
      }
    }

    if (errorObj) {
      errorObj.classList.replace('u-tx-error', 'u-tx-normal');
      errorObj.innerHTML = '';
    }
  });
};

var showErrorMessage = function showErrorMessage(targetForm, obj) {
  var scroll = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var objForm = document.getElementById(targetForm);

  if (objForm) {
    var scrollFocus = false; //generate error message

    Object.values(obj).forEach(function (data) {
      var errorId = "error-".concat(targetForm, "-").concat(data.key);
      var errorObj = document.getElementById(errorId);
      var dom = findObj(targetForm, data.key);
      var currentElement = dom.closest('div.input-control') ? dom.closest('div.input-control') : dom.closest('div.validation-wrapper') ? dom.closest('div.validation-wrapper') : '';
      var currentElementDiv = dom.closest('div.input-control > div') ? dom.closest('div.input-control > div') : dom.closest('div.validation-wrapper > div') ? dom.closest('div.validation-wrapper > div') : '';

      if (data && data.error.length > 0) {
        //set autoscroll
        scrollFocus = !scrollFocus ? errorId : scrollFocus;
        var infoObj = document.createElement('span');
        infoObj.id = errorId;
        infoObj.className = 'form-helptext u-tx-error';
        infoObj.innerHTML = data.error;

        if (currentElement) {
          if (['normal', 'error'].some(function (el) {
            return currentElementDiv.className.includes(el);
          })) {
            currentElementDiv.classList.replace('normal', 'error');
          } else {
            currentElementDiv.classList.add('error');
          }

          var nextElement = currentElement.nextElementSibling;

          if (nextElement && nextElement.tagName.toLowerCase() === 'span' && ['form-helptext'].some(function (el) {
            return nextElement.className.includes(el);
          })) {
            if (!errorObj) {
              nextElement.id = errorId;
              nextElement.classList.replace('u-tx-normal', 'u-tx-error');
              nextElement.innerHTML = data.error;
            } else {
              errorObj.classList.replace('u-tx-normal', 'u-tx-error');
              errorObj.innerHTML = data.error;
            }
          } else {
            currentElement.insertAdjacentHTML('afterend', infoObj.outerHTML);
          }
        } else {
          if (!errorObj) {
            dom.insertAdjacentHTML('afterend', infoObj.outerHTML);
          } else {
            errorObj.classList.replace('u-tx-normal', 'u-tx-error');
            errorObj.innerHTML = data.error;
          }
        }
      } else {
        if (currentElementDiv) {
          currentElementDiv.classList.replace('error', 'normal');
        }

        if (errorObj) {
          errorObj.classList.replace('u-tx-error', 'u-tx-normal');
          errorObj.innerHTML = '';
        }
      }
    });

    if (scroll && scrollFocus) {
      var element = document.getElementById(scrollFocus);
      element.scrollIntoView();
      element.scrollIntoView(true);
      element.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center"
      });
    }
  }
};

var validateData = function validateData(name, obj, form) {
  //get error language from cookie
  var errorLang = getCookie('error_lang') || 'id'; //set input form

  var error = false;
  var inputName = name.trim();
  var inputValue = obj.value;
  var entries = obj.rules.split(',');
  var validate = new _Rules["default"]();
  var messageEntries = obj.messageRules.split('|');
  var inputMessageRules = {};
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = messageEntries[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var messageEntriesTemp = _step.value;
      var test = messageEntriesTemp.split(/\{(.*)\}/);
      if (test[0]) inputMessageRules[test[0]] = test[1];
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator["return"] != null) {
        _iterator["return"]();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  var _iteratorNormalCompletion2 = true;
  var _didIteratorError2 = false;
  var _iteratorError2 = undefined;

  try {
    for (var _iterator2 = entries[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
      var inputRules = _step2.value;
      var splitRule = inputRules.split(/\[|,|\]/);
      var rulesName = splitRule[0];
      var rulesExt = splitRule[1] ? splitRule[1] : '';

      if (typeof validate[rulesName] === 'function') {
        error = validate[rulesName]({
          name: inputName,
          value: inputValue
        }, rulesExt, form);

        if (error !== false) {
          if (error === true) error = 0;

          try {
            if (inputMessageRules[rulesName]) error = inputMessageRules[rulesName];else error = (0, _language["default"])(rulesExt)[errorLang][rulesName][error];
          } catch (e) {
            error = '    ';
          }

          if (!error) error = '    ';
        } else error = '';
      }

      if (error && error.length !== 0) break;
    }
  } catch (err) {
    _didIteratorError2 = true;
    _iteratorError2 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
        _iterator2["return"]();
      }
    } finally {
      if (_didIteratorError2) {
        throw _iteratorError2;
      }
    }
  }

  return {
    key: inputName,
    error: error
  };
};