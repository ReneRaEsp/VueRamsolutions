<template>
  <section class="seccion4 justify-content-center">
    <div class="row m-auto p-5 d-flex justify-content-between">
      <div class="col-12 tituloC d-flex justify-content-center">
        <div class="d-flex justify-content-between flex-wrap flex-column">
          <div class="justify-content-center d-flex">
            <p class="titulo text-light p-2">Información de contacto</p>
            <i class="p-2 iconoT fas fa-address-book"></i>
          </div>
          <div class="">
            <p class="text-light p-2">
              Sientete libre de escribirnos ante cuaquier duda o por la razón
              que sea
            </p>
          </div>
          <hr />
        </div>
      </div>
      <div
        class="col-12 col-sm-4 contactoT d-flex justify-content-start flex-wrap rounded flex-column mt-5 p-1 p-sm-3"
      >
        <div class="contactoC d-flex justify-content-start">
          <p class="d-flex flex-wrap contacto text-dark p-1 p-sm-2">
            Email: rene@ramesptop.com <br />
            ramesptop@protonmail.com
          </p>
          <i class="pt-4 correo contactoI fas fa-envelope"></i>
        </div>
        <div class="contactoC d-flex justify-content-start">
          <p class="d-flex flex-wrap contacto text-dark p-2">
            Telefono: +51(941)339-689
          </p>
          <i class="p-2 telefono contactoI fas fa-phone-square"></i>
        </div>
        <div class="contactoC d-flex justify-content-start">
          <p class="contacto text-dark p-2">Telegram: @RamEsptop</p>
          <i class="p-2 telegram contactoI fab fa-telegram"></i>
        </div>
        <div class="contactoC d-flex justify-content-start">
          <p class="d-flex flex-wrap contacto text-dark p-2">
            Signal: +51(941)339-689
          </p>
          <i class="p-2 signal contactoI far fa-comment"></i>
        </div>
      </div>
      <div
        class="col-12 col-sm-2 contactoT contactoT2 rounded d-flex justify-content-start flex-wrap flex-column"
      >
        <a class="" href="https://t.me/ramesptop" target="_BLANK">
          <i class="logoT p-1 contactoI fab fa-telegram"></i>
          <p cllass="clickT">Iniciar conversación en telegram</p>
        </a>
        <!--<a class="" href="https://t.me/ramesptop" target="_BLANK">
					<i class="logoT logoForm p-1 contactoI fas fa-file-alt"></i>
					<p cllass="clickT">Solicitar pagina / formulario de servicio</p>

				</a>-->
        <a
          class=""
          href="https://thawing-stream-87420.herokuapp.com/pcorreo/index.php"
          target="_BLANK"
        >
          <i class="logoT logoCorreo p-1 contactoI fas fa-at"></i>
          <p cllass="clickT">Enviar email directamente</p>
        </a>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style>
.seccion4 {
  margin: auto;
  width: 100%;
  height: 100%;
  background-color: rgba(50, 170, 173, 0.8);
  background: url("./../../../assets/img/fondo5.jpg");
  background-size: auto;
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-position: center;
}
.seccion4 div .tituloC div div .titulo {
  font-size: 1.8rem;
}
.seccion4 div .tituloC div div .iconoT {
  font-size: 2rem;
  color: #e84326;
  margin-top: 0.7rem;
}
.seccion4 div .contactoT {
  margin: auto;
  width: auto;
  max-width: 350px;
  height: auto;
  background: rgba(222, 221, 213, 0.8);
  -webkit-box-shadow: 15px 12px 16px -6px rgba(0, 0, 0, 0.73);
  -moz-box-shadow: 15px 12px 16px -6px rgba(0, 0, 0, 0.73);
  box-shadow: 15px 12px 16px -6px rgba(0, 0, 0, 0.73);
}
.seccion4 div .contactoT .contactoC .contacto {
  font-size: 1.4rem;
}
.seccion4 div .contactoT .contactoC .contactoI {
  font-size: 2rem;
}
.seccion4 div .contactoT .contactoC .signal {
  color: #8b88d7;
}
.seccion4 div .contactoT .contactoC .telegram {
  color: #0088cc;
}
.seccion4 div .contactoT .contactoC .telefono {
  color: #14703f;
}
.seccion4 div .contactoT .contactoC .correo {
  color: #344e64;
}
.seccion4 div .contactoT2 {
  margin: auto;
  width: auto;
  height: auto;
  margin-top: 2rem;
  align-self: end;
  display: flex;
  justify-content: center;
}
.seccion4 div .contactoT2 a {
  text-decoration: none;
  color: #0f4066;
  text-align: center;
  max-width: 177px;
  width: auto;
  margin: auto;
  background: rgba(233, 233, 233, 0.9);
  padding: 1rem;
  margin: 1.2rem;
  -webkit-box-shadow: 15px 12px 16px -6px rgba(0, 0, 0, 0.73);
  -moz-box-shadow: 15px 12px 16px -6px rgba(0, 0, 0, 0.73);
  box-shadow: 15px 12px 16px -6px rgba(0, 0, 0, 0.73);
  border-radius: 4px 4px 4px 4px;
  transition: 0.7s;
}
.seccion4 div .contactoT2 a:hover {
  -webkit-box-shadow: 1px 1px 1px -6px rgba(0, 0, 0, 0.73);
  -moz-box-shadow: 1px 1px 1px -6px rgba(0, 0, 0, 0.73);
  box-shadow: 1px 1px 1px -6px rgba(0, 0, 0, 0.73);
  transform: translate(4px, 4px);
}
.seccion4 div .contactoT2 a .logoT {
  color: #0088cc;
  font-size: 3.5rem;
}
.seccion4 div .contactoT2 a .logoForm {
  color: #7697b0;
}
.seccion4 div .contactoT2 a .logoCorreo {
  color: #154150;
}
.seccion4 div .contactoT2 a .clickT {
  font-size: 2rem;
}

@media screen and (max-width: 400px) {
  .seccion4 div .contactoT .contactoC {
    font-size: 14px;
  }
  .seccion4 div .contactoT .contactoC .contacto {
    font-size: 14px;
  }
}
</style>
