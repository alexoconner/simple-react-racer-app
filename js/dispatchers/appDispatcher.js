'use strict';

var flux = require('flux');

// constants
var APP = require('../constants/appConfig');

var {
    Dispatcher
} = flux;

class AppDispatcher extends Dispatcher {
    constructor() {
        console.log('dispatcher loaded');
    }

    dispatchView(action) {
        this.dispatch({
            source: 'VIEW_CHANGE',
            action: action
        });
    }
}

module.export = AppDispatcher;