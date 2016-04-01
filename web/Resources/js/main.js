jQuery(document).ready(function() {

    var keyEnter = 13;
    var container = $('.container');

    //DEFINED DEFAULT VALUE :
    var name = 'anonym',
        server = 'shell',
        directory = '~ $';


    window.onload = init;
    function init(){
        //Initialization
    }

    //DEFINE COMMAND BLOC
    function defineBlocCommand(){
        var generatedBloc =
            '<div class="bloc">' +
                '<div class="command_block">' +
                    '<div class="user">'+name+'@'+server+'</div>' +
                    '<div class="directory">'+directory+'</div>' +
                    '<div class="command"><input type="text"></div>' +
                '</div>' +
                '<div class="reponse">' +
                '</div>' +
            '</div>';

        return generatedBloc;
    }

    function setNewInput()
    {
        //DEFINE A NEW BLOC COMMAND WITH NAME@SERVER DIRECTORY AND INPUT
        var CommandLineBloc = defineBlocCommand();

        container.append(CommandLineBloc);
        $('input').focus();

    }

    //SUBMIT COMMAND
    function submitCommand()
    {
        //GET INPUT VALUE
        var command = $('input').val();
        //GET PARENT OF THIS INPUT
        var parent = $('input').parent();
        // APPEND VALUE OF COMMAND ON TEXT
        parent.text(command);


        //CALL SCRIPT TO CHECK COMMAND
        //DISPLAY REPONSE

        //DISPLAY A NEW INPUT
        setNewInput();
    }

    //FOCUS ON INPUT
    $('html').click(function(){
        $('input').focus();
    });

    $(document).keypress(function(e) {
        if(e.which == keyEnter) {
            submitCommand();
        }
    });
});