<template>
  <section class="seccion3 p-5">
    <div class="col-12 p-5">
      <p class="h1 text-white">
        Trabajos Desarollados <br />
        Recientemente
      </p>
      <hr />
    </div>
    <div class="col-12">
      <div
        id="carouselExampleIndicators"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner">
          <!--<a href="https://young-waters-96309.herokuapp.com" class="carousel-item"
				    target="_BLANK">
				    	<div class="d-flex justify-content-center">
				      <img loading="lazy" src="img/laptopcliente.png" class="carrucelI3 d-block w-100" alt="">
				      	</div>
				    </a>-->
          <a href="pcafe/index.html" target="_BLANK" class="carousel-item">
            <div class="d-flex justify-content-center">
              <img
                loading="lazy"
                src="./../../../assets/img/pcafe.png"
                class="carrucelI2 d-block w-100"
                alt=""
              />
            </div>
          </a>
          <a href="psushi/index.html" target="_BLANK" class="carousel-item">
            <div class="d-flex justify-content-center">
              <img
                loading="lazy"
                src="./../../../assets/img/psushi.png"
                class="carrucelI3 d-block w-100"
                alt=""
              />
            </div>
          </a>
          <a href="peverest/index.html" target="_BLANK" class="carousel-item">
            <div class="d-flex justify-content-center">
              <img
                loading="lazy"
                src="./../../../assets/img/laptopeverest.png"
                class="carrucelI3 d-block w-100"
                alt=""
              />
            </div>
          </a>
          <a
            href="https://rocky-peak-56338.herokuapp.com/"
            target="_BLANK"
            class="carousel-item active"
          >
            <div class="d-flex justify-content-center">
              <img
                loading="lazy"
                src="./../../../assets/img/laptoplibros.png"
                class="carrucelI3 d-block w-100"
                alt=""
              />
            </div>
          </a>
        </div>
        <a
          class="carousel-control-prev"
          href="#carouselExampleIndicators"
          role="button"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </a>
        <a
          class="carousel-control-next"
          href="#carouselExampleIndicators"
          role="button"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </a>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style>
.seccion3 {
  margin: auto;
  width: 100%;
  height: auto;
  background-color: rgba(121, 53, 123, 0.8);
  background: url("./../../../assets/img/fondo4.jpg");
  background-size: auto;
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-position: center;
}

.carrucelI1 {
  max-width: 200px;
  max-height: 600px;
}

.carrucelI2 {
  max-width: 900px;
  max-height: 600px;
}

.carrucelI3 {
  max-width: 900px;
  max-height: 600px;
}
</style>
