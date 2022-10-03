<script setup>
import Header from "../components/my_components/Header.vue";
import Footer from "../components/my_components/Footer.vue";
</script>

<template>
  
  <div class="homecontainer">
    <Header />
    <body class="background">
      <main>
        <div class="description">
          <h2>"This App is used to control customes and suits for events in stocks
          and rented of your business"
          </h2>
        </div>

        <div class="twocards">
          <div class="card">
            <figure> <img
              class="card-img-top"
              src="https://cdn.pixabay.com/photo/2017/10/28/21/19/man-2898152_1280.png"
              alt="Card image cap"
            /></figure>
            <div class="card-body">
              <button type="button" class="costumes btn btn-lg btn-light btn-outline-dark ">
                <RouterLink to="/customes">CUSTOMES</RouterLink>
              </button>
            </div>
          </div>

          <div class="card">
            <figure><img
              class="card-img-top"
              src="https://cdn.pixabay.com/photo/2017/10/28/21/19/man-2898152_1280.png"
              alt="Card image cap"
            /></figure>
            <div class="card-body">
              <button type="button" class="suits btn btn-lg btn-light btn-outline-dark">
                <RouterLink to="/suitsforevents">SUITS FOR EVENTS</RouterLink>
              </button>
            </div>
          </div>
        </div>
      </main>
    </body>
    <Footer />
  </div>
</template>

<style scoped>
@media (min-width: 1024px) {
  
  .background {
    width: 100%;
    height:auto;
  }

  .description {
    text-align: center;
    background-color:transparent;
    font-style: italic;
    color:rgb(190, 32, 169);
    margin: 25px;
  }
  img.fluid {
    min-width: 100%;
    height: auto;
  }
  .twocards {
    display: flex;
    justify-content: center;
    align-items: space-around;
    gap:10vw;
  }

  .card {
    border: 1px solid blueviolet;
    border-radius: 1rem;
    padding: 2rem;
    margin: 1rem;
    background-image: url("https://cdn.pixabay.com/photo/2016/12/01/20/17/texture-1876097_1280.jpg");
    width: 23vw;
    height:63vh;
  }
   .card > figure{
    width: 100%;
    height: 80%;
    overflow: hidden;
    border: 2px solid fuchsia;
    border-radius:1em;
   }
  .background {
    background-color: whitesmoke;
  }
  .card-body {
    text-align: center;
  }
  
}
</style>