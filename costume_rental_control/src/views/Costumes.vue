<script setup>
import Header from '../components/my_components/Header.vue';
import Footer from '../components/my_components/Footer.vue';
</script>

<template>
  <div class="costumescontainer">
    <Header/>
    <body class="backgroundcostumes">
      <main>
        <div class="onlinecostumes">
          <div class="descriptioncostumes">
            <h3>COSTUMES</h3>
          </div>
            <div class="back">
            <RouterLink to="/"><button type="button" class="backbtn btn btn-outline-warning">BACK</button>
            </RouterLink>
          </div>
        </div>

        <div class="twocards">
          <div class="card">
            <figure> <img
              class="card-img-top"
              src="https://cdn.pixabay.com/photo/2017/10/28/21/19/man-2898152_1280.png"
              alt="Card image cap"/>
            </figure>
            <div class="card-body">
              <button type="button" class="btn btn-lg btn-light btn-outline-dark ">
                <RouterLink to="/adultcostumes">ADULT COSTUMES</RouterLink>
              </button>
            </div>
          </div>
          <div class="card">
            <figure><img
              class="card-img-top"
              src="https://cdn.pixabay.com/photo/2017/10/28/21/19/man-2898152_1280.png"
              alt="Card image cap"/>
            </figure>
            <div class="card-body">
              <button type="button" class="btn btn-lg btn-light btn-outline-dark">
                <RouterLink to="/kidscostumes">KIDS COSTUMES</RouterLink>
              </button>
            </div>
          </div>
        </div>
      </main>
    </body>
    <Footer/>
  </div>
</template>

<style scoped>
  @media (min-width: 1024px) {
    .costumescontainer{
     width: 100%;
     height:auto;
    }
    .backgroundcostumes {
     width: 100%;
     height:auto;
     background-color: #f3e5e5;
     justify-content: center;
    }
    .onlinecostumes{
     display:flex;
     justify-content: space-between;
     align-items: center;
     margin-left:35%;
    }
    .descriptioncostumes {
     background-color:transparent;
     padding:2% 6% 1% 6%;
     border:4px #ffc107 dotted;
     border-bottom-right-radius:  1rem;
     border-top-left-radius: 1rem;
     font-style: normal;
     text-align: center;
     background-color: #f5f5f5;
     color:rgb(190, 32, 169);
     margin:0% 4% 2% 3%;
    }
    .descriptioncostumes:hover {
     color:rgb(6, 0, 0);
    }
    .backbtn {
      margin-right: 1rem;
    }
     img.fluid {
      min-width: 150%;
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
    .card > figure {
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
     background: #f5f5f5;
     color: #ffc107;
     font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
     font-size:120%;
     border: 2px solid #ffc107;
    }
    .btn:hover {
     background-color:fuchsia;
    }
    .backbtn:hover {
     background-color: #ffc107;
     color:black;
    }
  }
</style>

