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
            label: 'Total orders monthly',
            actionName: ActionConstants.TOTAL_ORDERS_MONTHLY,
            url: APIURLConstants.TOTAL_ORDERS_MONTHLY
        },
    ],

    TOTAL_ORDERS_MONTHLY: 2,
    TOTAL_ORDERS_BY_PERSON: 3,
    TOTAL_ORDERS_BY_CURRENCY: 1,

    API_CODE: {
        SUCCESS: 200
    },

    BAR_CHART_DEFAULT_DATA: {
        datasets: [
            {
                backgroundColor: 'rgba(255,99,132,0.2)',
                borderColor: 'rgba(255,99,132,1)',
                borderWidth: 1,
                hoverBackgroundColor: 'rgba(255,99,132,0.4)',
                hoverBorderColor: 'rgba(255,99,132,1)',
            }
        ]
    },

    LINE_CHART_DEFAULT_DATA: {
        datasets: [
            {
                label: "My First dataset",
                fill: false,
                lineTension: 0.1,
                backgroundColor: "rgba(75,192,192,0.4)",
                borderColor: "rgba(75,192,192,1)",
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: "rgba(75,192,192,1)",
                pointBackgroundColor: "#fff",
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: "rgba(75,192,192,1)",
                pointHoverBorderColor: "rgba(220,220,220,1)",
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
                spanGaps: false,
            }
        ]
    },

    REPORT_SELECT_PLACEHOLDER_TEXT: 'Select your report',

    TOTAL_ORDERS_MONTHLY_REPORT_COLUMNS_CONFIG: [
        {
            header: 'Person ID',
            accessor: 'personId'
        }, {
            header: 'Playing Currency',
            accessor: 'playingCurrency',
        }, {
            header: 'Total Playing Original Amount',
            accessor: 'playingOriginalAmount',
        },
    ],

    DEFAULT_PAGE_SIZE: 5
}

module.exports = AppConstants;