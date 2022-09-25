<script setup>
import Header from "../components/my_components/Header.vue";
import Footer from "../components/my_components/Footer.vue";
</script>

<template>
  
  <div class="homecontainer">
    <Header />
    <body class="background">
      <main>
        <h2 class="description">
          "This App is used to control customes and suits for events in stocks
          and rented of your business"
        </h2>
        <div class="twocards">
          <div class="card">
            <img
              class="card-img-top"
              src="https://cdn.pixabay.com/photo/2017/02/21/18/53/carnival-2087089_1280.png"
              alt="Card image cap"
            />
            <div class="card-body">
              <button type="button" class="btn btn-warning">
                <RouterLink to="/customes">CUSTOMES</RouterLink>
              </button>
            </div>
          </div>

          <div class="card">
            <img
              class="card-img-top"
              src="https://cdn.pixabay.com/photo/2017/02/21/18/53/carnival-2087089_1280.png"
              alt="Card image cap"
            />
            <div class="card-body">
              <button type="button" class="btn btn-warning">
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
  
  .description {
    text-align: center;
    background-color:white;
    color:rgb(21, 21, 145);
    font-size: 1rem;
    margin: 10%;
  }
  img.fluid {
    min-width: 100%;
    height: auto;
  }
  .twocards {
    display: flex;
    justify-content: space-around;
    align-items: flex-start;
    padding: 1rem;
    margin: 1rem;
  }

  .card {
    border: 1px solid black;
    padding: 2rem;
    margin: 1rem;
    background-color: wheat;
    height: 25w;
  }
  .card-img-top {
    width: 100%;
    height: 100%;
    border: 1px solid fuchsia;
  }
  .background {
    background-image: url("https://cdn.pixabay.com/photo/2021/12/11/01/55/wing-6861729_1280.jpg");
    background-size: cover;
  }
  .card-body {
    text-align: center;
  }
}
</style>