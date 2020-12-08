<template>
  <div >
    <core-toolbar />
    <core-drawer />
    <v-main id="home">
      <router-view />
    </v-main>
    <core-footer />
  </div>
</template>

<script>
export default {
  name: "MainContainer",
  components: {
    // CoreCta: () => import("@/components/core/Cta"),
    CoreDrawer: () => import("@/components/core/Drawer"),
    CoreFooter: () => import("@/components/core/Footer"),
    CoreToolbar: () => import("@/components/core/Toolbar"),
  },
  computed: {
    user_logged: {
      get() {
        return this.$store.getters["auth/user_logged"]
      }
    }
  },
  created() {
    if(!this.user_logged) {
      this.$router.push('./login')
    }
  },
  data() {
    return {
      //
    };
  },
};
</script>
