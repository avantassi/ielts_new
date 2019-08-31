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

function yesnoCheck() {
    if (document.getElementById('agent').checked) {
        document.getElementById('hidden-label__agent').style.display = 'block';
    }
    else document.getElementById('hidden-label__agent').style.display = 'none';
}

function yesnoCheck2() {
    if (document.getElementById('ielts').checked) {
        document.getElementById('hidden-label__ielts').style.display = 'block';
    }
    else document.getElementById('hidden-label__ielts').style.display = 'none';

}