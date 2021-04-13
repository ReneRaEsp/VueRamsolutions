<template>
  <section class="seccion1">
    <div class="row">
      <div class="col-12 mt-5 pt-5">
        <p class="p-3 h3 text-center text-white font-weight-bold">
          DISEÑO DE SITIOS WEB PARA HACER CRECER TU NEGOCIO <br />
          Y DAR IMAGEN A TU MARCA
        </p>
      </div>
      <div class="col-12 p-5">
        <h4 class="p-5 h5 text-center text-white font-weight-bold">
          En nuestra mente existe un mundo de posibilidades, solo debemos
          crearlas de adentro hacia afuera y así materializar nuestros proyectos
        </h4>
      </div>
      <div class="col-12 d-flex justify-content-between flex-wrap">
        <div class="p-5 d-none d-sm-flex col-sm-2"></div>
        <div class="m-2 col-5 col-sm-1">
          <div class="d-flex flex-column">
            <div class="d-flex justify-content-center pb-3">
              <i
                class="m-auto p-1 text-center h1 text-white far fa-window-restore"
              ></i>
            </div>
            <div class="rounded">
              <p class="text-center h5 font-weight-bold text-white">
                Diseño Web
              </p>
            </div>
          </div>
        </div>
        <div class="m-2 col-5 col-sm-1">
          <div class="d-flex flex-column">
            <div class="d-flex justify-content-center pb-3">
              <i class="m-auto p-1 text-center h1 fas fa-users text-white"></i>
            </div>
            <div class="">
              <p class="text-center h5 font-weight-bold text-white">
                Interfaz de Usuario <br />(UI/UX)
              </p>
            </div>
          </div>
        </div>
        <div class="m-2 col-5 col-sm-1">
          <div class="d-flex flex-column">
            <div class="d-flex justify-content-center pb-3">
              <i class="m-auto p-1 text-center h1 text-white fas fa-star"></i>
            </div>
            <div class="">
              <p class="text-center h5 font-weight-bold text-white">
                Aplicaciones Web
              </p>
            </div>
          </div>
        </div>
        <div class="m-2 col-5 col-sm-1">
          <div class="d-flex flex-column">
            <div class="d-flex justify-content-center pb-3">
              <i
                class="m-auto p-1 text-center h1 text-white fas fa-palette"
              ></i>
            </div>
            <div class="">
              <p class="text-center h5 font-weight-bold text-white">
                Diseño de banners
              </p>
            </div>
          </div>
        </div>
        <div class="m-auto m-sm-2 col-5 col-sm-1">
          <div class="d-flex flex-column">
            <div class="d-flex justify-content-center pb-3">
              <i
                class="m-auto p-1 text-center h1 text-white fas fa-laptop-code"
              ></i>
            </div>
            <div class="">
              <p class="text-center h5 font-weight-bold text-white">
                Desarrollo Web <br />
                Responsive
              </p>
            </div>
          </div>
        </div>
        <div class="p-5 d-none d-sm-flex col-sm-2"></div>
      </div>
      <div class="col-12 d-flex justify-content-center pt-5 mb-5">
        <div class="borde p-2 m-auto">
          <a
            href="https://thawing-stream-87420.herokuapp.com/pcontacto/index.php"
            class="h4 contactanos text-align-center"
            >Contactanos ya!</a
          >
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
.seccion1 {
  margin: auto;
  padding-top: 70px;
  width: 100%;
  height: 100%;
  background: url("./../../../assets/img/fondo4.jpg");
  background-size: auto;
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-position: center;
}
.seccion1 div div .borde {
  border: solid 4px white;
  padding-left: 1rem;
  padding-right: 1rem;
  padding-top: 0rem;
  padding-bottom: 0rem;
  border-radius: 5px;
  transition: 1s;
}
.seccion1 div div .borde:hover {
  border: solid 4px rgba(255, 255, 255, 0);
  background: rgba(25, 155, 255, 0.4);
}
.seccion1 div div .borde .contactanos {
  text-decoration: none;
  color: white;
  padding: 1rem;
}
.seccion1 div div .borde .contactanos:hover {
  color: white;
}
</style>
