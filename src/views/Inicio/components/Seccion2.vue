<template>
  <section class="seccion2 p-sm-4 p-2">
    <div class="container">
      <div class="row p-sm-5 p-2 d-flex justify-content-center">
        <div class="col-12 p-sm-5 p-2">
          <p class="h3">Elegante & Económico</p>
          <p class="h1">Servicio de diseño web</p>
          <hr class="linea col-12 col-sm-6" />
          <p class="text-justify col-12 col-sm-6">
            Nos encargamos de dar forma y desarrollar sus proyectos web de
            manera que estos cuenten con diseño amigable al usuario en todo tipo
            de pantallas, además de que estos sean funcionales de manera que
            puedan servir a los propósitos deseados y que cumplan con los
            requerimientos y pautas dadas por el cliente
          </p>
        </div>
      </div>
      <div
        class="row d-flex flex-wrap flex-column flex-sm-row justify-content-center"
      >
        <div
          class="m-auto p-4 p-sm-none justify-content-center simbols col-12 col-sm-6 ml-5 d-flex flex-wrap"
        >
          <div class="bordes m-1">
            <div class="p-1 d-flex flex-column rounded">
              <i
                class="iconos m-auto p-1 text-center font-weight-bold-50 text-dark far fa-window-restore"
              ></i>
              <p class="subico mt-1 text-center h5 font-weight-bold text-dark">
                Diseño Web
              </p>
            </div>
          </div>
          <div class="bordes m-1">
            <div class="p-1 d-flex flex-column rounded">
              <i
                class="iconos m-auto p-1 text-center font-weight-bold-50 text-dark fas fa-users"
              ></i>
              <p class="subico mt-1 text-center h5 font-weight-bold text-dark">
                Interfaz de Usuario (UI/UX)
              </p>
            </div>
          </div>
          <div class="bordes m-1">
            <div class="p-1 d-flex flex-column rounded">
              <i
                class="iconos m-auto p-1 text-center font-weight-bold-50 text-dark fas fa-star"
              ></i>
              <p class="subico mt-1 text-center h5 font-weight-bold text-dark">
                Aplicaciones Web
              </p>
            </div>
          </div>
          <div class="bordes m-1">
            <div class="p-1 d-flex flex-column rounded">
              <i
                class="iconos m-auto p-1 text-center font-weight-bold-50 text-dark fas fa-palette"
              ></i>
              <p class="subico mt-1 text-center h5 font-weight-bold text-dark">
                Diseño de banners
              </p>
            </div>
          </div>
          <div class="bordes m-1">
            <div class="p-1 d-flex flex-column rounded">
              <i
                class="iconos m-auto p-1 text-center font-weight-bold-50 text-dark fas fa-laptop-code"
              ></i>
              <p class="subico mt-1 text-center h5 font-weight-bold text-dark">
                Desarrollo Web <br />
                Responsive
              </p>
            </div>
          </div>
        </div>
        <div class="mj col-12 col-sm-6">
          <img
            loading="lazy"
            class="laptop"
            src="./../../../assets/img/LMS.png"
            alt=""
          />
        </div>
        <div class="mt-5 col-12 d-flex justify-content-center pt-5 mb-5">
          <div class="borde d-flex justify-content-center flex-wrap">
            <a
              href="https://thawing-stream-87420.herokuapp.com/pcontacto/index.php"
              class="contactanos"
              >Dejanos ayudarte! ¿cuentanos que tienes en mente?</a
            >
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style>
.seccion2 {
  margin: auto;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.99);
  background-size: auto;
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-position: center;
}
.seccion2 div .simbols {
  transform: translate(8.3rem, 0);
  z-index: 2;
  height: auto;
}
.seccion2 div .simbols .bordes {
  height: 140px;
  width: 140px;
  display: flex;
  align-content: center;
  justify-content: center;
  background: rgba(244, 244, 244, 0.99);
  -webkit-box-shadow: 10px 10px 16px -6px rgba(0, 0, 0, 0.43);
  -moz-box-shadow: 10px 10px 16px -6px rgba(0, 0, 0, 0.43);
  box-shadow: 10px 10px 16px -6px rgba(0, 0, 0, 0.43);
  border-radius: 4px;
  transition: 0.7s;
  cursor: pointer;
}
.seccion2 div .simbols .bordes:hover {
  -webkit-box-shadow: 1px 1px 1px -6px rgba(0, 0, 0, 0.73);
  -moz-box-shadow: 1px 1px 1px -6px rgba(0, 0, 0, 0.73);
  box-shadow: 1px 1px 1px -6px rgba(0, 0, 0, 0.73);
  transform: translate(4px, 4px);
}
.seccion2 div .simbols .bordes .iconos {
  font-size: 3rem;
}
.seccion2 div .simbols div .linea {
  max-width: auto;
  height: 0;
  border-radius: 2rem;
  border: 2px solid #0af002;
}
.seccion2 div .mj {
  transform: translate(-7.7rem, 5rem);
  z-index: 1;
}
.seccion2 div .mj .laptop {
  max-width: 800px;
  max-height: 550px;
}
.seccion2 div .contactanos {
  text-decoration: none;
  color: #14cd9b;
  padding: 1rem;
  border: solid 3px #14cd9b;
  background: rgba(244, 244, 244, 0.9);
  border-radius: 2px;
  -webkit-box-shadow: 10px 10px 16px -6px rgba(0, 0, 0, 0.43);
  -moz-box-shadow: 10px 10px 16px -6px rgba(0, 0, 0, 0.43);
  box-shadow: 10px 10px 16px -6px rgba(0, 0, 0, 0.43);
  transition: 0.7s;
}
.seccion2 div .contactanos:hover {
  background: #14cd9b;
  color: white;
  border: solid 3px #14cd9b;
  -webkit-box-shadow: 1px 1px 1px -6px rgba(0, 0, 0, 0.73);
  -moz-box-shadow: 1px 1px 1px -6px rgba(0, 0, 0, 0.73);
  box-shadow: 1px 1px 1px -6px rgba(0, 0, 0, 0.73);
  transform: translate(5px, 5px);
}

@media only screen and (max-width: 600px) {
  .seccion2 div .mj {
    transform: translate(0rem, 0rem);
    display: flex;
    justify-content: center;
    margin: auto;
  }
  .seccion2 div .mj .laptop {
    width: 270px;
    height: 170px;
  }
  .seccion2 div .simbols {
    transform: translate(0rem, 0rem);
  }
  .seccion2 div .simbols .bordes {
    height: 70px;
    width: 70px;
  }
  .seccion2 div .simbols .bordes .iconos {
    font-size: 1.4rem;
  }
  .seccion2 div .simbols .bordes .subico {
    font-size: 0.8rem;
  }
}
</style>
