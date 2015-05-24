/**
 * Home / Start View
 */
'use strict';

// components
var React = require('react-native');
var Button = require('../components/button');

// constants
var APP = require('../constants/appConfig');

// dispatcher
var AppDispatcher = require('../dispatchers/appDispatcher');

var {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Component
} = React;

class HomeView extends Component {
    constructor() {
        this.state = {
            buttonStart: 'Start'
        };

        this.onStartClick = this.onStartClick.bind(this);
    }

    onStartClick() {
        console.log('button clicked');

        var payload = {
            actionType: APP.VIEW_CHANGE
        };
        AppDispatcher.dispatchView(payload);

        this.setState({
            buttonStart: 'started'
        })
    }

    render() {
        return (
            <View style={ styles.container }>
                <Text style={ styles.welcome }>Welcome Racer!</Text>
                <Button
                    onPress={ this.onStartClick }
                    title={ this.state.buttonStart }
                />
            </View>
        );
    }
}

var styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#024887'
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        color: '#FFFFFF',
        marginBottom: 20
    }
});

module.exports = HomeView;