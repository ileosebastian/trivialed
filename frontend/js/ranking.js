$(() => {

    var actions = [
        "searchGamersFacu",
        "searchGamersCarr",
        "searchGamersAsig",
        ""];

    var index = 3;

    $('.btn-facultad').on('click', function(event) {
        event.stopPropagation();
        index = parseInt($(this).data('action'), 10);

        alert(actions[index]);

        $('.ico-search').addClass('div-none');
        $('.container-check-ranking input[type="checkbox"]').prop("checked",false);

        $('#browser-rank').removeClass("browser-carrera browser-asignatura").addClass('browser-facultad');
        $('#browser-rank').attr("placeholder", "Buscar por facultad");
        $('#ico-facu').removeClass('div-none');   
        
        $('.container-check-ranking').removeClass('div-none');
        $('#check-ranking-my').next().text("Mi facultad").css("color","#3F724B");
        $('#check-ranking-all').next().text("Todas las facultades").css("color","#3F724B");

    });

    $('.btn-carrera').on('click', function(event) {
        event.stopPropagation();
        index = parseInt($(this).data('action'), 10);

        alert(actions[index]);

        $('.ico-search').addClass('div-none');
        $('.container-check-ranking input[type="checkbox"]').prop("checked",false);

        $('#browser-rank').removeClass("browser-facultad browser-asignatura").addClass('browser-carrera');
        $('#browser-rank').attr("placeholder", "Buscar por carrera");
        $('#ico-carr').removeClass('div-none'); 

        $('.container-check-ranking').removeClass('div-none');
        $('#check-ranking-my').next().text("Mi carrera").css("color","#3A6099");
        $('#check-ranking-all').next().text("Todas las carreras").css("color","#3A6099");

    });

    $('.btn-asignatura').on('click', function(event) {
        event.stopPropagation();
        index = parseInt($(this).data('action'), 10);

        alert(actions[index]);

        $('.ico-search').addClass('div-none');

        $('#browser-rank').removeClass("browser-facultad browser-carrera").addClass('browser-asignatura');
        $('#browser-rank').attr("placeholder", "Buscar por asginatura");
        $('#ico-asig').removeClass('div-none'); 

        $('.container-check-ranking').addClass('div-none');

    });

    $('.container-check-ranking').on('change', 'input[type="checkbox"]', function() {
        
        if( $(this).is(':checked') && $(this).is('#check-ranking-my') ){
            $('#check-ranking-all').prop("checked",false);
        }

        if( $(this).is(':checked') && $(this).is('#check-ranking-all') ){
            $('#check-ranking-my').prop("checked",false);
        }
    });

    $('.container-check-ranking input[type="checkbox"]').trigger('change');


    function createCards(action){

        $.ajax({
            type: "POST",
            url: "../../backend/php/cards-query.php",
            data: {
                action_: action
            },
            breforeSend: function () {

            },
            success: function (response) {
                let canvas = $('.canvas-card');

            }

        });
        
    }
});