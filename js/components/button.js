'use strict';

var React = require('react-native');

var {
    StyleSheet,
    View,
    Text,
    TouchableOpacity
} = React;

class Button {
    render() {
        return (
            <TouchableOpacity onPress={ this.props.onPress }>
                <View style={[ styles.button, this.props.buttonStyle ]}>
                    <Text style={[styles.text, this.props.textStyle ]}>{ this.props.title }</Text>
                </View>
            </TouchableOpacity>
        );
    }
};

var styles = StyleSheet.create({
    button: {
        borderColor: '#FFFFFF',
        borderTopWidth: 1,
        borderRightWidth: 1,
        borderBottomWidth: 1,
        borderLeftWidth: 1,
        borderRadius: 10,
        padding: 10,
        width: 200,
        justifyContent: 'center'
    },
    text: {
        color: '#FFFFFF',
        textAlign: 'center'
    }
});

module.exports = Button;