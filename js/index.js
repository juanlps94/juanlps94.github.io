$(document).ready(function() {
//Variables
let eng = {
    "about": "About me",
    "work": "My works",
    "lang": "Languages",
    "contact": "Contact",
    "button": ["English", "Spanish"],
    "copy": "This page has made by Juan Luis Perez Siso &copy;",
    "langDevs": [
        { "HTML": "70%", },
        { "CSS3": "65%", },
        { "JAVASCRIPT": "75%" },
        { "PHP": "50%" },
        { "C#": "40%" }
    ]


}, profile = {
    "name": "Hey i am Juan Luis",
    "dev": "a web developer",
    "link": "If u want to know more about me visit my profile here",
    "p-header": "Here any some projects made by me",
    "ability": "Competency"
}, span = {
    "about": "Sobre mi",
    "work": "Mis trabajos",
    "lang": "Lenguajes",
    "contact": "Contactame",
    "copy": "Esta pagina fue hecha por Juan Luis Pérez Siso &copy;",
    "button": ["Ingles", "Español"]

}, perfil = {
    "name": "Hola, soy Juan Luis",
    "dev": "Programador web",
    "link": "Si quieres conocer más acerca de mi visita mi perfil",
    "p-header": "A continuacion algunos proyectos hechos por mi.",
    "ability": "Capacidades"
};

let cad = String(document.URL),
    urleng = 'https://juanlps94.github.io/',
    urlesp = 'https://juanlps94.github.io/index_es.html';

let dataProfile = $(".navbar")[0].children,
    dataProjects = $("#project-grid")[0],
    dataDev = $(".apt-info")[0],
    iconsMenu = $('.icons-menu'),
    dataLinks = $("#profile-link div")[0],
    val = eng.langDevs, 
    ibar = 0;

//FIN VARIABLES
iconsMenu.html('<i class="fa fa-language"></i><i class="fa fa-bars"></i>');

/**INICIO DEL IF**/
if (cad === urleng) {  /**MIS DATOS EN EN INGLES (ESTA PAGINA ESTÁ POR DEFAULT)**/  
    for (let item of dataProfile) {
        if (eng.hasOwnProperty(item.id)){
            item.textContent = eng[item.id];
        }
    }
    $('#Eng')[0].textContent = eng.button[0];
    $('#Esp')[0].textContent = eng.button[1];
    $('#name')[0].textContent = profile.name;
    $('#dev')[0].textContent = profile.dev;
    $('#link')[0].textContent = profile.link;
    $('.p-header')[0].textContent = profile["p-header"];

    for (let item of datos){
        dataProjects.innerHTML += `
        <div class="project">
        <a href="${item.url}"><img src="${item.img}" alt="${item.alt}" class="project-image">
        <p>${item.parag}</p>
        </a></div>`
    }
    $('#competency')[0].textContent = profile.ability;
    $(".content-footer")[0].innerHTML =
        `<p class="no-margin" id="copy">${eng.copy}</p>`

    /**FIN DE MIS DATOS EN EN INGLES **/

} else if (cad === urlesp) {/**LLENAR PAGINA EN ESPAÑOL SI SE PRESIONA EL BOTON DE ESPAÑOL**/
    /**MIS DATOS EN ESPAÑOL**/
  for (let item of dataProfile) {
        if (span.hasOwnProperty(item.id)) {
            item.textContent = span[item.id];
        }
    }
    $('#Eng')[0].textContent = span.button[0];
    $('#Esp')[0].textContent = span.button[1];
    $('#name')[0].textContent = perfil.name;
    $('#dev')[0].textContent = perfil.dev;
    $('#link')[0].textContent = perfil.link;
    $('.p-header')[0].textContent = perfil["p-header"];

    for (let item of datosEsp) {
        dataProjects.innerHTML += `
        <div class="project">
        <a href="${item.url}"><img src="${item.img}" alt="${item.alt}" class="project-image">
        <p>${item.parag}</p>
        </a></div>`
    }
   $('#competency')[0].textContent = perfil.ability;
   document.getElementsByClassName("content-footer")[0].innerHTML =
       `<p class="no-margin" id="copy">${span.copy}</p>`

   /**FIN MIS DATOS EN ESPAÑOL**/
} 
/**FIN DEL IF-ELSE**/


/** LLENAR COMPETENCIAS EN LENGUAJES Y SU % RESPECTIVO**/
for (let item of eng.langDevs) {
    dataDev.innerHTML += `
        <li>
            <h3 class="no-margin">${Object.keys(item)}</h3>
            <span class="percent-bar"></span><span class="percent">${Object.values(item)}</span>
        </li>`
}

for (let item of document.getElementsByClassName("percent-bar")) {
    item.setAttribute("style", `width:${Object.values(val[ibar])}`);
    ibar++
}
 
for (let item of datosContact) {
    dataLinks.innerHTML += `
    <div class="contac">
    <a href="${item.link}" target="_blank">
     <i class="${item.img}"></i>
     <p>${item.parag}</p>
     </a></div>`
}
/** FINAL COMPETENCIAS EN LENGUAJES Y SU % RESPECTIVO**/

/** FUNCIONES**/
$('.fa-language').on('click', function(){
    if ($('.langs').css('display') === 'none') {
        $('.langs').slideDown()
        $('.langs').css('display','flex')
        $('.navbar').slideUp()
    } else if ($('.langs').css('display') === 'flex') {
        $('.langs').slideUp()
    }
});
$('.fa-bars').on('click', function() {
    if ($('.navbar').css('display') === 'none') {
        $('.navbar').slideDown()
        $('.navbar').css('display','flex')
        $('.langs').slideUp()
    } else if ($('.navbar').css('display') === 'flex') {
        $('.navbar').slideUp()
    }
});

$('.navbar a').on('click', function(){
    if(window.innerWidth<768){
        $('.navbar').slideUp()
    }
})


window.onresize = function(){
    console.log(screen.width)
    if(screen.width>768){
        $('.navbar').css('display','flex');
        $('.langs').css('display','flex');
    }
}

});
/** FIN DE FUNCIONES**/
