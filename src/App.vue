<template>
  <div id="app">
    <Header/>
    <Main/>
  </div>
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";
import Header from "./components/Header.vue";
import Main from "./components/Main.vue";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

export default {
  name: "app",
  components: {
    Header,
    Main
  }
};
</script>