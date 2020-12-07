<template>
  <v-app>
    <core-toolbar />

    <core-drawer />

    <core-view />

    <core-footer />

    <!-- <core-cta /> -->
  </v-app>
</template>

<script>
export default {
  name: "App",
  components: {
    // CoreCta: () => import("@/components/core/Cta"),
    CoreDrawer: () => import("@/components/core/Drawer"),
    CoreFooter: () => import("@/components/core/Footer"),
    CoreToolbar: () => import("@/components/core/Toolbar"),
    CoreView: () => import("@/components/core/View"),
  },
  data() {
    return {
      //
    };
  },
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