$(document).ready(function() {
    $('#mainMenu').hide();
    $('#year').hide();
    $('.date').hide();
    $('#mainMenu').slideDown();
    hi = $(window).height();
    wi = $(window).width();



    $('.left').css({
        'width': wi * .425,
        'height': hi * .84,
        'margin-top': hi * .11,
        'margin-left': hi * .05
    });

    $('.right').css({
        'width': wi * .425,
        'height': hi * .84,
        'margin-top': hi * .11,
        'margin-left': (wi / 2)
    });






    $('#one').css({'height': hi + 'px'});
    $('#two').css({'height': hi + 'px'});
    $('#three').css({'height': hi + 'px'});
    $('#four').css({'height': hi + 'px'});
    $('#five').css({'height': hi + 'px'});
    $('#six').css({'height': hi + 'px'});

    $('.wrapper').css({'height': hi + 'px'});

    $('#intro').css({'height': hi});

    var year1 = $("#wrapper1").attr("title");
    var year2 = $("#wrapper2").attr("title");
    var year3 = $("#wrapper3").attr("title");
    var year4 = $("#wrapper4").attr("title");
    var year5 = $("#wrapper5").attr("title");
    var year6 = $("#wrapper6").attr("title");

    $("#date1").click(function() {
        $(window).scrollTo('10%', 800);
    });

    $("#date2").click(function() {
        $(window).scrollTo('20%', 800);
    });
    $("#date3").click(function() {
        $(window).scrollTo('30%', 800);
    });
    $("#date4").click(function() {
        $(window).scrollTo('40%', 800);
    });
    $("#date5").click(function() {
        $(window).scrollTo('50%', 800);
    });
    $("#date6").click(function() {
        $(window).scrollTo('60%', 800);
    });

    $("#date7").click(function() {
        $(window).scrollTo('70%', 800);
    });
    $("#date8").click(function() {
        $(window).scrollTo('80%', 800);
    });
    $("#date9").click(function() {
        $(window).scrollTo('90%', 800);
    });
    $("#date10").click(function() {
        $(window).scrollTo('100%', 800);
    });


    $(window).scroll(function() {
        var st = $(this).scrollTop();
        if ((st / hi) < 1)
        {
            $('#year').hide();
            $('.date').hide();
            $('#year').css({'top': 0 + '%'});

        }
        if ((st / hi) === 1)
        {
            $('#year').show();
            $('.date').show();
            var p = (year1 - 1970) / 43;
            // alert(p*100);
            $('#year').animate({'top': (p * 100) + '%'}, 700);
        }

        else if ((st / hi) === 2)
        {

            var p = (year2 - 1970) / 43;
            //alert(p*100);
            $('#year').animate({'top': (p * 100) + '%'}, 700);
        }

        else if ((st / hi) === 3)
        {
            var p = (year3 - 1970) / 43;
            //alert(p*100);
            $('#year').animate({'top': (p * 100) + '%'}, 700);
        }

        else if ((st / hi) === 4)
        {
            var p = (year4 - 1970) / 43;
            //alert(p*100);
            $('#year').animate({'top': (p * 100) + '%'}, 700);
        }

        else if ((st / hi) === 5)
        {
            var p = (year5 - 1970) / 43;
            //alert(p*100);
            $('#year').animate({'top': (p * 100) + '%'}, 700);
        }

        else if ((st / hi) === 6)
        {
            var p = (year6 - 1970) / 43;
            //alert(p*100);
            $('#year').animate({'top': (p * 100) + '%'}, 700);
        }


    });

    $('#divs').snapscroll();

    skrollr.init({
        forceHeight: true
    });
});