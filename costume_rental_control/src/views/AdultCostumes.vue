<script setup>
  import Footer from '../components/my_components/Footer.vue';
  import Header from '../components/my_components/Header.vue';
  import Card from '../components/my_components/Card.vue';
</script>

<template>
  <div class="adulcostumescontainer">
    <Header/>
    <body>
      <main>
        <div class="input-group">
          <div id="search-autocomplete" class="form-outline">
            <input type="search" id="rentform" class="form-control" placeholder="Search"/>
            </div>
              <button type="button" class="btn btn-warning"></button>
            <div> 
            <RouterLink to="/costumes"><button type="button" class="backbtn btn btn-outline-warning">BACK</button></RouterLink>
          </div>
        </div>

        <div class="descriptionadultcostumes">
          <h5>All Adult Costumes...</h5>
        </div>
     
        <div class="cardscontainer">
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
        </div>
      </main>
    </body>
    <Footer/>
  </div>
  
</template>

<style scoped>
  .input-group{
    justify-content: center;
    margin-top:2%;  
  }
  .btn {
    background: rgb(221, 16, 180)
  }
  .backbtn {
    margin-left: 500%;
    background: whitesmoke;
  }
  
  .backgroundadultcostumes {
    width: 100%;
    height:auto;
  }
  .descriptionadultcostumes {
    text-align: start;
    background-color:transparent;
    font-style: italic;
    color:black;
    margin-top: 3%;
    margin-left: 8%;
  }
  img.fluid {
    min-width: 100%;
    height: auto;
  }
  .cardscontainer {
    display: flex;
    justify-content: center;
    align-items: space-around;
    flex-wrap:wrap;
    gap:2vw;
  }
  .card {
    border: 1px solid blueviolet;
    border-radius: 1rem;
    padding: 2rem;
    margin: 1rem;
    background-image: url("https://cdn.pixabay.com/photo/2016/12/01/20/17/texture-1876097_1280.jpg");
    width: 18vw;
    height:55vh;
  }
   .card > figure{
    width: 100%;
    height: 80%;
    overflow: hidden;
    border: 2px solid fuchsia;
    border-radius:1em;
   }
  .backgroundadultcostumes {
    background-color: whitesmoke;
  }
  .card-body {
    text-align: center;
  }
  </style>