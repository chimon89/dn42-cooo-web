<template>
  <DrawerView>
    <NavBar></NavBar>
    <div class="container min-h-screen">
      <router-view></router-view>
    </div>
    <Footer></Footer>
  </DrawerView>
</template>

<script>
import DrawerView from "../components/DrawerView.vue";
import NavBar from "../components/NavBar.vue";
import Footer from "../components/Footer.vue";
export default {
  name: "Main",
  components: { NavBar, DrawerView, Footer }
}
</script>

<style scoped>

</style>
