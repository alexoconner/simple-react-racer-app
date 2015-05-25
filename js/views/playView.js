/**
 * Playmode View
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

class PlayView extends Component {
    constructor() {
        console.log('play view');
    }

    render() {
        return (
            <View>
                <Text>Play View</Text>
            </View>
        );
    }
}

module.exports = PlayView;