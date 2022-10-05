<script setup>

</script>
 
<template>
  <div class="card">
    <figure>
      <img class="card-img-top" src="https://cdn.pixabay.com/photo/2017/10/28/21/19/man-2898152_1280.png" alt="Card image cap"/>
    </figure>
    <div class="card-body">
      <button type="button" class="btn btn-m btn-light btn-outline-success">
        <RouterLink to="/rentform">RENT</RouterLink>
      </button>
    </div>
  </div>
</template>

<style scoped>
img.fluid {
    min-width: 100%;
    height: auto;
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
    height: 100%;
    overflow: hidden;
    border: 2px solid fuchsia;
    border-radius:1em;
   }
  .card-body {
    text-align: center;
  }
  .btn {
    background-color:whitesmoke;
   
    font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size:130%;
    border: 2px solid green;
     
  }
  .btn:hover {
    background-color: yellow;
    
    
  }
</style>