/*==============Input range=================*/
$('.price_range').on('input', function () {
    var val = ($(this).val() - $(this).attr('min')) / ($(this).attr('max') - $(this).attr('min'));

    $(this).css('background-image',
        '-webkit-gradient(linear, left top, right top, '
        + 'color-stop(' + val + ', #2EB12E), '
        + 'color-stop(' + val + ', #CBCBCB)'
        + ')'
    );
})
$(document).ready(function () {
    $('.price_range').on('input', function () {

        var pr = $(this).parents('.input_range-block');
        var ball = pr.find('.price_range').val();
        var this_price = pr.find('.price .price_num');
        this_price.text(ball);
    })
})

$(document).ready(function () {
    $('.price_range').on('input', function () {

        var a = $('#price_range_1');
        var b = $(".inp");
        b.val(a.val());
    })
    $('.inp').on('input', function () {

        var a = $('#price_range_1');
        var b = $(".inp");
        a.val(b.val());
    })
})


/*===================Menu=================*/

function openNav() {
    $("#mySidenav").css({ "height": '100%' });
}

function closeNav() {
    $("#mySidenav").css({ "height": "0px" });
}

var menu = document.getElementById("mySidenav");

window.onscroll = function () { myFunction() };

function myFunction() {
    if (document.body.scrollTop > 130 || document.documentElement.scrollTop > 130) {
        menu.classList.remove("scroll_active");
    } else {
        menu.classList.add("scroll_active");
    }
}

/*=========Modal========*/
// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementsByClassName('modal-ipotek');

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
for (var i = 0; i < btn.length; i++) {
    btn[i].addEventListener('click', function () {
        modal.style.display = "block";
    })
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {

    modal.style.display = 'none';

}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


// / for documents collaps
$(function () {
    var Accordion = function (el, multiple) {
        this.el = el || {};
        this.multiple = multiple || false;

        // Variables privadas
        var links = this.el.find('.link');
        // Evento
        links.on('click', { el: this.el, multiple: this.multiple }, this.dropdown)
    }

    Accordion.prototype.dropdown = function (e) {
        var $el = e.data.el;
        $this = $(this),
            $next = $this.next();

        $next.slideToggle();
        $this.parent().toggleClass('open');

        if (!e.data.multiple) {
            $el.find('.submenu').not($next).slideUp().parent().removeClass('open');
        };
    }

    var accordion = new Accordion($('#accordion'), false);
});