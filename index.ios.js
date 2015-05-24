/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

// react native
var React = require('react-native');

// constants
var APP = require('./js/constants/appConfig');

// views
var HomeView = require('./js/views/homeView');

// dispatcher
var AppDispatcher = require('./js/dispatchers/appDispatcher');

var {
    AppRegistry,
    StyleSheet,
    Text,
    View,
} = React;

class SimpleRacerApp {
    constructor() {
        this.state = {
            view: 'home'
        }
    }

    render() {

        var view;

        switch (this.state.view) {
            case 'home':
                view = (
                    <HomeView />
                );
                break;
            case 'race':
                view = (
                    <Text>
                        This is a test for the race view
                    </Text>
                );
                break;
            default:
                view = (
                    <HomeView />
                );
        }

        return (
            <View style={ styles.main }>
                { view }
            </View>
        );
    }
}

var styles = StyleSheet.create({
    main: {
        flex: 1
    }
});

//var SimpleRacerApp = React.createClass({
//    render: function() {
//        return (
//            <HomeView />
//        );
//    }
//});

AppRegistry.registerComponent('SimpleRacerApp', () => SimpleRacerApp);
