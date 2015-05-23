/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

// react native
var React = require('react-native');

// views
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
