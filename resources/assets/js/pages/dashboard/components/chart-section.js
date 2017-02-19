"use strict";
var React = require('react');
var ReactChartJS = require('react-chartjs-2');
var AppConstants = require('../../../constants/app-constants.js');
var Bar = ReactChartJS.Bar;
var Line = ReactChartJS.Line;
var ChartSection = React.createClass({

    getInitialState: function() {
        var reportData = this.props.data;
        var reportType = this.props.reportType;
        var chartData = this.getChartDataByReportType(reportData, reportType);
        return {
            data: chartData,
            chartWidth: 100,
            chartHeight: 400
        }
    },

    componentWillReceiveProps: function(nextProps) {
        var reportData = nextProps.data;
        var reportType = nextProps.reportType;
        var chartData = this.getChartDataByReportType(reportData, reportType);
        this.setState({
            data: chartData
        })
    },

    getChartDataByReportType: function(reportData, reportType) {
        var chartData = null;
        switch (reportType.value) {
            case AppConstants.TOTAL_ORDERS_BY_CURRENCY:
                chartData = this.convertToBarChartData(reportData, reportType)
                break;
            case AppConstants.TOTAL_ORDERS_MONTHLY:
                chartData = this.convertToBarChartData(reportData, reportType)
                break;
            default:
                break;

        }
        return chartData

    },

    getValuesFromReportChart: function(key, reportData) {
        var values = reportData.map(function(item) {
            if (item) {
                return item[key]
            }
        })
        return values;
    },

    convertToBarChartData: function(reportData, reportType) {
        var result = null;
        if (reportType.value == AppConstants.TOTAL_ORDERS_BY_CURRENCY) {
            var labels = this.getValuesFromReportChart('playingCurrency', reportData);
            var barChartData = this.getValuesFromReportChart('totalOrders', reportData);
            if (labels && barChartData) {
                result = AppConstants.BAR_CHART_DEFAULT_DATA;
                result.labels = labels;
                result.datasets[0].label = reportType.label;
                result.datasets[0].data = barChartData;
            }


        } else if (reportType.value == AppConstants.TOTAL_ORDERS_MONTHLY) {
            var labels = this.getValuesFromReportChart('month', reportData);
            var barChartData = this.getValuesFromReportChart('totalOrders', reportData);
            if (labels && barChartData) {
                result = AppConstants.LINE_CHART_DEFAULT_DATA;
                result.labels = labels;
                result.datasets[0].label = reportType.label;
                result.datasets[0].data = barChartData;
            }
        }
        return result;
    },

    render: function() {
        var reportType = this.props.reportType;
        return this.renderByReportType(reportType);

    },

    renderByReportType: function(reportType) {
        var renderResult = <div></div>
        switch (reportType.value) {
            case AppConstants.TOTAL_ORDERS_BY_CURRENCY:
                renderResult = (
                    <div>
                        <Bar
                            data={this.state.data}
                            width={this.state.chartWidth}
                            height={this.state.chartHeight}
                            options={{
                                maintainAspectRatio: false
                            }}/>
                    </div>
                );
                break;
            case AppConstants.TOTAL_ORDERS_MONTHLY:
                renderResult = (
                    <div>
                        <Line data={this.state.data}
                        />
                    </div>
                );
                break;
            default:
                break;

        }
        return renderResult;
    }
})
module.exports = ChartSection;