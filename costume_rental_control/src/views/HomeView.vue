<script setup>
  import Costumes from "../components/my_components/Costumes.vue";
  import Suits_For_Events from "../components/my_components/Suits_For_Events.vue";
  import Header from "../components/my_components/Header.vue";
  import Footer from "../components/my_components/Footer.vue";
</script>

<template>
  <main>
    <Costumes />
    <Suits_For_Events />
    <Header />
    <Footer />
  </main>
</template>

<style scoped>
@media (min-width: 1024px) {
  .home {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>