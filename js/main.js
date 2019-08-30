$( "#arrow-down__lang" ).click(function(e) {
    e.preventDefault();
    $( '.dropdown-menu__lang' ).toggleClass( "active" );
});

$( "#arrow-down__prof" ).click(function(e) {
    e.preventDefault();
    $( '.dropdown-menu__prof' ).toggleClass( "active" );
});

document.addEventListener("DOMContentLoaded", function(){
    tail.select(".form__select", {
        /* Your Options */
    });
});