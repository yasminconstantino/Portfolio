$(document).ready(function () {
    $('#leftArrow').click(()=>{
        $("#card-10").prop('id', 'aux').css('animation', ' ');
        $("#card-9").prop('id', 'card-10').css('animation', ' ');
        $("#card-8").prop('id', 'card-9').css('animation', ' ');
        $("#card-7").prop('id', 'card-8').css('animation', ' ');
        $("#card-6").prop('id', 'card-7').css('animation', ' ');
        $("#card-5").prop('id', 'card-6').css('animation', ' ');
        $("#card-4").prop('id', 'card-5').css('animation', ' ');
        $("#card-3").prop('id', 'card-4').css('animation', 'go-3 0.5s');
        $("#card-2").prop('id', 'card-3').css('animation', 'two-three 0.5s');;
        $("#card-1").prop('id', 'card-2').css('animation', 'one-two 0.5s');;
        $("#aux").prop('id', 'card-1').css('animation', 'come-one 0.5s');
    });
    $('#rightArrow').click(()=>{
        $("#card-1").prop('id', 'aux').css('animation', 'go-one 0.5s');
        $("#card-2").prop('id', 'card-1').css('animation', 'two-one 0.5s');;
        $("#card-3").prop('id', 'card-2').css('animation', 'three-two 0.5s');;
        $("#card-4").prop('id', 'card-3').css('animation', 'come-3 0.5s');
        $("#card-5").prop('id', 'card-4').css('animation', ' ');
        $("#card-6").prop('id', 'card-5').css('animation', ' ');
        $("#card-7").prop('id', 'card-6').css('animation', ' ');
        $("#card-8").prop('id', 'card-7').css('animation', ' ');
        $("#card-9").prop('id', 'card-8').css('animation', ' ');
        $("#card-10").prop('id', 'card-9').css('animation', ' ');
        $("#aux").prop('id', 'card-10').css('animation', ' ');
    });
});
