// script.js
// Se asegura de que el DOM esté completamente cargado antes de ejecutar el script
document.addEventListener('DOMContentLoaded', () => {
    // Información de contacto que se va a mostrar en el div con id "contact-info"
    const contactInfo = {
        nombre: "Alexis Bernal",
        profesion: "Analista programador",
        correo: "alexis.bernal@inacapmail.cl",
        telefono: "954571594",
        resumen: "Estudiante en proceso"
    };
    // Selecciona el div con id "contact-info" y lo actualiza con la información de contacto
    const contactInfoDiv = document.getElementById('contact-info');
    contactInfoDiv.innerHTML = `
        <p><strong>Nombre y apellido:</strong> ${contactInfo.nombre}</p>
        <p><strong>Profesión:</strong> ${contactInfo.profesion}</p>
        <p><strong>Correo:</strong> <a href="mailto:${contactInfo.correo}">${contactInfo.correo}</a></p>
        <p><strong>Número telefónico:</strong> ${contactInfo.telefono}</p>
        <p><strong>Resumen Laboral:</strong> ${contactInfo.resumen}</p>
    `;

    // Slider funcionalidad
    let slideIndex = 0;
    const slides = document.querySelectorAll('.slide');
    // Función para mostrar las diapositivas
    function showSlides() {
        slides.forEach(slide => slide.classList.remove('active'));
        slideIndex++;
        if (slideIndex > slides.length) slideIndex = 1;
        slides[slideIndex - 1].classList.add('active'); // Muestra la diapositiva actual
        setTimeout(showSlides, 3000); // Cambia la imagen cada 3 segundos
    }

    showSlides();

    // Listado de aplicaciones informáticas que se va a mostrar
    const aplicaciones = [
        "Microsoft Office (Word, Excel, PowerPoint)",
        "Google Workspace (Docs, Sheets, Slides)",
        "Visual Studio Code",
        "Sublime Text",
        "Atom",
        "Adobe Photoshop",
        "Adobe Illustrator",
        "Adobe XD",
        "Sketch",
        "Figma"
    ];

    // Obtener el elemento de la lista de aplicaciones
    const appList = document.getElementById('app-list');

    // Agrega cada aplicación a la lista en el HTML
    aplicaciones.forEach(aplicacion => {
        const listItem = document.createElement('li');
        listItem.classList.add('list-item');
        listItem.textContent = aplicacion;
        appList.appendChild(listItem);
    });
});
// Función para abrir una nueva pestaña con la URL especificada
function abrirSitio(url) {
    window.open(url, '_blank');
}

let currentIndex = 0;

function slide(index) {
    const slides = document.querySelectorAll('.carousel-item');
    const totalSlides = slides.length;

    if (index >= totalSlides) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = totalSlides - 1;
    } else {
        currentIndex = index;
    }

    const offset = -currentIndex * 100;
    document.querySelector('.carousel-inner').style.transform = `translateX(${offset}%)`;
}

// Función para mostrar la siguiente diapositiva en el carrusel
function siguiente() {
    slide(currentIndex + 1);
}
// Función para mostrar la diapositiva anterior en el carrusel
function previo() {
    slide(currentIndex - 1);
}

// validar rut

var Fn = {
    // Valida el rut con su cadena completa "XXXXXXXX-X"
    validaRut: function (rutCompleto) {
        if (!/^[0-9]+[-|‐]{1}[0-9kK]{1}$/.test(rutCompleto))
            return false;
        var tmp = rutCompleto.split('-');
        var digv = tmp[1];
        var rut = tmp[0];
        if (digv == 'K') digv = 'k';
        return (Fn.dv(rut) == digv);
    },
    dv: function (T) {
        var M = 0, S = 1;
        for (; T; T = Math.floor(T / 10))
            S = (S + T % 10 * (9 - M++ % 6)) % 11;
        return S ? S - 1 : 'k';
    }
}
//Permite al usuario ingresar un RUT y presionar un botón para verificar su validez, mostrando el resultado mediante una alerta.
const inputRut = document.querySelector('input')
const buttonRut = document.querySelector('#buttonRut')

buttonRut.addEventListener('click', () => {
    Fn.validaRut(inputRut.value) ? alert('Valido') : alert('Invalido')
})
