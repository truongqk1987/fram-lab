"use strict";
var GetActions = require('./get-actions.js');
var APIUtils    = require('./../utilities/api-utils.js');

var APICaller = {
    get: function(searchInfos, actionName, APIUrl) {
        APIUtils.fetchData(
            searchInfos,
            actionName,
            APIUrl,
            GetActions.onGetSuccessful,
            GetActions.onGetFailed
        );
    }
};

module.exports = APICaller;