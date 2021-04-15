<template>
  <section class="seccion1">
    <section class="tituloP row mt-4">
      <section class="col-12 mt-3 d-flex justify-content-center">
        <p
          class="titulo h2 text-center p-2 col-12 col-sm-3 col-md-2 rounded font-weight-bold"
        >
          Portafolio <i class="fas fa-suitcase"></i>
        </p>
      </section>
    </section>
    <section class="galeria mt-4">
      <a
        href="../pcafe/index.html"
        target="_BLANK"
        class="elementoGaleria uno rounded"
      >
        <div
          class="descripcion d-flex justify-content-center align-items-center"
        >
          <h4 class="m-auto text-center">
            Sitio web estático con algunos efectos como animación y paralax
          </h4>
        </div>
      </a>
      <a href="#" target="_BLANK" class="elementoGaleria dos rounded">
        <div
          class="descripcion d-flex justify-content-center align-items-center"
        >
          <h4 class="m-auto text-center">
            Ejemplo de tienda online en mantenimiento debido a cambio de
            alojamiento
          </h4>
        </div>
      </a>
      <a
        href="../podontologia/index.html"
        target="_BLANK"
        class="elementoGaleria tres rounded"
      >
        <div
          class="descripcion d-flex justify-content-center align-items-center"
        >
          <h4 class="m-auto text-center">
            Sitio Web Responsive con Bootstrap 4
          </h4>
        </div>
      </a>
      <a href="#" target="_BLANK" class="elementoGaleria cuatro rounded">
        <div
          class="descripcion d-flex justify-content-center align-items-center"
        >
          <h4 class="m-auto text-center">
            Blog Web Personal WordPress actualmente en mantenimiento debido a
            cambio de hosting
          </h4>
        </div>
      </a>
      <a
        href="../pcevicheria/index.html"
        target="_BLANK"
        class="elementoGaleria cinco rounded"
      >
        <div
          class="descripcion d-flex justify-content-center align-items-center"
        >
          <h4 class="m-auto text-center">
            Sitio Web estático con links para solicitud de delivery
          </h4>
        </div>
      </a>
      <a
        href="../psushi/index.html"
        target="_BLANK"
        class="elementoGaleria seis rounded"
      >
        <div
          class="descripcion d-flex justify-content-center align-items-center"
        >
          <h4 class="m-auto text-center">
            Sitio Web Responsive con Bootstrap 4
          </h4>
        </div>
      </a>
      <a
        href="../pigc/index.html"
        target="_BLANK"
        class="elementoGaleria siete rounded"
      >
        <div
          class="descripcion d-flex justify-content-center align-items-center"
        >
          <h4 class="m-auto text-center">
            Aplicación Web desarrollada en Angular que calcula el índice de
            grasa corporal de acuerdo a la edad, peso, altura y sexo
          </h4>
        </div>
      </a>
      <a
        href="https://thawing-stream-87420.herokuapp.com/"
        target="_BLANK"
        class="elementoGaleria ocho rounded"
      >
        <div
          class="descripcion d-flex justify-content-center align-items-center"
        >
          <h4 class="m-auto text-center">
            Sitio Web con formulario de envío de email desarrollado en PHP
          </h4>
        </div>
      </a>
      <a
        href="https://young-waters-96309.herokuapp.com"
        target="_BLANK"
        class="elementoGaleria nueve rounded"
      >
        <div
          class="descripcion d-flex justify-content-center align-items-center"
        >
          <h5 class="m-auto text-center">
            Aplicación CRUD Desarrollada en Java con Spring Boot utilizando el
            patrón de diseño MVC, la biblioteca de plantillas Thymeleaf y Spring
            Security para el manejo de inicio de sesión
          </h5>
        </div>
      </a>
      <a
        href="../peverest/index.html"
        target="_BLANK"
        class="elementoGaleria diez rounded"
      >
        <div
          class="descripcion d-flex justify-content-center align-items-center"
        >
          <h4 class="m-auto text-center">
            Página web estática diseñada y desarrollada con temática de los
            himalayas
          </h4>
        </div>
      </a>
      <a
        href="https://rocky-peak-56338.herokuapp.com"
        target="_BLANK"
        class="elementoGaleria once rounded"
      >
        <div
          class="descripcion d-flex justify-content-center align-items-center"
        >
          <h5 class="m-auto text-center">
            Aplicación CRUD bilingüe Desarrollada en Java con Spring Boot
            utilizando el patrón de diseño MVC y persistencia con hibernate
            conectada a una base de datos MySQL
          </h5>
        </div>
      </a>
      <a
        href="../ppresupuesto/"
        target="_BLANK"
        class="elementoGaleria doce rounded"
      >
        <div
          class="descripcion d-flex justify-content-center align-items-center"
        >
          <h3 class="m-auto text-center">
            Aplicación Web Desarrollada en Angular para cálculo de presupuesto
          </h3>
        </div>
      </a>
    </section>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
.seccion1 {
  padding-top: 6.5rem;
  padding: 5rem;
  background: url("./../../../assets/img/fondo2.jpg");
  overflow: hidden;
  background-attachment: fixed;
  background-size: 100%;
}
.seccion1 .tituloP section .titulo {
  background: rgba(14, 43, 73, 0.7);
  color: rgba(243, 243, 243, 0.9);
}
.seccion1 .tituloP section .titulo i {
  color: rgba(243, 243, 243, 0.9);
  font-size: 2rem;
}
.seccion1 .galeria {
  margin-top: 10rem;
}
.seccion1 .galeria .elementoGaleria {
  background-size: 400px 200px;
  background-position: center;
  background-repeat: no-repeat;
  transition: 0.5s;
  text-decoration: none;
}
.seccion1 .galeria .elementoGaleria:hover {
  -web-kit-transform: scale(1.3);
  transform: scale(1.3);
  z-index: 15;
}
.seccion1 .galeria .elementoGaleria .descripcion {
  background: #052044;
  opacity: 0;
  width: 100%;
  height: 100%;
  transition: 1s;
  padding: 7px;
  border: 3px solid #d1d1d1b7;
  border-radius: 5px;
}
.seccion1 .galeria .elementoGaleria .descripcion:hover {
  opacity: 0.8;
}
.seccion1 .galeria .elementoGaleria .descripcion h2,
.seccion1 .galeria .elementoGaleria .descripcion h3,
.seccion1 .galeria .elementoGaleria .descripcion h4,
.seccion1 .galeria .elementoGaleria .descripcion h5 {
  text-decoration: none;
  color: white;
}
.seccion1 .galeria .uno {
  background: url("./../../../assets/img/uno.png");
  background-size: 400px 200px;
  background-position: center;
  background-repeat: no-repeat;
  transition: 0.5s;
}
.seccion1 .galeria .uno:hover {
  -web-kit-transform: scale(1.3);
  transform: scale(1.3);
  z-index: 15;
}
.seccion1 .galeria .dos {
  background: url("./../../../assets/img/dos.png");
  background-size: 400px 200px;
  background-position: center;
  background-repeat: no-repeat;
  transition: 0.5s;
}
.seccion1 .galeria .dos:hover {
  -web-kit-transform: scale(1.3);
  transform: scale(1.3);
  z-index: 15;
}
.seccion1 .galeria .tres {
  background: url("./../../../assets/img/tres.png");
  background-size: 400px 200px;
  background-position: center;
  background-repeat: no-repeat;
  transition: 0.5s;
}
.seccion1 .galeria .tres:hover {
  -web-kit-transform: scale(1.3);
  transform: scale(1.3);
  z-index: 15;
}
.seccion1 .galeria .cuatro {
  background: url("./../../../assets/img/cuatro.png");
  background-size: 400px 200px;
  background-position: center;
  background-repeat: no-repeat;
  transition: 0.5s;
}
.seccion1 .galeria .cuatro:hover {
  -web-kit-transform: scale(1.3);
  transform: scale(1.3);
  z-index: 15;
}
.seccion1 .galeria .cinco {
  background: url("./../../../assets/img/cinco.png");
  background-size: 400px 200px;
  background-position: center;
  background-repeat: no-repeat;
  transition: 0.5s;
}
.seccion1 .galeria .cinco:hover {
  -web-kit-transform: scale(1.3);
  transform: scale(1.3);
  z-index: 15;
}
.seccion1 .galeria .seis {
  background: url("./../../../assets/img/seis.png");
  background-size: 400px 200px;
  background-position: center;
  background-repeat: no-repeat;
  transition: 0.5s;
}
.seccion1 .galeria .seis:hover {
  -web-kit-transform: scale(1.3);
  transform: scale(1.3);
  z-index: 15;
}
.seccion1 .galeria .siete {
  background: url("./../../../assets/img/siete.png");
  background-size: 400px 200px;
  background-position: center;
  background-repeat: no-repeat;
  transition: 0.5s;
}
.seccion1 .galeria .siete:hover {
  -web-kit-transform: scale(1.3);
  transform: scale(1.3);
  z-index: 15;
}
.seccion1 .galeria .ocho {
  background: url("./../../../assets/img/ocho.png");
  background-size: 400px 200px;
  background-position: center;
  background-repeat: no-repeat;
  transition: 0.5s;
}
.seccion1 .galeria .ocho:hover {
  -web-kit-transform: scale(1.3);
  transform: scale(1.3);
  z-index: 15;
}
.seccion1 .galeria .nueve {
  background: url("./../../../assets/img/nueve.png");
  background-size: 400px 200px;
  background-position: center;
  background-repeat: no-repeat;
  transition: 0.5s;
}
.seccion1 .galeria .nueve:hover {
  -web-kit-transform: scale(1.3);
  transform: scale(1.3);
  z-index: 15;
}
.seccion1 .galeria .diez {
  background: url("./../../../assets/img/diez.png");
  background-size: 400px 200px;
  background-position: center;
  background-repeat: no-repeat;
  transition: 0.5s;
}
.seccion1 .galeria .diez:hover {
  -web-kit-transform: scale(1.3);
  transform: scale(1.3);
  z-index: 15;
}
.seccion1 .galeria .once {
  background: url("./../../../assets/img/once.png");
  background-size: 400px 200px;
  background-position: center;
  background-repeat: no-repeat;
  transition: 0.5s;
}
.seccion1 .galeria .once:hover {
  -web-kit-transform: scale(1.3);
  transform: scale(1.3);
  z-index: 15;
}
.seccion1 .galeria .doce {
  background: url("./../../../assets/img/doce.png");
  background-size: 400px 200px;
  background-position: center;
  background-repeat: no-repeat;
  transition: 0.5s;
}
.seccion1 .galeria .doce:hover {
  -web-kit-transform: scale(1.3);
  transform: scale(1.3);
  z-index: 15;
}

/* -------!!!--!!----- Comienzo de la Grid  -------------!!!--!!------*/
.seccion1 .galeria {
  display: grid;
  grid-gap: 0.5rem;
  grid-row-gap: 4rem;
  width: 100%;
  height: auto;
  grid-template-areas:
    "uno  	 doce  once  diez"
    "seis   nueve siete ocho"
    "cuatro cinco tres  dos";
  grid-template-rows: repeat(3, 170px);
  grid-template-columns: repeat(4, 1fr);
}
.seccion1 .galeria .uno {
  grid-area: uno;
}
.seccion1 .galeria .dos {
  grid-area: dos;
}
.seccion1 .galeria .tres {
  grid-area: tres;
}
.seccion1 .galeria .cuatro {
  grid-area: cuatro;
}
.seccion1 .galeria .cinco {
  grid-area: cinco;
}
.seccion1 .galeria .seis {
  grid-area: seis;
}
.seccion1 .galeria .siete {
  grid-area: siete;
}
.seccion1 .galeria .ocho {
  grid-area: ocho;
}
.seccion1 .galeria .nueve {
  grid-area: nueve;
}
.seccion1 .galeria .diez {
  grid-area: diez;
}
.seccion1 .galeria .once {
  grid-area: once;
}
.seccion1 .galeria .doce {
  grid-area: doce;
}

@media (max-width: 568px) {
  .seccion1 .galeria {
    grid-template-areas:
      "uno    dos"
      "tres   cuatro"
      "cinco  seis"
      "siete  ocho"
      "nueve  diez"
      "once   doce";

    grid-template-rows: repeat(6, 300px);
    grid-template-columns: repeat(2, 50%);
    grid-row-gap: 0.7rem;
  }
}
@media (max-width: 400px) {
  .seccion1 .galeria {
    margin: auto;
    grid-template-areas:
      "uno"
      "dos"
      "tres"
      "cuatro"
      "cinco"
      "seis"
      "siete"
      "ocho"
      "nueve"
      "diez"
      "once"
      "doce";

    grid-template-rows: repeat(12, 250px);
    grid-template-columns: repeat(1, 1fr);
    grid-row-gap: 0.5rem;
  }
}
</style>
