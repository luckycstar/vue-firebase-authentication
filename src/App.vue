<template>
  <v-app>
    <router-view/>
  </v-app>
</template>

<script>
export default {
  name: "App",
};
</script>
  <style>
  @import "./assets/styles/nicepage.css";
  .v-toolbar,
  .v-toolbar__content {
    height: 106px !important;
    flex-direction: row-reverse;
  }
  .v-main {
    padding-top: 106px !important;
  }
  .theme--light.v-btn {
    color: white;
  }
  .theme--light.v-app-bar.v-toolbar.v-sheet {
    background-color: black !important;
  }
  .v-btn--round .v-btn__content .v-icon {
    color: white !important;
  }
</style>