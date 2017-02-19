"use strict";
var AppDispatcher   = require('./app-dispatcher.js');
var FetchConstants  = require('./../constants/fetch-constants.js');
var assign          = require('object-assign');
var EventEmitter    = require('events').EventEmitter;
var APICaller       = require('./api-caller.js');


var GetCallbackResult = [];

var GetStore = assign({}, EventEmitter.prototype, {
    

    getCallbackResult: function(actionName) {
        return GetCallbackResult[actionName];
    },
    

    emitGetResult: function (actionName) {
        this.emit(actionName);
    },

    addGetResultListener: function (actionName, callback) {
        this.on(actionName, callback);
    },

    removeGetResultListener: function (actionName, callback) {
        this.removeListener(actionName, callback);
    }, 
    
})

GetStore.dispatchToken = AppDispatcher.register(function (action) {

    switch (action.storeListenerKey) {
        case FetchConstants.API_TYPE.GET:
            GetCallbackResult[action.name] = '';
            APICaller.get(
                            action.payload.getInfos,
                            action.name,
                            action.api
                          );
            break;
            
        case FetchConstants.API_TYPE_RESPONSE.GET_SUCCESS:
            GetCallbackResult[action.name] = action.payload.response ;
            GetStore.emitGetResult(action.name);
            break;
            
        case FetchConstants.API_TYPE_RESPONSE.GET_ERROR:
            GetCallbackResult[action.name] = action.payload.error;
            GetStore.emitGetResult(action.name);
            break;
               
        default:
            return {};
    }
});


module.exports = GetStore;