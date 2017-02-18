var React = require('react');
var SelectBox = require('react-select');
var AppConstants = require('../../constants/app-constants.js');
var DashboardLoader = require('./components/dashboard-loader.js');
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

    onSelectReportOption: function(selectedReportOption) {
        this.setState({
            selectedReportOption: selectedReportOption
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