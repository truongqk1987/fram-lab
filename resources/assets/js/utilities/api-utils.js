"use strict";
require('whatwg-fetch');
var AppConstants = require('../constants/app-constants.js');
var APIUrlConstants = require('../constants/api-url-constants.js');
var FetchConstants = require('../constants/fetch-constants.js');


var APIUtils = {

    fetchData: function(
            transferDatas, 
            actionName,
            APIUrl, 
            onSuccessHandler, 
            onFailedHandler
        ) {


        var method = 'GET'
        var headers = {
            'Accept':       'application/json',
            'Content-Type': 'application/json',
        }


        function parseJson(response) {
            return response.json();
        }

        function responseSuccessful(response) {
            onSuccessHandler(response, actionName);
        }

        function responseFailed(error) {
            onFailedHandler(error, actionName);
        }

        fetch(APIUrl, {
            method: method,
            headers: headers,
            //body: JSON.stringify(transferDatas)
        })
        .then(parseJson)
        .then(responseSuccessful)
        .catch(responseFailed)
    }
    
    
}

module.exports = APIUtils;