var React = require('react');
var ChartSection = require('./chart-section.js');
var TableSection = require('./table-section.js');
var DashboardLoader = React.createClass({
    render: function() {
        var data = this.props.data;
        var isLoading = this.props.isLoading;
        var result;
        if (!data || data.length < 1) {
            if (isLoading) {
                result = (
                    <div className="dashboard-loading-loader-container">
                        <div className="dashboard-loader"></div>
                    </div>
                )
            } else {
                result =  (
                    <div className="dashboard-loader-container">
                        <div className="dashboard-loader"></div>
                    </div>
                )
            }
        } else {
            result = (
                <div className="dashboard-loaded-loader-container">
                    <div>
                        <div className="dashboard-chart-section">
                            <ChartSection data={this.props.data}
                                          reportType={this.props.reportType}/>

                        </div>
                        <div className="dashboard-table-section">
                            <TableSection data={this.props.data}
                                          reportType={this.props.reportType}/>
                        </div>
                    </div>
                </div>
            )


        }
        return result;
    }
})

module.exports = DashboardLoader;