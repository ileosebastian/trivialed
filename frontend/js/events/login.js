/* Login */
$(document).ready(() => {
    
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

});
