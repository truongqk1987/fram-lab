"use strict";
var React = require('react');
var ReactTable = require('react-table').default;
var AppConstants = require('../../../constants/app-constants.js');
var ActionConstants = require('../../../constants/action-constants.js');
var APIURLConstants = require('../../../constants/api-url-constants.js');
var GetStore = require('../../../api/get-store.js');
var GetActions = require('../../../api/get-actions.js');
var Axios = require('axios');
var columnsConfig = AppConstants.TOTAL_ORDERS_MONTHLY_REPORT_COLUMNS_CONFIG;

var TableSection = React.createClass({
    getInitialState: function() {
        return {
            loading: true,
            data: [],
            page: 1,
            pageSize: AppConstants.DEFAULT_PAGE_SIZE,
        }
    },

    fetchData: function(state, instance) {

    },

    componentDidMount: function() {
        GetStore.addGetResultListener(ActionConstants.TOTAL_ORDERS_BY_PERSON, this.onTotalOrdersByPersonReady)
        var requestPage = this.state.page;
        var pageSize = this.state.pageSize;
        var totalOrdersByPersonAPIUrl = APIURLConstants.TOTAL_ORDERS_BY_PERSON
                + "?page=" + requestPage + "&pageSize=" + pageSize;
        GetActions.get({}, ActionConstants.TOTAL_ORDERS_BY_PERSON, totalOrdersByPersonAPIUrl)
    },

    componentWillUnmount: function() {
        GetStore.removeGetResultListener(ActionConstants.TOTAL_ORDERS_BY_PERSON, this.onTotalOrdersByPersonReady)
    },

    onTotalOrdersByPersonReady: function() {
        this.processAPIData(ActionConstants.TOTAL_ORDERS_BY_PERSON)
    },

    processAPIData: function(actionName) {
        var result = GetStore.getCallbackResult(actionName);
        if (result && result.code == AppConstants.API_CODE.SUCCESS) {
            var data = result.data;
            var pages = result.pages;
            if (data) {
                this.setState({
                    loading: false,
                    data: data,
                    pages: pages
                })
            }
        }
    },


    render: function() {
        return (
            <div className="dashboar-table-section">
                <ReactTable
                    data={this.state.data}
                    columns={columnsConfig}
                    defaultPageSize={AppConstants.DEFAULT_PAGE_SIZE}
                    onChange={this.fetchData}
                    loading={this.state.loading}
                    manual
                    pages={this.state.pages}
                />
            </div>
        )
    }
})

module.exports = TableSection;