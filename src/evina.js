(function (global) {
    "use strict";

    global.Evina = Evina;
    global.evina = new Evina();

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
     * adds an event `listener` for `event`
     * @param event
     * @param listener
     */
    Evina.prototype.on = function (event, listener) {
        this.listeners[event] = this.listeners[event] || [];
        if (typeof listener === "function") this.listeners[event].push(listener);
    };

    /**
     * removes one or all event `listener` for `event`
     * @param event
     * @param [listener]
     */
    Evina.prototype.off = function (event, listener) {
        if (listener) this.listeners[event].splice(this.listeners[event].indexOf(listener), 1);
        else this.listeners[event] = [];
    };

    /**
     * dispatches `event` and passes `context` to listener
     * @param event
     * @param [context]
     */
    Evina.prototype.trigger = function (event, context) {
        context = context || {};
        context.event = event;
        this.listeners[event].forEach(function (listener) { listener(context); });
    };

})(window || global);
