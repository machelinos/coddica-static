<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = trim($_POST["nombre"]);
    $email = trim($_POST["email"]);
    $message = trim($_POST["mensaje"]);

    if ($name == "" OR $email == "" OR $message == "") {
        $hasError="true";
        $errorCompletar="true";
    }

    foreach( $_POST as $value ){
        if( stripos($value,'Content-Type:') !== FALSE ){
            $hasError="true";
            $errorInformacion="true";
        }
    }

    if ($_POST["address"] != "") {
        $hasError="true";
        $errorSubmit="true";
    }

    require_once("lib/phpmailer/class.phpmailer.php");
    $mail = new PHPMailer();
/*
    $mail->IsSMTP();
    //Enable SMTP debugging
    // 0 = off (for production use)
    // 1 = client messages
    // 2 = client and server messages
    $mail->SMTPDebug = 2;
    //Ask for HTML-friendly debug output
    $mail->Debugoutput = 'html';
    //Set the hostname of the mail server
    $mail->Host = "smtp.postmarkapp.com";
    //Set the SMTP port number - likely to be 25, 465 or 587
    $mail->Port = 2525;
    //Username to use for SMTP authentication
    $mail->Username = "cf768285-192c-4667-b91f-b8f9ea3f777b";
    //Password to use for SMTP authentication
    $mail->Password = "cf768285-192c-4667-b91f-b8f9ea3f777b";
*/

    if (!$mail->ValidateAddress($email)){
        $hasError="true";
        $errorValidMail="true";
    }

    if(!$hasError=="true"){
        $email_body = "";
        $email_body = $email_body . "Nombre: " . $name . "<br>";
        $email_body = $email_body . "Email: " . $email . "<br>";
        $email_body = $email_body . "Mensaje: " . $message;

        $mail->SetFrom($email, $name);
        $address = "marcel.cabrera@gmail.com";
        $mail->AddAddress($address, "coddica.mx");
        $mail->Subject = "Forma de contacto de coddica.mx | " . $name;
        $mail->MsgHTML($email_body);

        if(!$mail->Send()) {
          $emailSent="false";
        }else{
            $emailSent="true";
        }
    }
}
?>
<!DOCTYPE html>
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7" lang ="es" xmlns:fb="http://ogp.me/ns/fb#"> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8" lang="es" xmlns:fb="http://ogp.me/ns/fb#"> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9" lang="es" xmlns:fb="http://ogp.me/ns/fb#"> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js" lang="es" xmlns:fb="http://ogp.me/ns/fb#"> <!--<![endif]-->
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
        <title>C&oacute;ddica. Dise&ntilde;o + C&oacute;digo</title>
        <meta name="description" content="Somos un estudio de dise&ntilde;o y programaci&oacute;n web en Monterrey, M&eacute;xico">
        <meta name="author" content="C&oacute;ddica">
        <meta name="Copyright" content="&copy; C&oacute;ddica 2013. Todos los derechos reservados.">

        <!-- Mobile -->
        <meta name="HandheldFriendly" content="True">
        <meta name="MobileOptimized" content="320">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="cleartype" content="on">

        <link rel="stylesheet" href="css/estilos.css">

        <script src="js/modernizr-2.6.2.min.js"></script>

        <link rel="apple-touch-icon-precomposed" sizes="144x144" href="img/touch/apple-touch-icon-144x144-precomposed.png">
        <link rel="apple-touch-icon-precomposed" sizes="114x114" href="img/touch/apple-touch-icon-114x114-precomposed.png">
        <link rel="apple-touch-icon-precomposed" sizes="72x72" href="img/touch/apple-touch-icon-72x72-precomposed.png">
        <link rel="apple-touch-icon-precomposed" href="img/touch/apple-touch-icon-57x57-precomposed.png">
        <link rel="shortcut icon" href="img/touch/apple-touch-icon.png">

        <meta name="msapplication-TileImage" content="img/touch/apple-touch-icon-144x144-precomposed.png">
        <meta name="msapplication-TileColor" content="#222222">

        <link rel="shortcut icon" href="img/favicon.ico">
    </head>
    <body id="skrollr-body">
        <!--[if lt IE 7]>
            <p class="chromeframe">Est&aacute;s usando un navegador <strong>obsoleto</strong> browser. Puedes <a href="http://browsehappy.com/">actualizar tu navegador</a> o <a href="http://www.google.com/chromeframe/?redirect=true">activar Google Chrome Frame</a> para mejorar tu experiencia.</p>
        <![endif]-->

        <header role="banner" class="clearfix">
            <h1 class="contenedor">
                <a href="./" title="Ir a Inicio de C&oacute;ddica">
                    <img src="img/logo.svg" alt="Logotipo de C&oacute;ddica">
                </a>
            </h1>
            <div class="menu-button">
                <span aria-hidden="true" data-icon="&#xe007;" class="abrir-menu"></span>
                <span class="screen-reader-text abrir-menu">MEN&Uacute;</span>
                <span aria-hidden="true" data-icon="&#xe001;" class="cerrar-menu"></span>
                <span class="screen-reader-text cerrar-menu">CERRAR</span>
            </div>
            <div class="buscar-boton">
                <span aria-hidden="true" data-icon="&#xe002;"></span>
                <span class="screen-reader-text">BUSCAR</span>
            </div>
        </header>

        <div class="contenedor-general nav-busqueda clearfix">
            <nav role="navigation" class="clearfix">
                <ul class="flexnav clearfix" data-breakpoint="768">
                    <li class="active"><a href="./">INICIO</a></li>
                    <li><a href="proyectos/">PROYECTOS</a></li>
                    <li><a href="proceso/">PROCESO</a></li>
                    <!--
                    <li><a href="nosotros/">NOSOTROS</a></li>
                    -->
                    <li><a href="contacto/">CONTACTO</a></li>
                </ul>
            </nav>

            <div class="busqueda">
                    <form class="contenedor">
                        <input type="text" name="buscar" id="buscar">
                        <input type="submit" value="Buscar">
                    </form>
            </div>
            <!-- final .busqueda -->

        </div>

        <section class="intro contenedor clearfix">
            <h1>
                Somos un estudio de <br><span class="intro-em">dise&ntilde;o web</span> y <span class="intro-em">programaci&oacute;n</span> <span class="location">en Monterrey, M&eacute;xico</span>
            </h1>
            <img src="img/dispositivos-responsivo.svg" alt="Dise&ntilde;o y programaci&oacute;n responsivo, correctamente visible en cualquier dispositivo y tamaño de pantalla">
            <p class="conectamos">Conectamos tu marca con tu audiencia a trav&eacute;s de experiencias de usuario intuitivas, atractivas y memorables.</p>

            <p class="llamada-accion">
                &iquest;Tienes un proyecto web por realizar&quest;<br>
                <strong class="ribbon-wrapp"><a class="ribbon" href="#">Cont&aacute;ctanos</a></strong>

            </p>
        </section>
        <!-- intro -->

        <section class="proyectos-recientes resaltar">
            <div class="contenedor">
                <h1>proyectos recientes</h1>
                <div class="flexslider">
                    <ul class="slides">
                        <li>
                            <article class="proyecto">
                                <span data-picture data-alt="Sitio web de Pinknoise Soluciones de Audio" class="cont">
                                    <span data-src="img/pinknoise-home-movil.png"></span>
                                    <span data-src="img/pinknoise-home-tablet.png"     data-media="(min-width: 650px)"></span>
                                    <span data-src="img/pinknoise-home-laptop.png"      data-media="(min-width: 1000px)"></span>

                                    <!-- Fallback content for non-JS browsers. Same img src as the initial, unqualified source element. -->
                                    <noscript>
                                        <img src="img/pinknoise-home-laptop.png" alt="Sitio web de Pinknoise Soluciones de Audio">
                                    </noscript>
                                </span>
                                <div class="descripcion-proyecto">
                                    <h1>Pinknoise. Dise&ntilde;o de Audio</h1>
                                    <p>Programaci&oacute;n y desarrollo responsivo</p>
                                    <strong class="ribbon-wrapp resaltar-boton"><a class="ribbon" href="pinknoise.html">Ver proyecto</a></strong>

                                </div>
                            </article>
                        </li>
                        <li>
                            <article class="proyecto">
                                <span data-picture data-alt="Sitio web de la Universidad de Ciencias de la Seguridad" class="cont">
                                    <span data-src="img/ucs-index.png"></span>
                                    <span data-src="img/home-tablet.png"     data-media="(min-width: 650px)"></span>
                                    <span data-src="img/pink-laptop.png"      data-media="(min-width: 1000px)"></span>

                                    <!-- Fallback content for non-JS browsers. Same img src as the initial, unqualified source element. -->
                                    <noscript>
                                        <img src="img/pink-laptop.png" alt="Sitio web de Pinknoise Soluciones de Audio">
                                    </noscript>
                                </span>
                                <div class="descripcion-proyecto">
                                    <h1>Pinknoise. 2</h1>
                                    <p>Programaci&oacute;n y desarrollo responsivo</p>
                                    <strong class="ribbon-wrapp resaltar-boton"><a class="ribbon" href="#">Ver proyecto</a></strong>
                                </div>
                            </article>
                        </li>
                    </ul>
                </div>
                <!-- fin flexslider -->

            </div>
            <!-- fin contenedor -->
        </section>
        <!-- proyectos-recientes -->

        <section class="servicios contenedor">
            <h1>servicios</h1>
            <ul class="clearfix">
                <li>Dise&ntilde;o de interfaz de usuario</li>
                <li>Dise&ntilde;o y programaci&oacute;n responsivo</li>
                <li>Integraci&oacute;n a administrador de contenido (Wordpress, Joomla, Drupal)</li>
                <li>Optimizaci&oacute;n para motores de b&uacute;squeda (SEO)</li>
                <li>Consultor&iacute;a en proyectos web</li>
            </ul>

        </section>
        <!-- section.servicios -->

        <section class="proceso resaltar-poco">
            <div class="contenedor clearfix">
                <p>Estamos convencidos que un proceso debidamente estructurado y transparente da como resultado proyectos exitosos</p>
                <div class="boton-accion">
                    <strong class="ribbon-wrapp"><a class="ribbon" href="#">Nuestro proceso</a></strong>
                </div>
            </div>

        </section>
        <!-- section.proceso -->

        <section class="contacto">
            <h1 class="contenedor">contacto</h1>
                  <div class="liquid-slider"  id="slider-id">
                    <div>
                        <h2 class="title"> </h2>
                        <?php if($hasError=="true" && $errorCompletar=="true") {  ?>
                            <p class="contenedor notif-form">Los campos de Nombre, Email y Mensaje deben ser llenados.</p>
                        <?php }?>
                        <?php if($hasError=="true" && $errorInformacion=="true") {  ?>
                            <p class="contenedor notif-form">Hubo un problema con la informaci&oacute;n ingresada en la forma. Por favor verifica tus entradas.</p>
                        <?php }?>
                        <?php if($hasError=="true" && $errorSubmit=="true") {  ?>
                            <p class="contenedor notif-form">Hubo un problema al enviar tus datos. Por favor verifica que sean correctos.</p>
                        <?php }?>
                        <?php if($hasError=="true" && $errorValidMail=="true") {  ?>
                            <p class="contenedor notif-form">Lo sentimos, el correo que ingresaste parece no existir. Por favor ingresa un correo electr&oacute;nico v&aacute;lido.</p>
                        <?php }?>
                        <?php if($hasError=="true" && $emailSent=="false") {  ?>
                            <p class="contenedor notif-form ">Lo sentimos, pero hubo un problema de nuestro servidor al enviar tu mensaje. Por favor intentalo de nuevo. lo sentimos mucho!.</p>
                        <?php }?>
                        <?php if($emailSent=="true") {  ?>
                            <p class="contenedor notif-form success-submit">Tu mensaje fue enviado correctamente. Te contestaremos a la mayor brevedad posible.</p>
                        <?php }?>
                        <?php if($emailSent=="false") {  ?>
                            <p class="contenedor notif-form">Los datos que ingresaste son correctos, sin embargo hubo un problema al enviar tu mensaje. Por favor vuelve a intentarlo. Una disculpa, Gracias.</p>
                        <?php }?>

                        <form action="<?php echo $_SERVER['PHP_SELF']; ?>" method="post" class="contenedor">
                            <input type="text" id="nombre" class="nombre" name="nombre" placeholder="<?php if($name==''){echo 'Nombre*';}?>" value="<?php if(isset($name)){echo $name;}?>">
                            <input type="mail" id="email" class="email" name="email" placeholder="<?php if(isset($email) && $mail->ValidateAddress($email) ){echo $email;}else{echo 'Email*';} ?>" value="<?php if(isset($email) && $mail->ValidateAddress($email)){echo $email;}?>">
                            <textarea id="mensaje" class="mensaje" name="mensaje" placeholder="<?php if($message==''){echo 'Mensaje*';}?>"><?php if(isset($message)){echo $message;}?></textarea>
                            <input type="text" name="address" id="address" placeholder="Direcci&oacute;n" class="hidden">
                            <p class="hidden">Favor de dejar vac&iacute;o el campo de direcci&oacute;n.</p>
                            <strong class="ribbon-wrapp resaltar-boton submit-boton"><a href="#" class="ribbon submit-form">Enviar</a></strong>
                        </form>
                    </div>
                    <!-- mail -->

                    <div>
                      <h2 class="title"></h2>
                      <div class="contenedor">
                          <a class="twitter-timeline" href="https://twitter.com/coddica" data-widget-id="342015861684592640" height="300px">Tweets by @coddica</a>
                            <script>
                                !function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+"://platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");
                            </script>
                      </div>

                    </div>
                    <div>
                      <h2 class="title"></h2>
                      <div id="fb-contenedor" class="contenedor-fb contenedor">
                      </div>
                    </div>
                    <div>
                      <h2 class="title"></h2>
                      <div id="gplus-contenedor" class="contenedor-gplus contenedor">
                        <div class="g-plus" data-href="https://plus.google.com/114331353767221159686"></div>

                      </div>
                    </div>
                    <div >
                      <h2 class="title"></h2>
                      <div class="contenedor-yt contenedor">
                            <p>C&oacute;ddica en <span aria-hidden="true" data-icon="&#xe003;" class="yt-boton"></span><span class="screen-reader-text">YouTube</span></p>
                            <strong class="ribbon-wrapp resaltar-boton"><a href="https://www.youtube.com/user/coddica" class="ribbon">Suscribirse</a></strong>

                      </div>
                    </div>
                  </div>
                  <!-- Liquid Slider Ends Here -->

        </section>
        <!-- section.contacto -->

        <footer role="content-info" class="resaltar-menos">
            <p class="contenedor">
                <small>&copy; C&oacute;ddica 2013<br><br>Tel.: 8114896387<br>Email: <a href="mailto:hola@coddica.mx">hola@coddica.mx</a></small>
            </p>
        </footer>

        <script src="//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
        <script>window.jQuery || document.write('<script src="js/jquery-1.9.1.min.js"><\/script>')</script>
        <!--[if (gte IE 6)&(lte IE 8)]>
          <script type="text/javascript" src="selectivizr.js"></script>
        <![endif]-->
        <script src="js/helper.js"></script>
        <script src="js/plugins.js"></script>
        <script src="js/main.js"></script>
        <?php if($hasError=="true" || $emailSent=="true" || $emailSent=="false") {  ?>
        <script>$(document).ready(function() {$(window).scrollTop($('.notif-form').offset().top);});</script>

        <?php } ?>


        <div id="fb-root"></div>
        <script>(function(d, s, id) {
          var js, fjs = d.getElementsByTagName(s)[0];
          if (d.getElementById(id)) return;
          js = d.createElement(s); js.id = id;
          js.src = "//connect.facebook.net/es_ES/all.js#xfbml=1";
          fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));</script>
      <script type="text/javascript">
          (function() {
            var po = document.createElement('script'); po.type = 'text/javascript'; po.async = true;
            po.src = 'https://apis.google.com/js/plusone.js';
            var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(po, s);
          })();
        </script>

<!--
        <script>
            var _gaq=[['_setAccount','UA-XXXXX-X'],['_trackPageview']];
            (function(d,t){var g=d.createElement(t),s=d.getElementsByTagName(t)[0];
            g.src='//www.google-analytics.com/ga.js';
            s.parentNode.insertBefore(g,s)}(document,'script'));
        </script>
    -->
    </body>
</html>
