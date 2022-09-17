<template>
  <nav-bar></nav-bar>
  <router-view></router-view>
</template>

<script>
import NavBar from "./components/layout/NavBar.vue";
export default {
    components: {NavBar},
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto&display=swap");
*{
    box-sizing: border-box;
}

html{
    font-family: "Roboto", sans-serif;
}

body{
    margin: 0;
}
</style>