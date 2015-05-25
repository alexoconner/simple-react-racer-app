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
    Component
} = React;

class SimpleRacerApp extends Component {
    constructor() {
        this.state = {
            view: 'home'
        };

        this.viewDispatcher();
    }

    viewDispatcher() {
        AppDispatcher.register( (payload) => {
            if ( payload.action === APP.VIEW_CHANGE ) {
                this.setState({
                    view: payload.view
                });
            }
        });
    }

    render() {

        var view;

        switch (this.state.view) {
            case 'home':
                view = (
                    <HomeView />
                );
                break;
            case 'play':
                view = (
                    <Text>
                        This is a test for the play view
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


AppRegistry.registerComponent('SimpleRacerApp', () => SimpleRacerApp);
