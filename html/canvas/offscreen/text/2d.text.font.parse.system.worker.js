// DO NOT EDIT! This test has been generated by /html/canvas/tools/gentest.py.
// OffscreenCanvas test in a worker:2d.text.font.parse.system
// Description:System fonts must be computed to explicit values
// Note:

importScripts("/resources/testharness.js");
importScripts("/html/canvas/resources/canvas-tests.js");

var t = async_test("System fonts must be computed to explicit values");
var t_pass = t.done.bind(t);
var t_fail = t.step_func(function(reason) {
    throw reason;
});
t.step(function() {

var canvas = new OffscreenCanvas(100, 50);
var ctx = canvas.getContext('2d');

ctx.font = 'message-box';
_assertDifferent(ctx.font, 'message-box', "ctx.font", "'message-box'");
t.done();

});
done();
