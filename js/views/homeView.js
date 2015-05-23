/**
 * Home / Start View
 */
'use strict';

var React = require('react-native');
var Button = require('../components/button');

var {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Component
} = React;

class HomeView extends Component {
    render() {
        return (
            <View style={ styles.container }>
                <Text style={ styles.welcome }>Welcome Racer!</Text>
                <Button
                    title="Start"
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