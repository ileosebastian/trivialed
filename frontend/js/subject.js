$(function() {

    
    $('#message-fing-subjects').removeClass('div-none');

    var  n_semesters;

    var subjects = {};

    $(document).on('mouseenter', '.btn-level', function() {
        $(this).css("cursor", "pointer");
        $(this).addClass('level-hover');
        $(this).find('p').css("color", "white");
        
        
        
    });

    $(document).on('mouseleave', '.btn-level', function() {

        if ( !$(this).is('switch-hover-level')  ){
            $(this).removeClass('level-hover');
            $(this).find('p').css("color", "#EC9E2A");
        }

    });

    $.ajax({
        type: 'POST',
        url: '../../../backend/php/number-query.php',
        
        success: function( response ) {

            n_semesters = parseInt( response, 10 );

            let canvas = $('.nav-levels');
            let dataLevel=`<h1>Not found</h1>`;

            for(let i = 1; i <= n_semesters; i++){

                dataLevel = 
                    `<div class="col-lg-1-nav-subjects center-div">
                        <button class="btn-level" data-level="${i}">
                            <p>${i}</p>
                        </button>
                    </div>`;

                canvas.append(dataLevel);
            }
            

            $('#message-fing-subjects').removeClass('div-none');
        },

        error: function( error ){
            alert("algo salio mal");
            console.log(error);
        }
    });

    $(document).on('click', '.btn-level', function(event) {
        // event.stopPropagation();
        var level = parseInt( $(this).data('level'), 10);

        
        
        $('.btn-level').removeClass('level-hover switch-hover-level');
        $('.btn-level').find('p').removeClass('switch-hover-level-txt');

        $(this).toggleClass('switch-hover-level');
        $(this).find('p').toggleClass('switch-hover-level-txt');
        // if( !$(this).is('switch-hover-level') ){
        //     alert("debe poner color");
        //     $(this).find('p').css("color", "white");
        // }
        
        
        $('#subjects').empty();

        getSubects(level); //To create cards subjects
    });

    $(document).trigger('click');

    function getSubects(level){
        // alert("entra a la funcion");

        const action = "searchSubjects";

        $.ajax({
            type: 'POST',
            url: '../../../backend/php/cards-query.php',
            data: {
                action_: action,
                level_: level
            },
            cache: false,
            success: function( response ) {
                // alert(response);
                let infoCards = JSON.parse( response );
                let dataContent = `<h1>Not found</h1>`;

                let canvas = $('#subjects');
                canvas.empty();

                if ( response != 0 ){

                    subjects = {};

                    for(let content of infoCards){

                        subjects[content.SEMESTRE_A] = content.NOMBRE_A;

                        dataContent = 
                        `
                        <div class="col-lg-4 center-div">
                            
                            <div class="subject">
                                <img src="../../img/Subjects-image.jpg" alt="Subject-">
                                <div class="subject-level">
                                    <p>Nivel ${content.SEMESTRE_A}</p>
                                </div>
                                <p id="subject-name">${content.NOMBRE_A}</p>
                            </div>
                            
                        </div>
                        `;

                        canvas.append(dataContent);

                    }
                }else{
                    alert("Error al parsear los datos");
                }
            },
            error: function( error ){
                alert("algo salio mal al consultar las asignaturas");
                console.log(error);
            }
        });
    }

    $(document).on('click', '.subject', function() {
        
        localStorage.setItem( "choosedSubject", JSON.stringify( subjects ) );

        window.location.href = "./question.html";

    });
});