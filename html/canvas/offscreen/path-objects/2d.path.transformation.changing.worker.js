// DO NOT EDIT! This test has been generated by /html/canvas/tools/gentest.py.
// OffscreenCanvas test in a worker:2d.path.transformation.changing
// Description:Transformations are applied while building paths, not when drawing
// Note:

importScripts("/resources/testharness.js");
importScripts("/html/canvas/resources/canvas-tests.js");

var t = async_test("Transformations are applied while building paths, not when drawing");
var t_pass = t.done.bind(t);
var t_fail = t.step_func(function(reason) {
    throw reason;
});
t.step(function() {

var canvas = new OffscreenCanvas(100, 50);
var ctx = canvas.getContext('2d');

ctx.fillStyle = '#f00';
ctx.fillRect(0, 0, 100, 50);
ctx.fillStyle = '#0f0';
ctx.moveTo(0, 0);
ctx.translate(100, 0);
ctx.lineTo(0, 0);
ctx.translate(0, 50);
ctx.lineTo(0, 0);
ctx.translate(-100, 0);
ctx.lineTo(0, 0);
ctx.translate(1000, 1000);
ctx.rotate(Math.PI/2);
ctx.scale(0.1, 0.1);
ctx.fill();
_assertPixel(canvas, 50,25, 0,255,0,255, "50,25", "0,255,0,255");
t.done();

});
done();
