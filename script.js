//creare un slideshow di immagini ed al cliccare sulla relativa freccia poter scorrere avanti e dietro


$(document).ready(function() {

// Configuri il pulsante next

$('.next').click( function() {
    // ho la necessita di immagazzinare l'immagine attualmente mostrata per poter tenere conto dell'elemento da riprodurre in seguito
    var immagineCorrente = $("img.active") ;

    // Questo if é necessario per stabilire se l'elemento riprodotto ;e l'ultimo della lista
    if (immagineCorrente.length) {
        $(".img-box img").removeClass("active");
        $(immagineCorrente).next().addClass("active");
    } else {
        $("img:first-child").addClass("active");
        
    }



    console.log(immagineCorrente.length);



})




//Configuro il pulsante previous

$('.previous').click( function() {

})


});
