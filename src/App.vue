<template>
  <div id="app">
    <my-cv />
  </div>
</template>

<script>
import MyCv from "./components/MyCv.vue";

export default {
  name: "App",
  components: {
    MyCv
  }
};
</script>

<style lang="scss">
:root,
body,
html {
  margin: 0;
  padding: 0;
  background-color: #f5f5f5;
  box-sizing: border-box;
}
body {
  font-family: Helvetica;
}
body,
h1,
p {
  font-weight: 400;
  color: rgba(0, 0, 0, 0.9);
}
body,
p {
  font-size: 1.6rem;
  line-height: 1.5;
}

#app {
  width: 21cm;
  height: 29.7cm;
  margin: 0 auto;
}
</style>
