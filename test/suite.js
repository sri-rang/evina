(function () {
    "use strict";

    var assert = require("assert");

    global.window = {};

    require("../target/evina.min.js");

    var evina = window.evina;

    describe("evina", function () {

        describe("single", function () {
            it("on", function () {
                evina.on("ev_on", function () {});
                assert.ok(evina.listeners.hasOwnProperty("ev_on"));
            });
            it("trigger", function (done) {
                evina.on("ev_trigger", function () { done(); });
                evina.trigger("ev_trigger");
            });
            it("off", function () {
                var i = 0;
                evina.on("hello_world", function () { i++; });
                evina.trigger("hello_world");
                assert.equal(i, 1);
                evina.off("hello_world");
                evina.trigger("hello_world");
                assert.equal(i, 1);
            });
        });

        describe("multiple", function () {
            var i = 0;
            it("on", function () {
                evina.on(["some_event_1", "some_event_2"], function () { i++; });
                assert.ok(evina.listeners.hasOwnProperty("some_event_1"));
                assert.ok(evina.listeners.hasOwnProperty("some_event_2"));
            });
            it("trigger", function () {
                evina.trigger(["some_event_1", "some_event_2"]);
                assert.equal(i, 2);
            });
            it("off", function () {
                evina.off(["some_event_1", "some_event_2"]);
                evina.trigger(["some_event_1", "some_event_2"]);
                assert.equal(i, 2);
            });
        });

    });

})();
