"use strict";
var React = require('react');
var SelectBox = require('react-select');
var AppConstants = require('../../constants/app-constants.js');
var ActionConstants = require('../../constants/action-constants.js');
var APIURLConstants = require('../../constants/api-url-constants.js');
var DashboardLoader = require('./components/dashboard-loader.js');
var GetAction = require('../../api/get-actions.js');
var GetStore = require('../../api/get-store.js');
var reportOptions = AppConstants.CHART_OPTIONS;
var defaultReportOption = reportOptions[0];
var DashboardPage = React.createClass({



    getInitialState: function() {
        return {
            selectedReportOption: defaultReportOption,
            reportData: null,
            isDashboardLoaded: true
        }
    },

    componentDidMount: function() {
        GetStore.addGetResultListener(ActionConstants.TOTAL_ORDERS_BY_PERSON, this.onTotalOrdersByPersonReady)
        GetStore.addGetResultListener(ActionConstants.TOTAL_ORDERS_BY_CURRENCY, this.onTotalOrdersByCurrencyReady)
        GetStore.addGetResultListener(ActionConstants.TOTAL_ORDERS_MONTHLY, this.onTotalOrdersMonthlyReady)
        GetAction.get({}, ActionConstants.TOTAL_ORDERS_BY_CURRENCY, APIURLConstants.TOTAL_ORDERS_BY_CURRENCY)
    },

    componentWillUnmount: function() {
        GetStore.removeGetResultListener(ActionConstants.TOTAL_ORDERS_BY_PERSON, this.onTotalOrdersByPersonReady)
        GetStore.removeGetResultListener(ActionConstants.TOTAL_ORDERS_BY_CURRENCY, this.onTotalOrdersByCurrencyReady)
        GetStore.removeGetResultListener(ActionConstants.TOTAL_ORDERS_MONTHLY, this.onTotalOrdersMonthlyReady)
    },

    onTotalOrdersByPersonReady: function() {
        this.processAPIData(ActionConstants.TOTAL_ORDERS_BY_PERSON)
    },

    onTotalOrdersByCurrencyReady: function() {
        this.processAPIData(ActionConstants.TOTAL_ORDERS_BY_CURRENCY)
    },

    onTotalOrdersMonthlyReady: function() {
        this.processAPIData(ActionConstants.TOTAL_ORDERS_MONTHLY)
    },

    processAPIData: function(actionName) {
        var result = GetStore.getCallbackResult(actionName);
        if (result && result.code == AppConstants.API_CODE.SUCCESS) {
            var data = result.data;
            if (data) {
                this.setState({
                    reportData: data
                })
            }
        }
    },



    onSelectReportOption: function(selectedReportOption) {
        this.setState({
            selectedReportOption: selectedReportOption
        }, function() {
            var selectedReportOption = this.state.selectedReportOption;
            GetAction.get({}, selectedReportOption.actionName, selectedReportOption.url)
        })
    },

    render: function() {
        return (
            <div className="dashboard">
                <div className="dashboard-select-section">
                    <SelectBox name="report-select"
                        value={this.state.selectedReportOption}
                        options={reportOptions}
                        onChange={this.onSelectReportOption}/>
                </div>
                <DashboardLoader isLoading={this.state.isDashboardLoaded}
                                 data={this.state.reportData}
                                 reportType={this.state.selectedReportOption}/>
            </div>
        )
    }
});

module.exports = DashboardPage;