// todo: refactor this
    $( ".string1" ).click(function () {
        $( ".rollup1" ).toggle("fold", {}, 1000);
    });
    $( ".string2" ).click(function () {
        $( ".rollup2" ).toggle("fold", {}, 1000);
    });
    $( ".string3" ).click(function () {
        $( ".rollup3" ).toggle("fold", {}, 1000);
    });


//sortable, alert after sorting
$(document).ready(function() {
    $( "#justSomeHTML" )
        .sortable({
            placeholder: 'tmpPlaceholder',
            forcePlaceholderSize: true,

            helper: function(e, element) {
                return $(element).clone().addClass('tmpHelper');
                },

            update: function(e, ui) {
                $( "#goldenRectangle" )
                    .empty()
                    .append(
                         $('#justSomeHTML')
                            .clone()
                            .children('a')
                            .end()
                        );
                }
            })
        .disableSelection();
});


//sortable, placeholder
$(document).ready(function() {
    $( "#justSomeHTML" )
        .sortable({
            placeholder: 'tmpPlaceholder'
        });
});


// side-to-side slider script

// todo: generalize "#section-9"
$(function(){
    $( ".knob" ).draggable({ containment: "parent" });

    $( ".targetLeft" ).droppable({
        drop: function( event, ui ){
            $( "#section-9" )
                .removeClass ( "onRight" )
                .addClass( "onLeft" );

            $( "#goldenRectangle" )
                .empty()
                .append(
                     $('#justSomeHTML')
                        .clone()
                        .children('a')
                        .end()
                    );
                }
            });

    $( ".targetRight" ).droppable({
        drop: function( event, ui ){
            $( "#section-9" )
                .removeClass ( "onLeft" )
                .addClass( "onRight" );

            $( "#goldenRectangle" )
                .empty()
                .append(
                     $('#justSomeHTML')
                        .clone()
                        .children('a')
                        .end()
                    );
                }
            });
});