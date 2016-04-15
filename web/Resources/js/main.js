jQuery(document).ready(function() {

    var keyEnter = 13;
    var container = $('.container');
    var connectMessage =
        '<div class="bloc">'+
            '<div class="response">'+
                'Connect ...</br>'+
                'Connected to shellPortolio</br>'+
                '220 Welcome to Damien Moulin website</br>'+
                'Your loged on anonym</br>'+
            '</div>'+
        '</div>';

    //DEFINED DEFAULT VALUE :
    var name = 'anonym',
        server = 'shell',
        directory = ' ~ $ ',
        commandItem = '<input type="text">',
        response ='';


    window.onload = init;
    function init(){
        //Initialization
        //Append Connect Message
        container.append(connectMessage);

        setNewInput();

    }


    //DEFINE COMMAND BLOC
    function defineBlocCommand(){
        var generatedBloc =
            '<div class="bloc">' +
                '<div class="command_block">' +
                    '<div class="user">'+name+'@'+server+'</div>' +
                    '<div class="directory">'+directory+'</div>' +
                    '<div class="command">'+commandItem+'</div>' +
                '</div>' +
                '<div class="response">'+response+'</div>' +
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

    //CHECK IF COMMAND IS TRUE COMMAND
    function checkCommand(command)
    {
        $.ajax({
            url: Routing.generate('shell_command', {'command' : command})
        }).done(function(data) {
            console.log(data);
        });
        return true
    }

    //GENERATE A RESPONSE FOR THE COMMAND
    function generateResponse(command)
    {
        return 'Yes Sir'
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
        if (checkCommand(command)) {
            commandResponse = generateResponse(command)
        }
        else {
            commandResponse = 'undefined';
        }

        //DISPLAY REPONSE
        var oldparent = parent.parent().parent();
        var newResponse = oldparent.children('.response');
        newResponse.text(commandResponse);

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