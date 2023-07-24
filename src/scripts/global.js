// let detalhar = document.querySelectorAll('.open .trigger')

// detalhar.forEach((trigger) =>{
//     trigger.addEventListener('click', (e) =>{
//         let acord = trigger.parentElement
//         let idopen = acord.classList.contains('open')

//         if(idopen){
//             acord.classList.remove('open')
//         }else{
//             acord.classList.add('open')
//         }
//     } )
// })

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        /* Toggle between adding and removing the "active" class,
        to highlight the button that controls the panel */
        this.classList.toggle("active");

        /* Toggle between hiding and showing the active panel */
        var panel = this.nextElementSibling;
        if (panel.style.display === "none") {
            panel.style.display = "block";
        } else {
            panel.style.display = "none";
            panel.style.display = "none"
            
        }
    });
}