<template>
  <header id="header" class="header">
    <div id="navbar" class="row">
      <nav class="navbar navbar-expand-lg navbar-light">
        <div class="container-fluid d-flex justify-content-between p-3">
          <a
            class="borde col-10 col-sm-5 col-md-3 p-1 m-auto d-flex justify-content-center bg-white rounded"
            href="index.html"
          >
            <img
              class="logo img-fluid"
              src="./../../assets/img/logo2.png"
              alt=""
            />
            <!--<p class="ram">Ramesptop <br/> <span class="web">Web</span><span class="des"> Design</span></p>-->
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            class="collapse navbar-collapse justify-content-end"
            id="navbarNavAltMarkup"
          >
            <div class="navbar-nav d-flex justify-content-between">
              <router-link
                class="nav-link text-white font-weight-bold active text-center"
                to="/Inicio"
              >
                <span class="p-2 h5">Inicio</span>
                <i class="fas fa-house-user"></i>
              </router-link>
              <router-link
                class="nav-link text-white font-weight-bold active text-center"
                to="/Portafolio"
              >
                <span class="p-2 h5">Portafolio</span>
                <i class="fas fa-suitcase"></i>
              </router-link>
              <a
                class="nav-link text-white font-weight-bold text-center"
                aria-current="page"
                href="https://thawing-stream-87420.herokuapp.com/pcontacto/index.php"
                ><span class="p-2 h5">Contacto</span>
                <i class="fas fa-address-book"></i
              ></a>
              <!--<a class=" nav-link text-white font-weight-bold text-center" aria-current="page" href="../ptecnologias/index.html"><span class="p-2 h5">Tecnologias</span> <i class="fas fa-microchip"></i></a>-->
              <a
                class="nav-link text-white font-weight-bold text-center"
                aria-current="page"
                target="_BLANK"
                href="https://blog.ramesptop.com"
                ><span class="p-2 h5">Blog</span> <i class="fas fa-blog"></i
              ></a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  </header>
</template>

<script>
let ubicacionPrincipal = window.pageYOffset;
window.onscroll = function () {
  let Desplazamiento = window.pageYOffset;
  if (ubicacionPrincipal >= Desplazamiento) {
    document.getElementById("navbar").style.marginTop = "0px";
  } else {
    document.getElementById("navbar").style.marginTop = "-250px";
  }
  ubicacionPrincipal = Desplazamiento;
};
export default {};
</script>

<style scoped>
.header {
  margin: auto;
  width: 100%;
  height: auto;
  position: fixed;
  z-index: 17;
  background: rgba(2, 76, 105, 0.752);
}
.header div {
  margin-top: 0px;
  -webkit-transition: 0.7s;
  transition: 0.7s;
}
.logo {
}
</style>
