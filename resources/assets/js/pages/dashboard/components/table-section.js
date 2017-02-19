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
            sorting: {
                id: 'personId',
                desc: false,
            }
        }
    },

    fetchData: function(state, instance) {
        var pageSize = state.pageSize;
        var page = state.page + 1;
        var sorting = state.sorting;
        if (sorting && sorting[0]) {
            sorting=sorting[0]
        } else {
            sorting = this.state.sorting;
        }
        this.setState({
            page: page,
            pageSize: pageSize,
            sorting: sorting,
        }, function() {
            this.callTotalOrdersByPersonAPI();
        })

    },

    componentDidMount: function() {
        GetStore.addGetResultListener(ActionConstants.TOTAL_ORDERS_BY_PERSON, this.onTotalOrdersByPersonReady)
        this.callTotalOrdersByPersonAPI();
    },

    callTotalOrdersByPersonAPI: function() {
        var requestPage = this.state.page;
        var pageSize = this.state.pageSize;
        var sorting = this.state.sorting;
        var sortingColumn = sorting.id;
        var sortingOrder = sorting.desc?'desc':'asc';
        var totalOrdersByPersonAPIUrl = APIURLConstants.TOTAL_ORDERS_BY_PERSON
            + "?page=" + requestPage + "&pageSize=" + pageSize
            + "&sorted=" + sortingColumn + "&order=" + sortingOrder;
        GetActions.get({}, ActionConstants.TOTAL_ORDERS_BY_PERSON, totalOrdersByPersonAPIUrl)
    },

    componentWillUnmount: function() {
        GetStore.removeGetResultListener(ActionConstants.TOTAL_ORDERS_BY_PERSON, this.onTotalOrdersByPersonReady)
    },

    onTotalOrdersByPersonReady: function() {
        this.processTotalOrdersByPersonAPI(ActionConstants.TOTAL_ORDERS_BY_PERSON)
    },

    processTotalOrdersByPersonAPI: function(actionName) {
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
                <div className="title">Total playing orignal amount by ayer ID</div>
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