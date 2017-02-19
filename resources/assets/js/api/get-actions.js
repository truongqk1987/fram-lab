"use strict";
var AppDispatcher   = require('./app-dispatcher.js');
var FetchConstants  = require('./../constants/fetch-constants.js');
var GetActions = {

    get: function(getInfos, actionName, APIUrl) {
        AppDispatcher.dispatch({
            name: actionName,
            api: APIUrl,
            payload: {getInfos},
            storeListenerKey: FetchConstants.API_TYPE.GET
        });
    },
    
    onGetSuccessful: function(response, actionName) {
        AppDispatcher.dispatch({
            name: actionName,
            payload: {response},
            storeListenerKey: FetchConstants.API_TYPE_RESPONSE.GET_SUCCESS
        });
    },
    
    onGetFailed: function(error, actionName) {
        AppDispatcher.dispatch({
            name: actionName,
            payload: {error},
            storeListenerKey: FetchConstants.API_TYPE_RESPONSE.GET_ERROR
        });
    }
};

module.exports = GetActions;