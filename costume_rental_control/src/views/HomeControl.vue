<script setup>
import Header from "../components/my_components/Header.vue";
import Footer from "../components/my_components/Footer.vue";
</script>

<template>
  
  <div class="homecontainer">
    <Header />
    <body class="backgroundhome">
      <main>
        <div class="descriptionhome">
          <h3>"This App is used to control Costumes and Suits for Events in stocks
          and rented of your business"
          </h3>
        </div>

        <div class="twocards">
          <div class="card">
            <figure> <img
              class="card-img-top"
              src="https://cdn.pixabay.com/photo/2017/10/28/21/19/man-2898152_1280.png"
              alt="Card image cap"
            /></figure>
            <div class="card-body">
              <button type="button" class="btn btn-lg btn-light btn-outline-dark ">
                <RouterLink to="/costumes">COSTUMES</RouterLink>
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
              <button type="button" class=" btn btn-lg btn-light btn-outline-dark">
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
  
  .backgroundhome {
    width: 100%;
    height:auto;
    background-color: #f3e5e5;
    justify-content: center;
  }

  .descriptionhome {
    text-align: center;
    background-color:transparent;
    font-style: italic;
    color:rgb(190, 32, 169);
    margin-bottom: 25px;
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
  .card-body {
    text-align: center;
  }
  .btn {
    background-color:whitesmoke;
    color: black;
    font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size:130%;
    border: 2px solid black;
  }
  .btn:hover {
    background-color: yellow;
    color:white;
  }
}
</style>