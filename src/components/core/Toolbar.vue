<template>
  <v-app-bar app text>
    <v-app-bar-nav-icon class="hidden-md-and-up" @click="toggleDrawer" />
    <v-container mx-auto py-0>
      <v-layout>
        <v-img
          :src="require('@/assets/logo.jpg')"
          class="mr-5"
          contain
          height="48"
          width="48"
          max-width="48"
        />
        <v-btn
          v-for="(link, i) in links"
          :key="i"
          :to="link.to"
          class="ml-0 hidden-sm-and-down"
          text
          @click="onClick($event, link)"
        >
          {{ link.text }}
        </v-btn>
          <v-btn
            class="mr-2"
            text
            @click="logOut"
          >
            Log out
            <v-icon
              dark
              right
            >
            mdi-account-off
            </v-icon>
          </v-btn>
        <v-spacer />
      </v-layout>
    </v-container>
  </v-app-bar>
</template>

<script>
// Utilities
import { mapGetters, mapMutations } from "vuex";

export default {
  computed: {
    ...mapGetters(["links"]),
  },

  methods: {
    ...mapMutations(["toggleDrawer"]),
    onClick(e, item) {
      e.stopPropagation();

      if (item.to || !item.href) return;

      this.$vuetify.goTo(item.href);
    },
    logOut() {
      this.$store.dispatch("auth/logout").then(()=>{
        if(!this.user_logged) {
          this.$router.push('./login')
        }
      })
    }
  },
};
</script>
