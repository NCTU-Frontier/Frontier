/**
 * Created by calee0219 on 12/7/16.
 */
$(document).ready(function(){
    $('.parallax').parallax();
    $('.scrollspy').scrollSpy();
    $('.modal').modal();
});

$('#card-1').flip({
    axis: 'y',
    trigger: 'hover'
});

$('#card-2').flip({
    axis: 'y',
    trigger: 'hover'
});

$('#card-3').flip({
    axis: 'y',
    trigger: 'hover'
});

$('#card-4').flip({
    axis: 'y',
    trigger: 'hover'
});

$('#card-5').flip({
    axis: 'y',
    trigger: 'hover'
});

$('#card-6').flip({
    axis: 'y',
    trigger: 'hover'
});

$(function(){
    $("#typed").typed({
        // strings: ["Typed.js is a <strong>jQuery</strong> plugin.", "It <em>types</em> out sentences.", "And then deletes them.", "Try it out!"],
        stringsElement: $('#typed-strings'),
        typeSpeed: 30,
        backDelay: 500,
        loop: true,
        contentType: 'html', // or text
        // defaults to false for infinite loop
        loopCount: false,
        callback: function(){ foo(); },
        resetCallback: function() { newTyped(); }
    });
    $(".reset").click(function(){
        $("#typed").typed('reset');
    });
});
function newTyped(){ /* A new typed object */ }
function foo(){ console.log("Callback"); }