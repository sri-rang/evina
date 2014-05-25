(function () {
    "use strict";

    var assert = require("assert");

    global.window = {};

    require("../target/evina.min.js");

    var evina = window.evina;

    describe("evina", function () {

        describe("on", function () {
            it("must register event listener", function () {
                evina.on("hello_world", function () {});
                assert.ok(evina.listeners.hasOwnProperty("hello_world"));
            });
        });

        describe("trigger", function () {
            var has_been_triggered = false;
            it("must trigger event listener", function () {
                evina.on("some_event", function () { has_been_triggered = true; });
                evina.trigger("some_event");
                assert.ok(has_been_triggered);
            });
        });

        describe("off", function () {
            var i = 0;
            it("must remove event listener", function () {
                evina.on("some_event", function () { i++; });
                evina.trigger("some_event");
                assert.equal(i, 1);
                evina.off("some_event");
                evina.trigger("some_event");
                assert.equal(i, 1);
            });
        });

    });

})();
