<script setup>
  import Header from '../components/my_components/Header.vue';
  import Footer from '../components/my_components/Footer.vue';
</script>

<template>
  <div class="rentallist">
    <Header/>
      <body class="backgroundrentallist">
        <main>
          <div class="onlinerentallist">
            <div class="descriptionrentallist">
              <h3>RENTAL LIST</h3>
            </div>
            <div class="back">
              <RouterLink to="/">
                <button type="button" class="backbtn btn btn-outline-warning">BACK</button>
              </RouterLink>
            </div>
          </div>

          <div class="twocards">

            <div class="card">
              <div class="card-body">
                <button type="button" class="btn btn-lg btn-light btn-outline-dark ">
                  <RouterLink to="/rentallistcostumes">RENTAL LIST COSTUMES</RouterLink>
                </button>
              </div>
            </div>

            <div class="card">
              <div class="card-body">
                <button type="button" class="btn btn-lg btn-light btn-outline-dark">
                  <RouterLink to="/rentallistsuits">RENTAL LIST SUITS FOR EVENTS</RouterLink>
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
    .backgroundrentallist {
      width: 100%;
      height:auto;
      background-color: #f3e5e5;
      justify-content: center;
    }
    .onlinerentallist{
      display:flex;
      justify-content: space-between;
      align-items: center;
      margin-left:35%;
    }
    .descriptionrentallist {
      background-color:transparent;
      padding:2% 6% 1% 6%;
      border:4px #ffc107 dotted;
      border-bottom-right-radius:  1rem;
      border-top-left-radius: 1rem;
      font-style: normal;
      text-align: center;
      background-color: #f5f5f5;
      color:rgb(190, 32, 169);
      margin:-13% 4% 2% 3%;
    }
    .descriptionrentallist:hover {
      color:rgb(6, 0, 0);
    }
    .twocards {
      display: flex;
      justify-content: center;
      align-items: space-around;
      gap:7vw;
      }
    .card {
      border: 1px solid blueviolet;
      border-radius: 1rem;
      padding-top: 3rem;
      margin: 3.5rem;
      background-image: url("https://cdn.pixabay.com/photo/2016/12/01/20/17/texture-1876097_1280.jpg");
      width: 25vw;
      height:35vh;
      display: flex;
      justify-content: center;
      align-items: center;

    }
    .card-body {
      text-align: center;
      width: 18vw;
      height:60vh;
    }
    .btn {
      background: #f5f5f5;
      color: #ffc107;
      font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      font-size:130%;
      border: 2px solid #ffc107;
    }
    .btn:hover {
      background-color:rgb(218, 216, 218);
    }

    .backbtn:hover {
      background-color: #ffc107;
      color:black;
    }
  }
  </style>