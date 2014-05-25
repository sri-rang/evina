(function () {
    "use strict";

    var evina = {listeners: {}};

    window.evina = evina;

    /**
     * adds an event `listener` for `event`
     * @param event
     * @param listener
     */
    evina.on = function (event, listener) {
        evina.listeners[event] = evina.listeners[event] || [];
        if (typeof listener === "function") evina.listeners[event].push(listener);
    };

    /**
     * removes one or all event `listener` for `event`
     * @param event
     * @param [listener]
     */
    evina.off = function (event, listener) {
        if (listener) evina.listeners[event].splice(evina.listeners[event].indexOf(listener), 1);
        else evina.listeners[event] = [];
    };

    /**
     * dispatches `event` and passes `context` to listener
     * @param event
     * @param [context]
     */
    evina.trigger = function (event, context) {
        context = context || {};
        context.event = event;
        evina.listeners[event].forEach(function (listener) { listener(context); });
    };

})();
