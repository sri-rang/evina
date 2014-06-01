(function (window) {
    "use strict";

    window.Evina = Evina;
    window.evina = new Evina();

    /**
     * instantiate new Evina
     * @returns {Evina}
     * @constructor
     */
    function Evina() {
        this.listeners = {};
        return this;
    }

    /**
     * adds an event `listener` for `events`
     * @param events
     * @param listener
     */
    Evina.prototype.on = function (events, listener) {
        var evina = this;
        if (!Array.isArray(events)) events = [events];
        events.forEach(function (event) {
            evina.listeners[event] = evina.listeners[event] || [];
            if (typeof listener === "function") evina.listeners[event].push(listener);
        });
    };

    /**
     * removes one or all event `listener` for `events`
     * @param events
     * @param [listener]
     */
    Evina.prototype.off = function (events, listener) {
        var evina = this;
        if (!Array.isArray(events)) events = [events];
        events.forEach(function (event) {
            if (listener) evina.listeners[event].splice(evina.listeners[event].indexOf(listener), 1);
            else evina.listeners[event] = [];
        });
    };

    /**
     * dispatches `events` and passes `context` to listener
     * @param events
     * @param [context]
     */
    Evina.prototype.trigger = function (events, context) {
        var evina = this;
        if (!Array.isArray(events)) events = [events];
        events.forEach(function (event) {
            if (!Array.isArray(evina.listeners[event])) return;
            context = context || {};
            context.event = event;
            evina.listeners[event].forEach(function (listener) { listener(context); });
        });
    };

})(window || global);
