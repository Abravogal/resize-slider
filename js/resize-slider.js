/**
 * LICENCIA...: CC BY-NC-ND 4.0 | Atribucion-NoComercial-SinDerivar 4.0 Inter.
 * PROYECTO...: RESIZE SLIDER.
 * FECHA......: V.2.0.0 | 14/02/2015.
 * AUTOR......: Alfonso | www.abravogal.com
 * _____________________________________________________________________________
 *
 * TITLE......:   PLUGIN RESIZE SLIDER.
 * DESCRIPTION: - Plugin jQuery 2.2.2.
 */

(function ($)
{
  $.fn.resizeSlider = function (options)
  {
/*____________________________________________________________________________

  CONFIGURACION.
  ____________________________________________________________________________*/
    var nav =
        {
          "width"  : function () { return $(window).outerWidth(true);  },
          "height" : function () { return $(window).outerHeight(true); }
        } ;

    var cofg = $.extend(
        {
          "transition" : 750,
          "speed"      : 3500,
          "hover"      : false,
          "aleatorio"  : false,
          "float"      : "left",
          "width"      : "",
          "height"     : ""
        }, options);



/*____________________________________________________________________________

  VARIABLES GLOBALES (Globals Vars)
  ____________________________________________________________________________*/

    var selector  = $(this);
    var galeria   = $(".resizeSlider", generaSlider());
    var next      = '<span class="slidernext notranslate">&#9002;</span>';
    var prev      = '<span class="sliderprev notranslate">&#9001;</span>';
    var umbral    = '<div class="sliderumbral"></div>';
    var secuencia = null;


/*____________________________________________________________________________

  INICIALIZACION (Init)
  ____________________________________________________________________________*/

    generadorBackground();
    generaFlechas();
    detectaHover();
    galeriaOn();


/*____________________________________________________________________________

  EVENTOS (Events).
  ____________________________________________________________________________*/


    $(window).resize(function () { generadorBackground(); });

    $(".slidernext,.sliderprev", selector).on("click", function ()
    {
      var seleccion = $(this).attr("class").split(" ");
      var first     = $(".resizeSlider div:first-child", selector);
      var last      = $(".resizeSlider div:last-child",  selector);

      galeriaOff();

      switch (seleccion[0])
      {
        case "slidernext":
          first.stop().fadeOut(cofg.transition)
                      .next("div").fadeIn(cofg.transition)
                      .end().appendTo(galeria);
          break;
        case "sliderprev":
          first.stop().fadeOut(cofg.transition);
          last.stop().prependTo(galeria).end().fadeIn(cofg.transition);
          break;
      }

      galeriaOn();
    });



/*____________________________________________________________________________

  FUNCIONES (Functions)
  ____________________________________________________________________________*/

    function generaSlider()
    {
      selector.append('<div class="resizeSlider"></div>');
      propiedadesSlider();

      return selector;
    }


    function propiedadesSlider()
    {
      selector.css(
      {
        "position"        : "relative",
        "float"           : cofg.float,
        "clear"           : "both",
        "width"           : (cofg.width  === "") ? nav.width()  : cofg.width,
        "height"          : (cofg.height === "") ? nav.height() : cofg.height,
        "overflow"        : "hidden",
        "backgroundColor" : "rgba(252, 254, 255, 1)"
      });
    }


    function generadorBackground()
    {
      var posicion = (nav.width() > nav.height()) ? "landscape" : "portrait";
      var fondo    = null;
      var div      = null;
      var contador = 0;
      var imagenes = [];

      propiedadesSlider();
      galeria.empty();

      $.each(cofg.image, function (titulo, valor)
      {
        fondo = (posicion === "landscape") ? valor.landscape : valor.portrait;

        div  = '<div style="';
        div += 'background-image:'    + fondo.url      + ';';
        div += 'background-position:' + fondo.position + ';';
        div += 'background-repeat:'   + fondo.repeat   + ';';
        div += 'background-size:'     + fondo.size     + ';';
        div += '"></div>';

        imagenes[contador++] = div;
      });

      if (cofg.aleatorio)
      {
        imagenes = imagenes.sort(function () { return Math.random() - 0.5; });
      }

      galeria.append(imagenes);

      $(".resizeSlider div:gt(0)", selector).fadeOut(0);
      $(".resizeSlider, .resizeSlider div").css(
      {
        "position"        : "absolute",
        "top"             : "0",
        "left"            : "0",
        "width"           : "100%",
        "height"          : "100%",
        "overflow"        : "hidden",
        "backgroundColor" : "rgba(252, 254, 255, 1)"
      });
    }


    function generaFlechas()
    {
      selector.append(next + " " + prev);

      $(".slidernext, .sliderprev").css(
      {
        "position"  : "absolute",
        "zIndex"    : "2",
        "top"       : "44%",
        "padding"   : "2%",
        "cursor"    : "pointer",
        "fontSize"  : "2em",
        "textAlign" : "center",
        "color"     : "rgba(232, 234, 235, 1)"
      });

      $(".slidernext").css({ "right": "0px" });
      $(".sliderprev").css({ "left" : "0px" });
    }


    function galeriaOn()
    {
      secuencia = setInterval(function ()
      {
        $(".resizeSlider div:first-child", selector).fadeOut(cofg.transition)
                                                    .next("div")
                                                    .fadeIn(cofg.transition)
                                                    .end()
                                                    .appendTo(galeria);
      }, cofg.speed);
    }


    function galeriaOff()
    {
      clearInterval(secuencia);
    }


    function detectaHover()
    {
      if (cofg.hover)
      {
        selector.append(umbral);

        $(".sliderumbral", selector).on(
        {
          mouseenter: function () { galeriaOff(); },
          mouseleave: function () { galeriaOn();  }
        });

        $(".sliderumbral").css(
        {
          "position" : "absolute",
          "zIndex"   : "1",
          "top"      : "0",
          "left"     : "30%",
          "width"    : "40%",
          "height"   : "75%"
        });
      }
    }

    return this;
  };

})(jQuery);