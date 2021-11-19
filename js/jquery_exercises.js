"use strict";
$(document).ready(function(){
//Use the same id on 2 elements. How does this change the jQuery selection?
    // It only shows the first element.

// var contents = $('#title').html();
// alert(contents);

//Give another element an id of codeup. Does this element get a border now?
    //No, because only the class is selected not the id.

// $('.codeup').css('border', '1px solid red');

$('li').css('font-size','20px')
$('h1, p, li').css('background-color', '#FF0');
alert($('h1').html());

})