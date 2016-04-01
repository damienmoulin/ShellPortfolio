jQuery(document).ready(function() {

    window.onload = init;
    function init(){
        //Initialization
    }

    //FOCUS ON INPUT
    $('html').click(function(){
        console.log('click');
        $('input').focus();
    });

    
});