<script setup>

</script>

<template>
  <div class="header">
    <div class="homeicon">
      <RouterLink to="/">
        <iconify-icon icon="ant-design:home-outlined" width="50" height="50" style="color: #df1bb4">
        </iconify-icon>
      </RouterLink>
    </div>
    <h1><em>Wellcome To Rent Control Page</em></h1>
    <div class="rentallisticon">
      <RouterLink to="/rentallist">
        <iconify-icon inline icon="cil:list" style="color: #df1bb4;" width="50" height="50">
        </iconify-icon>
      </RouterLink>
    </div>
  </div>
</template>

<style scoped>
.header {
  background-image: url(" https://cdn.pixabay.com/photo/2016/12/01/20/17/texture-1876097__480.jpg");
  width: 100vw;
  height: 4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 3px solid fuchsia;
  font-style: normal;
}
.homeicon{
  margin-left:2.5%;
  margin-top:0.5%;
}
.rentallisticon{
  margin-right: 2.5%;
  margin-top:0.5%;
}
</style>