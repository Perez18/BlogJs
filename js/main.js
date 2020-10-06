$(document).ready(function() {
    console.log("Ready!!");



    if (location.href.indexOf("index") != -1) {


        $('.bxslider').bxSlider({
            auto: true,
            mode: 'fade',
            captions: true,
            slideWidth: 1200,
        });

    }

    if (location.href.indexOf("index") != -1) {

        var post = new Array({

            titulo: "titulo 1",
            date: "Publicado el Dia " + moment().date() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
            content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium ullam tenetur fuga numquam tempore quas pariatur Temporibus excepturi eveniet odio, autem harum cumque placeat veniam"
        }, {

            titulo: "titulo 2",
            date: "Publicado el Dia " + moment().date() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
            content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium ullam tenetur fuga numquam tempore quas pariatur Temporibus excepturi eveniet odio, autem harum cumque placeat veniam"
        }, {

            titulo: "titulo 3",
            date: "Publicado el Dia " + moment().date() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
            content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium ullam tenetur fuga numquam tempore quas pariatur Temporibus excepturi eveniet odio, autem harum cumque placeat veniam"
        }, {

            titulo: "titulo 4",
            date: "Publicado el Dia " + moment().date() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
            content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium ullam tenetur fuga numquam tempore quas pariatur Temporibus excepturi eveniet odio, autem harum cumque placeat veniam"
        }, {

            titulo: "titulo 5",
            date: "Publicado el Dia " + moment().date() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
            content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium ullam tenetur fuga numquam tempore quas pariatur Temporibus excepturi eveniet odio, autem harum cumque placeat veniam"
        });



        post.forEach(function(index) {

            var html = `
         <article class = 'post'>
            <h3>${index.titulo}</h3>
             <span class = "date">${index.date}</span> 
             <p>${index.content}</p>
        <button class = "button-more" > Leer Mas </button> 
        </article > `;

            $("#posts").append(html);


        });
    }




    /**
     * <article class="post">
                        <h3>Titulo </h3>
                        <span class="date">Fecha Publicacion</span>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium ullam tenetur fuga numquam tempore quas pariatur? Temporibus excepturi eveniet odio, autem harum
                            cumque placeat veniam aut cum rerum possimus quo. quibusdam minima. Dolor, tenetur itaque voluptas omnis, reprehenderit velit quo eos, neque sapiente impedit molestiae atque vero nihil! Mollitia, molestias rem.</p>

                        <button class="button-more">Leer Mas</button>
         </article>
     * 
     */


    /***Cambiador de temas */

    var theme = $("#theme");
    $("#to-green").click(function() {

        theme.attr("href", "css/green.css");

    });

    $("#to-red").click(function() {

        theme.attr("href", "css/red.css");

        console.log("Cambiado a rojo");

    });

    $("#to-blue").click(function() {

        theme.attr("href", "css/blue.css");

    });

    /**SCROOL QUE SUBE ARRIBA */
    $("#irarriba").click(function(evento) {

        evento.preventDefault();

        $('html,body').animate({

            scrollTop: 0


        }, 500);

        return false;

    });



    /***lOGIN FALSO */

    $("#login form").submit(function(e) {


        var nombre = $("#nombre").val();


        localStorage.setItem("user", nombre);



    });

    /**GUARDAR EN LOCALSTORAGE*/
    var getnamelocalStorage = localStorage.getItem("user");

    if (getnamelocalStorage != null) {

        $(".about p").html("<strong> Bienvenido " + getnamelocalStorage + "</strong>");

        $("#login").hide();

        $(".about").append("<a id='cerrar' href='#'>Cerrar Session</a>");

        $("#cerrar").click(function() {

            localStorage.clear();

            location.reload();

            $("#login").show();


        });



    }


    /***ACORDEON */
    if (location.href.indexOf("about") != -1) {
        $("#acordeon").accordion();
    }

    /***RElOJ  DINAMICO*/
    if (location.href.indexOf("reloj") != -1) {


        setInterval(function() {
            var reloj = moment().format('h: mm: ss a '); // May 26th 2020, 6:23:04 pm;
            $("#Reloj").html('<p>' + reloj + '</p>');

        }, 1000);


    }

    /** FORMULARIO CONTACTO */

    if (location.href.indexOf("contact") != -1) {

        $("#date").datepicker({
            dateFormat: 'dd-mm-yy'
        });

        $.validate({
            lang: 'es',
            errorMessagePosition: 'top',
            scrollTopOnError: true
        });

    }




});