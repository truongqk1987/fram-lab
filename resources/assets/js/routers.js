var React = require('react');
var ReactDOM = require('react-dom');
var ReactRouter = require('react-router');
var History = require('history');
var DashboardPage = require('./pages/dashboard/dashboard-page.js')
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var history = History.createHashHistory({queryKey: false});
var IndexRoute = ReactRouter.IndexRoute;

var Routers = (
    <Router history={history}>
        <Route path="/">
            <IndexRoute path="dashboard" component={DashboardPage}/>
        </Route>
    </Router>
);

ReactDOM.render((
    Routers
), document.getElementById('dashboard-container'));