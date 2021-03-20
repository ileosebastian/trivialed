$(() => {
    
    var textEmail = $('#input-email').val(); //any or ""
    var checkTerms = $('#check-TermsCondit').is(':checked'); // false
    
    $('#input-email').on('keyup', () => {
        textEmail = $('#input-email').val();
        stateButtonConfirm(textEmail, checkTerms);
    });

    $('#check-TermsCondit').on('change', () => {
        checkTerms = $('#check-TermsCondit').is(':checked');
        stateButtonConfirm(textEmail, checkTerms);
    });
    

    function stateButtonConfirm (text, check){
        if (text !== '' && check){
            console.log("agrega la confirmacion")
            $('#btn-login').addClass('confirm-form');
        }else {
            console.log("remueve la confirmacion")
            $('#btn-login').removeClass('confirm-form');
        }
    }

    $('#container-form').on('submit', (event) => {
        event.preventDefault();
        
        let user_ = $('#input-email').val();

        if ( $.trim(user_).length > 0 ){

            $.ajax({
                type: "POST",
                url: '../../backend/php/validate-user.php',
                data: {
                    user_: user_
                },
                cache: false,
                success: function( response ){
                    
                    if( response != 0 && response != -1 ){
                        $('#alert-invalid-user').addClass('div-none');
                        window.location.href = "../home-page/home.html";
                    }else{
                        $('#alert-invalid-user').removeClass('div-none');
                    }
                },
                error: function( error ){
                    alert("algo salio mal");
                    console.log(error);
                }
            });

        }else{
            $('#btn-login').removeClass('confirm-form');
        }

    });

});