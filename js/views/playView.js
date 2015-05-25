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

        this.moveLeft = this.moveLeft.bind(this);
        this.moveRight = this.moveRight.bind(this);
    }

    componentDidMount() {
        this.car = this.refs['car'];
    }

    /**
     * Car actions
     */
    moveLeft() {
        console.log('moving left');
        console.log(this.car);
    }

    moveRight() {
        console.log('moving right');
    }

    render() {
        return (
            <View style={ styles.container }>
                <View style={ styles.gameContainer }>
                    <View ref="car" style={ styles.car }></View>
                </View>
                <View style={ styles.controlContainer }>
                    <Button
                        buttonStyle={[ styles.controlButton, styles.controlButtonLeft ]}
                        onPress={ this.moveLeft }
                        title="<"
                    />
                    <Button
                        buttonStyle={[ styles.controlButton, styles.controlButtonRight ]}
                        onPress={ this.moveRight }
                        title=">"
                    />
                </View>
            </View>
        );
    }
}

var styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#024887'
    },
    gameContainer: {
        flex: 1,
        alignSelf: 'stretch',
        height: 200,
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        marginTop: 30,
        marginRight: 10,
        marginBottom: 10,
        marginLeft: 10
    },
    car: {
        position: 'absolute',
        bottom: 0,
        width: 20,
        height: 60,
        backgroundColor: '#000000'
    },
    controlContainer: {
        height: 60,
        marginBottom: 10,
        marginLeft: 10,
        marginRight: 10
    },
    controlContainerFont: {
        color: '#FFFFFF'
    },
    controlButton: {
        position: 'absolute',
        flex: 1,
        alignSelf: 'stretch',
        width: 60,
        top: 0,
        bottom: 0
    },
    controlButtonLeft: {
        left: 0
    },
    controlButtonRight: {
        right: 0
    }
});

module.exports = PlayView;