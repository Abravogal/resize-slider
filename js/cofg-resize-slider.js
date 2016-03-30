/**
 * LICENCIA...: CC BY-NC-ND 4.0 | Atribucion-NoComercial-SinDerivar 4.0 Inter.
 * PROYECTO...: RESIZE SLIDER.
 * FECHA......: V.2.0.0 | 14/02/2015.
 * AUTOR......: Alfonso | www.abravogal.com
 * _____________________________________________________________________________
 *
 * TITULO.....:   CONFIGURACION DE RESIZE SLIDER.
 * DESCRIPCION: - Parametros de configuracion.
 *
 *                  "transition" : tiempo del efecto en milisegundos.
 *
 *                  "speed"      : tiempo de exposicion de la imagen en milisegundos.
 *
 *                  "hover"      : TRUE | FALSE - Destiene el pasador al
 *                                 posicionarse en la zona central con el puntero
 *                                 del raton.
 *
 *                  "aleatorio"  : TRUE | FALSE - Muesta las imagenes de forma aleatoria.
 *
 *                  "float"      : LETF | NONE | RIGHT - Posicion del slider.
 *
 *                  "width"      : % | px - Anchura del slider.
 *
 *                  "height"     : % | px - Altura del slider.
 * _____________________________________________________________________________
 *
 * TITLE.......:   Resize Slider Config File.
 * DESCRIPTION.: - Params
 *
 *                   "transition" : FX time (milliseconds).
 *
 *                   "speed"      : time to show any picture (milliseconds).
 *
 *                   "hover"      : TRUE | FALSE - If is true, you can stop the
 *                                  slider If you leave the pointer in the center
 *                                  of the image.
 *
 *                   "aleatorio"  : TRUE | FALSE - If is true, show pictures randomly.
 *
 *                   "float"      : LETF | NONE | RIGHT - Slider's position.
 *
 *                   "width"      : % | px - Slider's width.
 *
 *                   "height"     : % | px - Slider's height.
 */

$(document).ready(function ()
{

  $("#resizeSlider").resizeSlider(
  {
//    "transition" : 750,
//    "speed"      : 3750,
//    "hover"      : false,
//    "aleatorio"  : false,
//    "float"      : "right",
//    "width"      : "500px",
//    "height"     : "500px",
    "image":
    {
      "presentacion":
      {
        "landscape":
        {
          "url"      : "url(img/frog.jpg)",
          "size"     : "cover",
          "repeat"   : "no-repeat",
          "position" : "center top"
        },
        "portrait":
        {
          "url"      : "url(img/frog.jpg)",
          "size"     : "cover",
          "repeat"   : "no-repeat",
          "position" : "right center"
        }
      },

      "presentacion 1":
      {
        "landscape":
        {
          "url"      : "url(img/frog-1.jpg)",
          "size"     : "cover",
          "repeat"   : "no-repeat",
          "position" : "center bottom"
        },
        "portrait":
        {
          "url"      : "url(img/frog-1.jpg)",
          "size"     : "cover",
          "repeat"   : "no-repeat",
          "position" : "left center"
        }
      },

      "presentacion 2":
      {
        "landscape":
        {
          "url"      : "url(img/frog-2.jpg)",
          "size"     : "cover",
          "repeat"   : "no-repeat",
          "position" : "center bottom"
        },
        "portrait":
        {
          "url"      : "url(img/frog-2.jpg)",
          "size"     : "cover",
          "repeat"   : "no-repeat",
          "position" : "right top"
        }
      },

      "presentacion 3":
      {
        "landscape":
        {
          "url"      : "url(img/frog-3.jpg)",
          "size"     : "cover",
          "repeat"   : "no-repeat",
          "position" : "center center"
        },
        "portrait":
        {
          "url"      : "url(img/frog-3.jpg)",
          "size"     : "cover",
          "repeat"   : "no-repeat",
          "position" : "left center"
        }
      },

      "presentacion 4":
      {
        "landscape":
        {
          "url"      : "url(img/frog-4.jpg)",
          "size"     : "cover",
          "repeat"   : "no-repeat",
          "position" : "center top"
        },
        "portrait":
        {
          "url"      : "url(img/frog-4.jpg)",
          "size"     : "cover",
          "repeat"   : "no-repeat",
          "position" : "center center"
        }
      }
    }
  });
});