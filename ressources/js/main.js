//Index.html
$('#control-btn').on('click', function(){
    $('#menu-list').slideToggle();

    if ($('#control-btn').hasClass('close')) {
        $('#control-btn').attr('src', 'ressources/images/flatIcon/menu-cross.svg');
        $('#control-btn').removeClass('close')
        $('#control-btn').addClass('open')
    } else if($('#control-btn').hasClass('open'))  {
        $('#control-btn').attr('src', 'ressources/images/flatIcon/menu-bar.svg');
        $('#control-btn').removeClass('open')
        $('#control-btn').addClass('close')
    }
})


// dropdown profil photo
$('.photoProfil').on('click', function(){
    $('#profil-list').slideToggle();
})


// dropdown Notification
$('.iconNotification').on('click', function(){
    $('#notification-list').slideToggle();
})


// sidebar  

$('.btn-sidebar').click(function(){
    $('.sidebar').animate({width:'toggle'})
})

$('.closeSidebar').click(function(){
    $('.sidebar').animate({width:'toggle'})
})


// battle.html resizer

$(".panel-left").resizable({
    handleSelector: ".splitter",
    resizeHeight: false
});

$(".panel-top").resizable({
    handleSelector: ".splitter-horizontal",
    resizeWidth: false
});


// background function 

function darkBackground(){
    let bgDark = document.getElementById("bg_panel-top");
    bgDark.style.background = "#1d1d1d";
    bgDark.style.color = "#e8e8e8";
}

function lightBackground(){
    let bgDark = document.getElementById("bg_panel-top");
    bgDark.style.background = "#e8e8e8";
    bgDark.style.color = "#3A3A3A";
}
