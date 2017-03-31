$('#navi_list li a').on('click', function() {

    var item = $(this).attr('href'),
        iditem = item.substring(1, item.length);
        scrollPoint = $('section[id="' + iditem + '"]').offset().top+1;

    $('body,html').animate({
        scrollTop: scrollPoint
    }, 1200);

    return false;
})

$(window).scroll(function() {
    var wscroll = $(window).scrollTop();
    $('body section').each(function(i) {
        if ($(this).position().top <= wscroll) {
            $('#navi_list li.active').removeClass('active');
            $('#navi_list li').eq(i).addClass('active');
        }
    });
}).scroll();

$('.navbar-brand').on('click', function() {

    scrollPoint = $('section[id="start"]').offset().top;

    $('body,html').animate({
        scrollTop: scrollPoint
    }, 1500);

    return false;
})

$('.caption p a').on('click', function() {
    scrollPoint = $('p[id="scrab"]').offset().top;

    $('body,html').animate({
        scrollTop: scrollPoint
    }, 1200);

    return false;
})

new WOW().init();

$('#sub').on('click', function() {
    return validation();
})


function validation()
{
    var errors=0;

    //Name and surname
    if (document.getElementById("surname").value == "")
    {
        errors++;
        $('#surname').nextAll().remove();
        var ns = document.getElementById("surname");
        $("<p class='alert-warning'>Name is required!</p>").insertAfter(ns);

    }
    else if (document.getElementById("surname").value.length < 2)
    {
        errors++;
        $('#surname').nextAll().remove();
        var ns = document.getElementById("surname");
        $("<p class='alert-warning'>Name is too short!</p>").insertAfter(ns);
    }
    else if (document.getElementById("surname").value.length > 50)
    {
        errors++;
        $('#surname').nextAll().remove();
        var ns = document.getElementById("surname");
        $("<p class='alert-warning'>Name is too long!</p>").insertAfter(ns);
    }
    else{
        $('#surname').nextAll().remove();
    }

    //Email
    filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,5})+$/;
    if (!filter.test(document.getElementById("email").value)) {
        errors++;
        $('#email').nextAll().remove();
        var ns = document.getElementById("email");
        $("<p class='alert-warning'>Email is wrong!</p>").insertAfter(ns);
    }
    else{
        $('#email').nextAll().remove();
    }

    //subject
    if (document.getElementById("subject").value == "")
    {
        errors++;
        $('#subject').nextAll().remove();
        var ns = document.getElementById("subject");
        $("<p class='alert-warning'>Subject is required!</p>").insertAfter(ns);
    }
    else if (document.getElementById("subject").value.length < 2)
    {
        errors++;
        $('#subject').nextAll().remove();
        var ns = document.getElementById("subject");
        $("<p class='alert-warning'>Subject is too short!</p>").insertAfter(ns);
    }
    else if (document.getElementById("subject").value.length > 50)
    {
        errors++;
        $('#subject').nextAll().remove();
        var ns = document.getElementById("subject");
        $("<p class='alert-warning'>Subject is too long!</p>").insertAfter(ns);
    }
    else{
        $('#subject').nextAll().remove();
    }

    //Content
    if (document.getElementById("content").value == "")
    {
        errors++;
        $('#content').nextAll().remove();
        var ns = document.getElementById("content");
        $("<p class='alert-warning'>Content is required!</p>").insertAfter(ns);
    }
    else if (document.getElementById("content").value.length < 5)
    {
        errors++;
        $('#content').nextAll().remove();
        var ns = document.getElementById("content");
        $("<p class='alert-warning'>Content is too short!</p>").insertAfter(ns);
    }
    else if (document.getElementById("content").value.length > 10000)
    {
        errors++;
        $('#content').nextAll().remove();
        var ns = document.getElementById("content");
        $("<p class='alert-warning'>Content is too long!</p>").insertAfter(ns);
    }
    else{
        $('#content').nextAll().remove();
    }

    if (errors != 0){
        return false;
    }
    else{
        $("#sub").addClass("wow rollOut animated");
        $("#sub").attr("style","visibility: visible; animation-name: rollOut;");
        $("#sub").attr("style","display: none");
        var surname = $('#surname').val();
        var email = $('#email').val();
        var subject = $('#subject').val();
        var content = $('#content').val();
        $.ajax({
            type: "GET",
            url: "./mailto.php",
            data: {surname: surname, email: email, subject: subject, content:content},
            cache: false,
            success: function(html){
                $('.score').html(html);
            }
        });
        return true;
    }
}
