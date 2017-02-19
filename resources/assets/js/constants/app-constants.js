"use strict";
var ActionConstants = require('./action-constants.js');
var APIURLConstants = require('./api-url-constants.js');
var AppConstants = {
    CHART_OPTIONS: [
        {
            value: 1,
            label: 'Total orders by currency',
            actionName: ActionConstants.TOTAL_ORDERS_BY_CURRENCY,
            url: APIURLConstants.TOTAL_ORDERS_BY_CURRENCY
        },
        {
            value: 2,
            label: 'Total orders by person',
            actionName: ActionConstants.TOTAL_ORDERS_BY_PERSON,
            url: APIURLConstants.TOTAL_ORDERS_BY_PERSON
        },
        {
            value: 3,
            label: 'Total orders monthly',
            actionName: ActionConstants.TOTAL_ORDERS_MONTHLY,
            url: APIURLConstants.TOTAL_ORDERS_MONTHLY
        },
    ],

    TOTAL_ORDERS_MONTHLY: 3,
    TOTAL_ORDERS_BY_PERSON: 2,
    TOTAL_ORDERS_BY_CURRENCY: 1,

    API_CODE: {
        SUCCESS: 200
    }
}

module.exports = AppConstants;