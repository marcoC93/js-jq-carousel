//creare un slideshow di immagini ed al cliccare sulla relativa freccia poter scorrere avanti e dietro


$(document).ready(function() {

// Configuri il pulsante next

$('.next').click( function() {
    // ho la necessita di immagazzinare l'immagine attualmente mostrata per poter tenere conto dell'elemento da riprodurre in seguito
    var immagineCorrente = $("img.active") ;
    $(".img-box img").removeClass("active");
    $(immagineCorrente).next().addClass("active");

    
    console.log(immagineCorrente);



})




//Configuro il pulsante previous

$('.previous').click( function() {

})


});
