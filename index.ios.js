/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var HomeView = require('./js/views/homeView.js');
var {
    AppRegistry,
    StyleSheet,
    Text,
    View,
} = React;

var SimpleRacerApp = React.createClass({
    render: function() {
        return (
            <HomeView />
        );
    }
});

AppRegistry.registerComponent('SimpleRacerApp', () => SimpleRacerApp);
